import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/blog', 'Blog'],
  ['/portfolio', 'Portfolio'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-5xl mx-auto flex gap-4 p-4">
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
      </nav>
    </header>
  );
}
