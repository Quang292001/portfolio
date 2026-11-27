import { useState } from 'react';
import { ArrowUpRight, Figma, Github, Info, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import { fireflyMaze as d } from '../data/fireflyMaze';

const IMG = '/images/firefly';

export default function FireflyCaseStudy() {
  const { idea, visual, screens, decisions, implementation } = d;
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="ffcs">
      {/* ---------- Intro ---------- */}
      <section className="ff-intro" aria-labelledby="ff-title">
        <span className="ff-trail" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </span>
        <Link className="cs-back" to="/#projects">← Tất cả dự án</Link>
        <p className="eyebrow">{d.eyebrow}</p>
        <h1 id="ff-title" className="ff-title">
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
            <a className="btn ff-btn" href={d.figma.href} target="_blank" rel="noreferrer">
              Figma <Figma size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="ff-hero-shot">
          <picture>
            <source media="(max-width: 767px)" srcSet={`${IMG}/mobile-3-hud.png`} width={585} height={1266} />
            <img
            src={`${IMG}/desktop-3-hud.png`}
            width={1280}
            height={800}
            alt="Màn chơi Firefly Maze: mê cung phát sáng màu lam, đom đóm vàng, bốn bóng ma và HUD điểm, kỷ lục, màn, mạng"
            />
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

      {/* ---------- 01 Ý tưởng ---------- */}
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

      {/* ---------- 02 Hệ thống thị giác ---------- */}
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
            <p className="eyebrow">BÓNG MA</p>
            <div className="ff-ghosts" aria-hidden="true">
              {visual.ghosts.map((hex) => (
                <svg key={hex} viewBox="0 0 40 44" width="44" height="48" style={{ color: hex }}>
                  <path
                    d="M4 22a16 16 0 0 1 32 0v18l-5.3-4-5.4 4-5.3-4-5.3 4-5.4-4L4 40z"
                    fill="currentColor"
                    fillOpacity=".18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="14" cy="21" r="3.2" fill="currentColor" />
                  <circle cx="26" cy="21" r="3.2" fill="currentColor" />
                </svg>
              ))}
            </div>
            <p className="ff-card__note">{visual.ghostNote}</p>
          </div>
          <div className="ff-card">
            <p className="eyebrow">TYPOGRAPHY</p>
            <p className="ff-type-display">FIREFLY MAZE</p>
            <p className="ff-type-hud">SCORE 1250 · LEVEL 3</p>
            <p className="ff-type-body">Nhặt hết đốm sáng để qua màn</p>
            <p className="ff-card__note">{visual.typeNote}</p>
          </div>
        </div>
        <figure className="ff-logo">
          <img
            src={`${IMG}/figma-logo.png`}
            width={770}
            height={235}
            loading="lazy"
            alt="Logo Firefly Maze trong Figma: chữ FIREFLY vàng, MAZE lam, đom đóm bay theo đường mê cung; bên phải là icon vuông"
          />
          <figcaption>{visual.logoNote}</figcaption>
        </figure>
      </section>

      {/* ---------- 03 Màn hình ---------- */}
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
        <ol className={`ff-screens ff-screens--${device}`}>
          {screens.items.map((s, i) => (
            <li key={s.key}>
              <img
                src={`${IMG}/${device}-${s.key}.png`}
                width={device === 'desktop' ? 1280 : 585}
                height={device === 'desktop' ? 800 : 1266}
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

      {/* ---------- 04 Quyết định thiết kế ---------- */}
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

      {/* ---------- 05 Code ---------- */}
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
