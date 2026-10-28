import { Download } from 'lucide-react';
import type { ReactNode } from 'react';
import { site } from '../../data/site';
import Button from '../ui/Button';

export default function Footer({ heading }: { heading?: ReactNode }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__contact">
        <div className="footer__invite">
          <p className="eyebrow eyebrow--ice">LET’S BUILD SOMETHING MEANINGFUL</p>
          <h2 className="heading heading--light">
            {heading ?? (
              <>
                <span className="block">Một ý tưởng tốt.</span>
                <span className="block">Một trải nghiệm đáng nhớ.</span>
              </>
            )}
          </h2>
          <p className="body body--dark">
            Kết nối để trao đổi về vị trí UI/UX Designer hoặc Frontend Developer phù hợp.
          </p>
        </div>

        <div className="footer__actions">
          {site.email ? (
            <a className="footer__email" href={`mailto:${site.email}`}>Email: {site.email}</a>
          ) : (
            <p className="footer__email">[Email] ↗</p>
          )}
          {site.phone ? (
            <a className="footer__phone" href={`tel:${site.phone}`}>Phone: {site.phone}</a>
          ) : (
            <p className="footer__phone">[SDT] ↗</p>
          )}
          <p className="footer__social">
            {site.socials.map((s, i) => (
              <span key={s.label}>
                {i > 0 && '  /  '}
                {s.href ? <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a> : `[${s.label}]`}
              </span>
            ))}
          </p>
          <Button
            variant="ghost-dark"
            href={site.cvUrl || undefined}
            download={site.cvUrl ? site.cvFileName : undefined}
            icon={<Download size={15} />}
          >
            {site.cvUrl ? 'Tải CV' : 'Tải CV · [Thêm file CV]'}
          </Button>
        </div>
      </div>

      <div className="footer__rule" />
      <div className="footer__colophon">
        <span>© 2026 {site.name} · Design & code with care.</span>
        
      </div>
    </footer>
  );
}
