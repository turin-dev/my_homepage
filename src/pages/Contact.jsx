import React from 'react';

export default function Contact() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">Contact</h2>
      <div className="space-x-4">
        <a href="https://github.com/username" className="text-blue-500 hover:underline">GitHub</a>
        <a href="mailto:turin@example.com" className="text-blue-500 hover:underline">Email</a>
        <a href="https://discord.com/users/yourid" className="text-blue-500 hover:underline">Discord</a>
      </div>
    </section>
  );
}
