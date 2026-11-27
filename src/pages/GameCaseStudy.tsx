import { useState } from 'react';
import { ArrowUpRight, Github, Info, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import type { filmSnake } from '../data/filmSnake';

export type GameStudy = typeof filmSnake;

// Case study cho các game nhỏ (Film Snake, Crossing Saigon): dùng lại bố cục và lớp CSS của trang Firefly (.ffcs, .ff-*).
// theme là lớp đổi bảng màu, vd. ffcs--film; ảnh nằm ở /images/<id>/<device>-<key>.jpg.
export default function GameCaseStudy({ d, theme }: { d: GameStudy; theme: string }) {
  const { idea, visual, screens, decisions, implementation } = d;
  const IMG = `/images/${d.id}`;
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className={`ffcs ${theme}`}>
      <section className="ff-intro" aria-labelledby="game-title">
        <span className="ff-trail" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </span>
        <Link className="cs-back" to="/#projects">← Tất cả dự án</Link>
        <p className="eyebrow">{d.eyebrow}</p>
        <h1 id="game-title" className="ff-title">
          <span className="block">{d.title[0]}</span>
          <span className="block ff-title__glow">{d.title[1]}</span>
        </h1>
        <div className="cs-summary">
          <p className="body">{d.summary}</p>
          <div className="cs-links">
            <a className="btn ff-btn ff-btn--glow" href={d.play.href} target="_blank" rel="noreferrer">
              Chơi ngay <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="btn ff-btn" href={d.sourceCode.href} target="_blank" rel="noreferrer">
              Source code <Github size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="ff-hero-shot">
          <picture>
            <source media="(max-width: 767px)" srcSet={`${IMG}/mobile-${d.heroKey}.jpg`} width={390} height={844} />
            <img src={`${IMG}/desktop-${d.heroKey}.jpg`} width={1440} height={900} alt={d.heroAlt} />
          </picture>
        </figure>
        <dl className="meta-grid ff-meta">
          {d.metadata.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="ff-disclosure">
          <Info size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>{d.status}</p>
        </div>
      </section>

      <section className="ff-section ff-section--deep">
        <p className="eyebrow">{idea.eyebrow}</p>
        <div className="challenge">
          <div className="challenge__problem">
            <h2 className="heading">
              {idea.heading.map((l) => (
                <span className="block" key={l}>{l}</span>
              ))}
            </h2>
            <p className="body">{idea.text}</p>
          </div>
          <div className="challenge__goals">
            <h3 className="challenge__title">{idea.goalsTitle}</h3>
            {idea.goals.map((g) => (
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

      <section className="ff-section">
        <SectionIntro tone="dark" eyebrow={visual.eyebrow} heading={visual.heading} description={visual.description} />
        <ul className="ff-palette">
          {visual.palette.map((c) => (
            <li key={c.hex}>
              <span className="ff-swatch" style={{ background: c.hex }} />
              <strong>{c.role}</strong>
              <code>{c.hex}</code>
            </li>
          ))}
        </ul>
        <div className="ff-visual-row">
          <div className="ff-card">
            <p className="eyebrow">VẬT PHẨM</p>
            <dl className="fs-items">
              {visual.items.map((it) => (
                <div key={it.name}>
                  <dt>{it.name}</dt>
                  <dd>{it.effect}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ff-card">
            <p className="eyebrow">KIỂU CHỮ</p>
            <p className="ff-type-display fs-display">{visual.typeSample.display}</p>
            <p className="ff-type-hud fs-hud">{visual.typeSample.hud}</p>
            <p className="ff-type-body fs-body">{visual.typeSample.body}</p>
            <p className="ff-card__note">{visual.typeNote}</p>
          </div>
        </div>
      </section>

      <section className="ff-section ff-section--deep">
        <div className="ff-screens-head">
          <SectionIntro tone="dark" eyebrow={screens.eyebrow} heading={screens.heading} description={screens.description} />
          <div className="ff-toggle" role="group" aria-label="Chọn kích thước màn hình">
            <button type="button" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}>
              <Monitor size={15} aria-hidden="true" /> Máy tính
            </button>
            <button type="button" aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}>
              <Smartphone size={15} aria-hidden="true" /> Điện thoại
            </button>
          </div>
        </div>
        <ol className={`ff-screens ff-screens--${device} fs-screens`} data-n={screens.items.length}>
          {screens.items.map((s, i) => (
            <li key={s.key}>
              <img
                src={`${IMG}/${device}-${s.key}.jpg`}
                width={device === 'desktop' ? 1440 : 390}
                height={device === 'desktop' ? 900 : 844}
                loading="lazy"
                alt={`Màn ${s.label} trên ${device === 'desktop' ? 'máy tính' : 'điện thoại'}`}
              />
              <span>
                <b>{String(i + 1).padStart(2, '0')}</b> {s.label}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="ff-section">
        <SectionIntro tone="dark" eyebrow={decisions.eyebrow} heading={decisions.heading} />
        <div className="ff-decisions">
          {decisions.items.map((it) => (
            <article className="ff-decision" key={it.eyebrow}>
              <p className="eyebrow">{it.eyebrow}</p>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ff-section ff-section--deep">
        <SectionIntro
          tone="dark"
          eyebrow={implementation.eyebrow}
          heading={implementation.heading}
          description={implementation.description}
        />
        <div className="impl">
          <div className="code-card ff-code">
            <p className="code-card__path">{implementation.path}</p>
            <pre className="code-card__tree">{implementation.tree.join('\n')}</pre>
            <pre className="ff-snippet"><code>{implementation.snippet.join('\n')}</code></pre>
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
        <div className="next-step ff-next">
          <h3>{implementation.next.title}</h3>
          <p>{implementation.next.text}</p>
        </div>
      </section>
    </div>
  );
}
