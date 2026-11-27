import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../../data/site';
import Button from '../ui/Button';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="nav">
      <div className="nav__bar">
        <NavLink to="/" className="nav__identity" onClick={() => setOpen(false)}>
          <svg className="nav__mark" viewBox="0 0 28 28" width="28" height="28" aria-hidden="true">
            <path d="M2 9V2h7M19 2h7v7M26 19v7h-7M9 26H2v-7" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="14" cy="14" r="3.5" fill="#e8ff59" />
          </svg>
          <span className="nav__name">{site.name}</span>
        </NavLink>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Điều hướng chính">
          {site.nav.map((item) =>
            item.to.includes('#') ? (
              <a key={item.label} className={`nav__link${pathname.startsWith('/projects') ? ' is-active' : ''}`} href={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Button variant="ghost-dark" href="#contact" icon={<ArrowUpRight size={15} />}>
            Liên hệ
          </Button>
        </nav>
      </div>
    </header>
  );
}
