import time
from flask import Flask, render_template, abort
import psycopg2
from psycopg2.extras import RealDictCursor
import markdown2

DATABASE_URL = "postgresql://postgres:NwanzjapZJAqvQiMsNiBwGUQHAJqvzeF@postgres-en2t.railway.internal:5432/railway"

app = Flask(__name__)

def get_posts():
    """Fetch all posts with one retry on failure."""
    for attempt in range(2):
        try:
            conn = psycopg2.connect(DATABASE_URL)
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    "SELECT id, date, name, detail FROM post ORDER BY date DESC"
                )
                return cur.fetchall()
        except Exception:
            if attempt == 0:
                time.sleep(5)
            else:
                return []
        finally:
            if 'conn' in locals() and conn:
                conn.close()

@app.route('/')
def index():
    posts = get_posts()
    return render_template('post_list.html', posts=posts)

@app.route('/post/<int:post_id>')
def post_detail(post_id):
    try:
        conn = psycopg2.connect(DATABASE_URL)
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                "SELECT id, date, name, detail FROM post WHERE id = %s", (post_id,)
            )
            post = cur.fetchone()
    except Exception:
        post = None
    finally:
        if 'conn' in locals() and conn:
            conn.close()

    if not post:
        abort(404)

    post['detail'] = markdown2.markdown(post['detail'])
    return render_template('post_detail.html', post=post)

if __name__ == '__main__':
    app.run()
