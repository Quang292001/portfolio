import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

// Hero dạng kính ngắm máy ảnh: mỗi dự án là một "khung hình" đã chụp.
// Tự chuyển khung mỗi 4 giây; dừng khi rê chuột/focus và khi người xem bật giảm chuyển động.
const frames = projects.filter((p) => p.hero);
const INTERVAL = 4000;

export default function HeroVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || paused) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % frames.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused]);

  const p = frames[active];
  const n = (i: number) => String(i + 1).padStart(2, '0');

  return (
    <div
      className="vf"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Link className="vf__frame" to={p.href} aria-label={`Xem dự án ${p.title}`}>
        {frames.map((f, i) => (
          <img
            key={f.id}
            className={`vf__img${i === active ? ' is-active' : ''}`}
            src={f.hero!.image}
            alt=""
            width={1280}
            height={800}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <span className="vf__shade" aria-hidden="true" />
        <span className="vf__corners" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="vf__focus" key={`focus-${active}`} aria-hidden="true" />
        <span className="vf__top" aria-hidden="true">
          <span><b className="vf__rec" />KHUNG {n(active)}/{String(frames.length).padStart(2, '0')}</span>
          <span>{p.hero!.exposure}</span>
        </span>
        <span className="vf__caption" key={`cap-${active}`}>
          <small>{p.hero!.kind}</small>
          <strong>{p.title.split(' — ')[0]}</strong>
        </span>
      </Link>

      <div className="vf__strip" role="group" aria-label="Chọn khung hình">
        {frames.map((f, i) => (
          <button
            key={f.id}
            type="button"
            className="vf__thumb"
            aria-pressed={i === active}
            aria-label={`Khung ${n(i)}: ${f.title}`}
            onClick={() => setActive(i)}
          >
            <img src={f.hero!.image} alt="" width={160} height={100} loading="lazy" />
            <span>{n(i)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
