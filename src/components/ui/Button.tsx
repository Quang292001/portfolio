import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ice' | 'ghost-dark' | 'disabled';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  href?: string;
  /** Tên file khi tải về (chỉ có tác dụng với file cùng domain). */
  download?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', icon, href, download, onClick }: ButtonProps) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (variant === 'disabled') {
    return <span className={className} aria-disabled="true">{content}</span>;
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        className={className}
        href={href}
        {...(download ? { download } : external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}
