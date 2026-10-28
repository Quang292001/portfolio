import type { Project } from '../../data/projects';
import {Link} from "react-router-dom";

function Cta({ href, children }: { href?: string; children: string }) {
  if (!href) return <span className="mockup__cta">{children}</span>;

  // Link ngoài (https://...) → thẻ <a>, mở tab mới để người xem không rời khỏi portfolio
  if (/^https?:/.test(href)) {
    return (
      <a className="mockup__cta" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  // Trang trong project → Link của React Router
  return (
    <Link className="mockup__cta" to={href}>
      {children}
    </Link>
  );
}
export default function BrowserMockup({ mockup,ctaHref }: { mockup: Project['mockup']; ctaHref?: string }) {
  const dark = mockup.variant === 'overlay';
  return (
    <div className={`mockup${dark ? ' mockup--dark' : ''}`} aria-hidden={ctaHref ? undefined : true}>
      {/* <div className="mockup__chrome">
        <i className="mockup__dot" />
        <i className="mockup__dot" />
        <i className="mockup__dot" />
      </div> */}
      <div className="mockup__header">

      </div>
      <div className="mockup__hero">
        {mockup.variant === 'split' ? (
          <div className="mockup__split">
            <div className="mockup__prop">
              <p className="mockup__overline">{mockup.overline}</p>
              <p className="mockup__headline">
                {mockup.headline.map((l) => (
                  <span className="block" key={l}>{l}</span>
                ))}
              </p>
              <p className="mockup__text">
                {mockup.text.map((l) => (
                  <span className="block" key={l}>{l}</span>
                ))}
              </p>
              <Cta href={ctaHref}>{mockup.cta}</Cta>
            </div>
            <img className="mockup__photo" src={mockup.image} alt="" />
          </div>
        ) : (
          <>
            <img className="mockup__bg" src={mockup.image} alt="" />
            <div className="mockup__overlay">
              <p className="mockup__overline">{mockup.overline}</p>
              <p className="mockup__headline">
                {mockup.headline.map((l) => (
                  <span className="block" key={l}>{l}</span>
                ))}
              </p>
              <Cta href={ctaHref}>{mockup.cta}</Cta>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
