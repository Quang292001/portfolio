import { ArrowDown, ArrowUpRight, CodeXml, Download, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import HeroVisual from '../components/ui/HeroVisual';
import ProjectCard from '../components/ui/ProjectCard';
import SectionIntro from '../components/ui/SectionIntro';
import { experiments, projects } from '../data/projects';
import { site } from '../data/site';

const [featured, ...others] = projects;

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--ice">PORTFOLIO 2026 · TP. HỒ CHÍ MINH</p>
          <p className="hero__greeting">Xin chào, mình là {site.name}</p>
          <h1 id="hero-title" className="hero__title">
            <span className="block">Nhìn như nhiếp ảnh gia.</span>
            <span className="block hero__title-accent">Dựng như lập trình viên.</span>
          </h1>
          <p className="hero__role">{site.role}</p>
          <p className="body body--dark">
            Một năm cầm máy ảnh dạy mình đọc ánh sáng, bố cục và màu sắc. Mình mang cách nhìn đó vào giao diện, rồi tự
            tay code nó, từ một trang đặt lịch đến một game chạy trên trình duyệt.
          </p>
          <div className="hero__actions">
            <Button variant="ice" href="#projects" icon={<ArrowUpRight size={15} />}>Xem dự án</Button>
            <Button variant="ghost-dark" href={site.cvUrl || undefined}
            download={site.cvUrl ? site.cvFileName : undefined} icon={<Download size={15} />}>Tải CV</Button>
          </div>
        </div>
        <HeroVisual />
        </div>
        <div className="hero__foot">
          <span>{String(projects.length).padStart(2, '0')} KHUNG HÌNH ĐƯỢC CHỌN · CUỘN XUỐNG ĐỂ XEM</span>
          <ArrowDown size={17} aria-hidden="true" />
        </div>
      </section>

      <section className="section work" id="projects">
        <SectionIntro
          eyebrow="01 / KHUNG HÌNH CHỌN LỌC"
          heading="Sản phẩm thay lời nói."
          meta={`${String(projects.length).padStart(2, '0')} dự án · UI/UX & Frontend`}
          description="Mỗi dự án đều do mình thiết kế và tự code, có case study kể lại vì sao nó trông như vậy."
        />
        <ProjectCard project={featured} index={1} featured />
        <div className="work__grid">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 2} />
          ))}
        </div>
        <div className="experiments">
          <div className="experiments__head">
            <p className="eyebrow">BÀI TẬP & THỬ NGHIỆM</p>
            <p className="experiments__note">Nhỏ hơn, không có case study, nhưng là nơi mình thử những thứ mới.</p>
          </div>
          <ul className="experiments__list">
            {experiments.map((e) => (
              <li className="experiment" key={e.title}>
                <span className="experiment__year">{e.year}</span>
                <div className="experiment__body">
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <p className="experiment__tags">{e.tags.join(' · ')}</p>
                <p className="experiment__links">
                  {e.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="note">
          Các giao diện trên là concept minh họa cho cách trình bày. Thay bằng ảnh sản phẩm, vai trò và đường dẫn thực tế
          trước khi ứng tuyển.
        </p> */}
      </section>

      <section className="section section--paper">
        <div className="approach">
          <div className="approach__main">
            <p className="eyebrow">02 / VÀI ĐIỀU VỀ MÌNH</p>
            <h2 className="heading">
              <span className="block">Đẹp phải có lý do.</span>
              <span className="block">Code phải đọc được.</span>
            </h2>
            <p className="body">
              Mình yêu nghệ thuật nhưng cần mọi thứ hợp lý. Mỗi màu, mỗi khoảng trống đều phải trả lời được câu hỏi "để làm
              gì", và mỗi dòng code đều phải để người sau đọc hiểu.
            </p>
            <Link className="btn btn--secondary" to="/about">
              Về tôi & kỹ năng
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="approach__practice">
            <div className="practice">
              <PenTool className="practice__icon" size={24} aria-hidden="true" />
              <div>
                <h3 className="practice__title">Thiết kế có chủ đích</h3>
                <p className="body">Luồng người dùng, khung giao diện (wireframe), bản mẫu (prototype) và hệ thống giao diện nhất quán.</p>
              </div>
            </div>
            <div className="practice">
              <CodeXml className="practice__icon" size={24} aria-hidden="true" />
              <div>
                <h3 className="practice__title">Xây dựng bằng sự chỉn chu</h3>
                <p className="body">Bố cục linh hoạt (responsive), các thành phần có thể tái sử dụng và trải nghiệm dễ tiếp cận.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
