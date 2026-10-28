import { ArrowUpRight, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrowserMockup from '../components/ui/BrowserMockup';
import Button from '../components/ui/Button';
import PhoneScreen from '../components/ui/PhoneScreen';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import Wireframes from '../components/ui/Wireframes';
import { projects } from '../data/projects';
import { stride } from '../data/stride';

const mockup = projects[0].mockup;

function Stage() {
  return (
    <div className="stage stage--lg">
      <BrowserMockup mockup={mockup} ctaHref={projects[0].ctaHref} />
    </div>
  );
}

export default function CaseStudy() {
  const { challenge, research, wireframes, solution, implementation } = stride;

  return (
    <>
      <section className="cs-intro" aria-labelledby="cs-title">
        <Link className="cs-back" to="/#projects">← Tất cả dự án</Link>
        <p className="eyebrow">{stride.eyebrow}</p>
        <h1 id="cs-title" className="cs-title">
          {stride.title.map((l) => (
            <span className="block" key={l}>{l}</span>
          ))}
        </h1>
        <div className="cs-summary">
          <p className="body">{stride.summary}</p>
          <div className="cs-links">
            <Button variant="primary" href={stride.liveDemo.href || undefined} icon={<ArrowUpRight size={15} />}>
              {stride.liveDemo.label}
            </Button>
            <Button variant="secondary" href={stride.sourceCode.href || undefined} icon={<Github size={15} />}>
              {stride.sourceCode.label}
            </Button>
          </div>
        </div>
        {/* <div className="disclosure">
          <Info size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>{stride.disclosure}</p>
        </div> */}
        <Stage />
        <dl className="meta-grid">
          {stride.metadata.map((m) => (
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
        <SectionIntro eyebrow={research.eyebrow} heading={research.heading} description={research.description} />
        <div className="rq-grid">
          {research.questions.map((r) => (
            <article className="rq" key={r.q}>
              <TagList tags={[r.tag]} />
              <h3>{r.q}</h3>
              <p>{r.note}</p>
            </article>
          ))}
        </div>
        {/* <p className="project__desc">{research.footnote}</p> */}
      </section>

      <section className="cs-section cs-section--paper">
        <SectionIntro eyebrow={wireframes.eyebrow} heading={wireframes.heading} description={wireframes.description} />
        <Wireframes />
        <p className="project__desc">{wireframes.footnote}</p>
      </section>

      <section className="cs-section">
        <SectionIntro eyebrow={solution.eyebrow} heading={solution.heading} description={solution.description} />
        <Stage />
        <div className="ui-detail">
          <div className="decisions">
            {solution.decisions.map((d) => (
              <div className="decision" key={d.eyebrow}>
                <p className="eyebrow">{d.eyebrow}</p>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <div className="phones">
            <PhoneScreen>
              <img className="phone__img" src="/images/shoes4.png" alt="" />
              <span className="phone__cat">EVERYDAY COLLECTION</span>
              <div className="phone__name">
                <strong>Stride Everyday</strong>
                <span>1.290.000 ₫</span>
              </div>
              <div className="phone__sizes">
                {[37, 38, 39, 40].map((s) => (
                  <span key={s} className={s === 38 ? 'is-selected' : undefined}>{s}</span>
                ))}
              </div>
              <span className="phone__cta">Thêm vào giỏ hàng +</span>
            </PhoneScreen>
            <PhoneScreen>
              <strong className="phone__title">Giỏ hàng của bạn</strong>
              <img className="phone__img phone__img--cart" src="/images/shoes3.png" alt="" />
              <p className="phone__line">
                Stride Everyday
                <br />
                Trắng / Xanh · Size 38 · SL: 1
              </p>
              <hr className="rule" />
              <p className="phone__total">
                <span>Tổng cộng</span>
                <span>1.290.000 ₫</span>
              </p>
              <span className="phone__cat">Phí vận chuyển hiển thị ở bước tiếp theo.</span>
              <span className="phone__cta">Tiếp tục thanh toán →</span>
            </PhoneScreen>
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
    </>
  );
}
