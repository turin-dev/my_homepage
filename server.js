import express from 'express';
import { Pool } from 'pg';

const conn = 'postgresql://postgres:NwanzjapZJAqvQiMsNiBwGUQHAJqvzeF@postgres-en2t.railway.internal:5432/railway';
const pool = new Pool({ connectionString: conn });
const wait = ms => new Promise(r => setTimeout(r, ms));

async function initDB() {
  while (true) {
    try {
      await pool.query('SELECT 1');
      await pool.query('CREATE TABLE IF NOT EXISTS post (date TEXT, name TEXT, detail TEXT)');
      break;
    } catch (e) {
      console.error('DB connect fail', e.message);
      await wait(5000);
    }
  }
}

await initDB();

const app = express();

app.get('/posts', async (req, res) => {
  for (let i = 0; i < 5; i++) {
    try {
      const { rows } = await pool.query('SELECT * FROM post ORDER BY date DESC');
      return res.json(rows);
    } catch (e) {
      if (i === 4) return res.status(503).json({ error: 'db error' });
      await wait(5000);
    }
  }
});

app.get('/post/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.sendStatus(400);
  try {
    const { rows } = await pool.query(`
      WITH numbered AS (
        SELECT row_number() OVER (ORDER BY date DESC) AS id, date, name, detail
        FROM post
      )
      SELECT date, name, detail FROM numbered WHERE id = $1
    `, [id]);
    if (!rows.length) return res.sendStatus(404);
    res.json(rows[0]);
  } catch (e) {
    res.status(503).json({ error: 'db error' });
  }
});

app.listen(3000, () => console.log('server running on 3000'));
