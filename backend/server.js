const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/posts', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM post ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(503);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
