import { ArrowUpRight, Figma, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import { qArchives as d } from '../data/qArchives';

const IMG = '/images/q-archives';

export default function QArchivesCaseStudy() {
  const { challenge, flow, decisions, collection, implementation } = d;

  return (
    <div className="qacs">
      <section className="cs-intro" aria-labelledby="qa-title">
        <Link className="cs-back" to="/#projects">← Tất cả dự án</Link>
        <p className="eyebrow">{d.eyebrow}</p>
        <h1 id="qa-title" className="cs-title qa-title">
          {d.title.map((l) => (
            <span className="block" key={l}>{l}</span>
          ))}
        </h1>
        <div className="cs-summary">
          <p className="body">{d.summary}</p>
          <div className="cs-links">
            <a className="btn qa-btn qa-btn--primary" href={d.liveDemo.href} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="btn btn--secondary" href={d.figma.href} target="_blank" rel="noreferrer">
              Figma <Figma size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="qa-shot">
          <img
            src={`${IMG}/home.jpg`}
            width={1440}
            height={900}
            alt="Trang chủ Q.Archives: tiêu đề có chân 'Lưu giữ những khung hình đẹp nhất của bạn', nút xem bộ sưu tập và ảnh chân dung lớn bên phải"
          />
        </figure>
        <dl className="meta-grid">
          {d.metadata.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="disclosure">
          <Info size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>{d.status}</p>
        </div>
      </section>

      <section className="cs-section cs-section--paper">
        <p className="eyebrow">{challenge.eyebrow}</p>
        <div className="challenge">
          <div className="challenge__problem">
            <h2 className="heading">
              {challenge.heading.map((l) => (
                <span className="block" key={l}>{l}</span>
              ))}
            </h2>
            <p className="body">{challenge.text}</p>
          </div>
          <div className="challenge__goals">
            <h3 className="challenge__title">{challenge.goalsTitle}</h3>
            {challenge.goals.map((g) => (
              <div className="goal" key={g.n}>
                <span className="goal__num">{g.n}</span>
                <div>
                  <h4>{g.title}</h4>
                  <p>{g.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <SectionIntro eyebrow={flow.eyebrow} heading={flow.heading} description={flow.description} />
        <div className="qa-flow">
          <ol className="qa-steps">
            {flow.steps.map((s) => (
              <li key={s.n}>
                <span className="qa-steps__n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="qa-shot qa-shot--tall">
            <img
              src={`${IMG}/booking.jpg`}
              width={1440}
              height={1300}
              loading="lazy"
              alt="Trang đặt lịch Q.Archives: chọn concept, ba thẻ gói Chạm, Kể, Lưu, lịch tháng 11 với ngày còn trống, và cột tóm tắt buổi chụp có tiền cọc 30%"
            />
          </figure>
        </div>
      </section>

      <section className="cs-section cs-section--paper">
        <SectionIntro eyebrow={decisions.eyebrow} heading={decisions.heading} />
        <div className="qa-decisions">
          {decisions.items.map((it) => (
            <article className="qa-decision" key={it.eyebrow}>
              <p className="eyebrow">{it.eyebrow}</p>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <SectionIntro eyebrow={collection.eyebrow} heading={collection.heading} description={collection.description} />
        <figure className="qa-shot">
          <img
            src={`${IMG}/collection.jpg`}
            width={1440}
            height={900}
            loading="lazy"
            alt="Trang bộ sưu tập: bộ lọc theo 5 concept dạng nút tròn, hai menu chọn gói và sắp xếp, lưới ảnh bên dưới"
          />
        </figure>
      </section>

      <section className="cs-section cs-section--dark qa-dark">
        <SectionIntro
          tone="dark"
          eyebrow={implementation.eyebrow}
          heading={implementation.heading}
          description={implementation.description}
        />
        <div className="impl">
          <div className="code-card">
            <p className="code-card__path">{implementation.path}</p>
            <pre className="code-card__tree">{implementation.tree.join('\n')}</pre>
            <TagList tone="dark" tags={implementation.stack} />
          </div>
          <div className="priorities">
            {implementation.priorities.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="next-step">
          <h3>{implementation.next.title}</h3>
          <p>{implementation.next.text}</p>
        </div>
      </section>
    </div>
  );
}
