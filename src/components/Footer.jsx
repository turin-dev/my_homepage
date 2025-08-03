import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
      <p className="text-sm">© {new Date().getFullYear()} Turin. All rights reserved.</p>
    </footer>
  );
}
