import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/blog', 'Blog'],
  ['/portfolio', 'Portfolio'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="sticky top-0 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-5xl mx-auto flex items-center gap-4 p-4">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`
            }
          >
            {label}
          </NavLink>
        ))}
        <button
          onClick={() => setDark((v) => !v)}
          className="ml-auto px-2 py-1 text-sm border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? '라이트' : '다크'}
        </button>
      </nav>
    </header>
  );
}
