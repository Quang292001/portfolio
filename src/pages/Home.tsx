import { ArrowDown, ArrowUpRight, CodeXml, Download, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import HeroVisual from '../components/ui/HeroVisual';
import ProjectCard from '../components/ui/ProjectCard';
import SectionIntro from '../components/ui/SectionIntro';
import { projects } from '../data/projects';
import { site } from '../data/site';

const [featured, ...others] = projects;

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--ice">PORTFOLIO / DESIGN × DEVELOPMENT</p>
          <p className="hero__greeting">Xin chào, mình là {site.name}</p>
          <h1 id="hero-title" className="hero__title">
            <span className="block">Thiết kế có chiều sâu.</span>
            <span className="block">Code đến từng chi tiết.</span>
          </h1>
          <p className="hero__role">{site.role}</p>
          <p className="body body--dark">
            Kết nối tư duy trải nghiệm với khả năng hiện thực hóa giao diện. Từ một vấn đề cần giải quyết đến một sản phẩm
            dễ dùng, chỉn chu và có thể triển khai.
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
          <span>HUMAN-CENTERED. DETAIL-DRIVEN.</span>
          <ArrowDown size={17} aria-hidden="true" />
        </div>
      </section>

      <section className="section work" id="projects">
        <SectionIntro
          eyebrow="01 / SELECTED WORK"
          heading="Sản phẩm thay lời nói."
          meta="03 concept · UI/UX & Frontend"
          description="Thể hiện góc nhìn từ những ý tưởng và sản phẩm được xây dựng từ thiết kế đến giao diện."
        />
        <ProjectCard project={featured} featured />
        <div className="work__grid">
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        {/* <p className="note">
          Các giao diện trên là concept minh họa cho cách trình bày. Thay bằng ảnh sản phẩm, vai trò và đường dẫn thực tế
          trước khi ứng tuyển.
        </p> */}
      </section>

      <section className="section section--paper">
        <div className="approach">
          <div className="approach__main">
            <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
            <h2 className="heading">
              <span className="block">Tư duy thiết kế.</span>
              <span className="block">Tinh thần xây dựng.</span>
            </h2>
            <p className="body">
              Mình hướng đến giao diện vừa rõ ràng với người dùng, vừa thực tế khi phát triển. Mỗi màn hình là sự kết hợp
              giữa cấu trúc, cảm xúc và chi tiết.
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
