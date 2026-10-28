import type { ReactNode } from 'react';

interface SectionIntroProps {
  eyebrow: string;
  heading: ReactNode;
  meta?: string;
  description?: string;
  tone?: 'light' | 'dark';
}

export default function SectionIntro({ eyebrow, heading, meta, description, tone = 'light' }: SectionIntroProps) {
  return (
    <header className={`section-intro${tone === 'dark' ? ' section-intro--dark' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-intro__row">
        <h2 className="heading">{heading}</h2>
        {meta && <p className="section-intro__meta">{meta}</p>}
      </div>
      {description && <p className="body">{description}</p>}
    </header>
  );
}
