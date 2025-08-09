export default function Methods() {
  const links = [
    { name: "Splunk", url: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Injuries", url: "https://www.logged.tg/auth/exmade" },
    { name: "Cookie Bypasser", url: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Hyperlink Gen", url: "https://dsprs.vercel.app/hyperlink" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'red' }}>Methods</h1>
      <ol>
        {links.map((link, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <a href={link.url} target="_blank">{link.name}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}
