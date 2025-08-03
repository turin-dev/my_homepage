import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const navItem = 'px-3 py-2 hover:text-blue-400';

  return (
    <nav className="bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold">Turin</Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/" className={navItem}>Home</NavLink>
          <NavLink to="/about" className={navItem}>About</NavLink>
          <NavLink to="/blog" className={navItem}>Blog</NavLink>
          <NavLink to="/portfolio" className={navItem}>Portfolio</NavLink>
          <NavLink to="/contact" className={navItem}>Contact</NavLink>
          <button onClick={() => setDark(!dark)} className="px-2 py-1 text-sm">
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
