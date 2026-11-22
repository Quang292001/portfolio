import { CodeXml, Download, FileText, Figma, MessagesSquare, Server, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import { about } from '../data/about';
import { site } from '../data/site';

const icons = { figma: Figma, code: CodeXml, server: Server, sparkles: Sparkles } as const;

export default function About() {
  return (
    <>
      <section className="section about" aria-labelledby="about-title">
        <header className="section-intro section-intro--lg">
          <p className="eyebrow">ABOUT / THE PERSON BEHIND THE PIXELS</p>
          <h1 id="about-title" className="heading">Xin chào, mình là {site.name}.</h1>
          <p className="body">{about.subtitle}</p>
        </header>

        <div className="about__bio">
          <figure className="about__figure">
            <img className="about__photo" src="/images/quang.jpg" alt="Huỳnh Nhật Quang" />
            <figcaption className="project__note">Huỳnh Nhật Quang · UI/UX Designer & Frontend Developer</figcaption>
          </figure>

          <div className="about__text">
            <p className="about__statement">{about.statement}</p>
            {about.paragraphs.map((p) => (
              <p className="body" key={p}>{p}</p>
            ))}
            <dl className="details">
              {about.details.map((d) => (
                <div className="details__item" key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
            <div className="about__cv">
              <Button variant="primary" href={site.cvUrl || undefined} newTab icon={<FileText size={15} />}>
                Xem CV
              </Button>
              <Button variant="secondary" href={site.cvUrl || undefined} download={site.cvFileName} icon={<Download size={15} />}>
                Tải CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section" aria-labelledby="timeline-title">
        <SectionIntro eyebrow="01 / EXPERIENCE & EDUCATION" heading="Kinh nghiệm & học vấn." />
        <ol className="timeline">
          {about.timeline.map((t) => (
            <li className="timeline__item" key={t.title}>
              <p className="timeline__time">{t.time}</p>
              <div className="timeline__body">
                <h3 className="timeline__title">{t.title}</h3>
                <p className="timeline__place">{t.place}</p>
                <ul className="timeline__points">
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="creative">
          <p className="eyebrow">NGOÀI UI/UX</p>
          <TagList tags={about.creative} />
        </div>
      </section>

      <section className="section section--paper capabilities">
        <SectionIntro
          eyebrow="02 / CAPABILITIES"
          heading="Thiết kế, code và những gì ở giữa."
          description="Các kỹ năng và công cụ theo từng lĩnh vực"
        />
        <div className="capabilities__grid">
          {about.disciplines.map((d) => {
            const Icon = icons[d.icon as keyof typeof icons];
            return (
              <article className="discipline" key={d.id}>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <div className="discipline__title">
                  <h3>{d.title}</h3>
                  <p className="body">{d.summary}</p>
                </div>
                <TagList tags={d.tags} />
                <hr className="rule" />
                <p className="discipline__tools">{d.tools}</p>
                <p className="project__desc">{d.output}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process">
        <SectionIntro eyebrow="03 / HOW I WORK" heading="Từ câu hỏi đúng đến sản phẩm tốt." />
        <ol className="process__stages">
          {about.process.map((s) => (
            <li className="stage-step" key={s.n}>
              <span className="stage-step__num">{s.n}</span>
              <h3 className="stage-step__title">{s.title}</h3>
              <p className="body">{s.text}</p>
              <p className="stage-step__out">{s.deliverables}</p>
            </li>
          ))}
        </ol>
        <div className="principle">
          <MessagesSquare size={22} strokeWidth={1.5} aria-hidden="true" />
          <p>{about.principle}</p>
        </div>
      </section>
    </>
  );
}
