export default function LinkCard({
  title,
  url
}) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
    </div>
  );
}