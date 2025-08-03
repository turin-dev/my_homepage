import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const posts = import.meta.glob('../posts/*.md', { eager: true, import: 'default', query: '?raw' });

function getPosts() {
  return Object.entries(posts).map(([path, content]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    return { slug, content };
  });
}

export default function Blog() {
  const { slug } = useParams();
  const [postList] = useState(getPosts());

  if (slug) {
    const post = postList.find((p) => p.slug === slug);
    if (!post) return <p>포스트를 찾을 수 없습니다.</p>;
    return (
      <article className="prose max-w-none dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    );
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">블로그</h2>
      <ul className="space-y-2">
        {postList.map((p) => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} className="text-blue-500 hover:underline">
              {p.slug}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
