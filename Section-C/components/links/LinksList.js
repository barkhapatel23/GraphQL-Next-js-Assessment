import LinkCard from "./LinkCard";

export default function LinksList({
  links
}) {
  return (
    <div className="grid">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
        />
      ))}
    </div>
  );
}