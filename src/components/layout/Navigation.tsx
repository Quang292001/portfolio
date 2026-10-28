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
          <span className="nav__mono" aria-hidden="true">〈/〉</span>
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
