import { Routes, Route, Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const rawPosts = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

const summaries = Object.entries(rawPosts).map(([path, content]) => {
  const slug = path.split('/').pop().replace('.md', '');
  const lines = content.split('\n');
  const title = lines[0].replace(/^#\s+/, '');
  const date = lines[2]?.replace(/^>\s*/, '');
  return { slug, title, date };
});

function PostList() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <ul className="space-y-4">
        {summaries.map((post) => (
          <li key={post.slug} className="border-b pb-2">
            <Link to={post.slug} className="text-xl hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Post() {
  const { slug } = useParams();
  const content = rawPosts[`../posts/${slug}.md`];
  if (!content) return <p>포스트를 찾을 수 없습니다.</p>;
  return (
    <article className="space-y-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default function Blog() {
  return (
    <Routes>
      <Route index element={<PostList />} />
      <Route path=":slug" element={<Post />} />
    </Routes>
  );
}

