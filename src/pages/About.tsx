import { CodeXml, Download, Figma, MessagesSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionIntro from '../components/ui/SectionIntro';
import { TagList } from '../components/ui/Tag';
import { about } from '../data/about';
import { site } from '../data/site';

const icons = { figma: Figma, code: CodeXml } as const;

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
            <img className="about__photo" src="/images/dream.jpeg" alt="" />
            <figcaption className="project__note">Minh họa không gian sáng tạo · code.</figcaption>
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
            <Button variant="primary" href={site.cvUrl || undefined}
            download={site.cvUrl ? site.cvFileName : undefined} icon={<Download size={15} />}>
              Xem CV{site.cvUrl ? '' : ' · [Thêm file của bạn]'}
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--paper capabilities">
        <SectionIntro
          eyebrow="01 / CAPABILITIES"
          heading="Hai góc nhìn. Một trải nghiệm."
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
        <SectionIntro eyebrow="02 / HOW I WORK" heading="Từ câu hỏi đúng đến sản phẩm tốt." />
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
