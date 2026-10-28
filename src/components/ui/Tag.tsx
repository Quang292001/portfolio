export function Tag({ label }: { label: string }) {
  return <span className="tag">{label}</span>;
}

export function TagList({ tags, tone = 'light' }: { tags: string[]; tone?: 'light' | 'dark' }) {
  return (
    <div className={`tag-list${tone === 'dark' ? ' tag-list--dark' : ''}`}>
      {tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>
  );
}
