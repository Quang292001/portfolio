import { ArrowUpRight, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import { habitTracker as d } from '../data/habitTracker';

export default function HabitCaseStudy() {
  const { challenge, decisions, implementation } = d;

  return (
    <div className="hcs">
      <section className="cs-intro" aria-labelledby="hcs-title">
        <Link className="cs-back" to="/#projects">← Tất cả dự án</Link>
        <p className="eyebrow">{d.eyebrow}</p>
        <h1 id="hcs-title" className="cs-title">
          {d.title.map((l) => (
            <span className="block" key={l}>{l}</span>
          ))}
        </h1>
        <div className="cs-summary">
          <p className="body">{d.summary}</p>
          <div className="cs-links">
            <Button
              variant={d.liveDemo.href ? 'primary' : 'disabled'}
              href={d.liveDemo.href || undefined}
              icon={<ArrowUpRight size={15} />}
            >
              {d.liveDemo.href ? 'Live demo' : 'Live demo · sắp có'}
            </Button>
            <Button variant="secondary" href={d.sourceCode.href} icon={<Github size={15} />}>
              Source code
            </Button>
          </div>
        </div>
        <div className="disclosure">
          <Info size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>{d.status}</p>
        </div>
        <figure className="shot-stage">
          <img
            src="/images/habit-tracker-desktop.png"
            alt="Giao diện Habit Tracker trên máy tính: lịch tháng, danh sách thói quen hôm nay và biểu đồ tiến độ"
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
        <SectionIntro eyebrow={decisions.eyebrow} heading={decisions.heading} description={decisions.description} />
        <div className="ui-detail">
          <div className="decisions">
            {decisions.items.map((it) => (
              <div className="decision" key={it.eyebrow}>
                <p className="eyebrow">{it.eyebrow}</p>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
          <div className="phones">
            <img
              className="shot-phone"
              src="/images/habit-tracker-mobile.png"
              alt="Danh sách thói quen trên điện thoại, mỗi thói quen có ô tích lớn, dải 7 chấm tuần này và nút thao tác"
            />
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--dark">
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
