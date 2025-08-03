export default function Contact() {
  const links = [
    { href: 'https://github.com/turin-dev', label: 'GitHub' },
    { href: 'mailto:turin@example.com', label: 'Email' },
    { href: 'https://discordapp.com/users/turin', label: 'Discord' },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
