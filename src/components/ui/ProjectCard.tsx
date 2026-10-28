import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';
import BrowserMockup from './BrowserMockup';
import { TagList } from './Tag';

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const internal = project.href.startsWith('/');
  const clickable = project.href !== '#'; // '#' = chưa có trang đích → không hiệu ứng, không bấm
  const external = clickable && !internal;

  const title = (
    <>
      <h3 className="project__title">{project.title}</h3>
      <ArrowUpRight size={21} strokeWidth={1.5} aria-hidden="true" />
    </>
  );

  const classes = ['project-card', featured && 'project-card--lg', project.dark && 'project-card--dark']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes} style={{ '--stage-bg': project.stageBg } as CSSProperties}>
      {/* Vùng trắng: nổi lên khi hover, bấm để sang trang dự án */}
      <div className={`project-card__preview${clickable ? ' project-card__preview--link' : ''}`}>
        <BrowserMockup
          mockup={project.mockup}
          ctaHref={project.ctaHref ?? (internal ? project.href : undefined)}
        />

        {/* Lớp liên kết trong suốt phủ lên vùng trắng. tabIndex=-1 + aria-hidden vì
            người dùng bàn phím / trình đọc màn hình đã có liên kết ở tiêu đề bên dưới */}
        {internal && (
          <Link className="project-card__hit" to={project.href} tabIndex={-1} aria-hidden="true" />
        )}
        {external && (
          <a
            className="project-card__hit"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            aria-hidden="true"
          />
        )}

        {clickable && (
          <span className="project-card__hint" aria-hidden="true">
            {internal ? 'Xem case study' : 'Xem dự án'}
            <ArrowUpRight size={14} />
          </span>
        )}
      </div>

      {/* Khối chữ nằm trong khung xám */}
      <div className="project__info">
        {internal ? (
          <Link className="project__title-row" to={project.href}>{title}</Link>
        ) : (
          <a className="project__title-row" href={project.href}>{title}</a>
        )}
        <p className="project__desc">{project.description}</p>
        <TagList tags={project.tags} tone={project.dark ? 'dark' : 'light'} />
        {project.links?.some((l) => l.href) && (
  <p className="project__links">
    {project.links.filter((l) => l.href).map((l) => (
      <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
    ))}
  </p>
)}
        {project.note && <p className="project__note">{project.note}</p>}
      </div>
    </article>
  );
}