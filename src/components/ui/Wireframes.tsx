import { Image as ImageIcon } from 'lucide-react';
import type { ReactNode } from 'react';

function WireScreen({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="wf" aria-hidden="true">
      <div className="wf__nav">
        <i className="wf__logo" />
        <span className="wf__label">{label}</span>
        <i className="wf__menu" />
      </div>
      <hr className="wf__rule" />
      {children}
    </div>
  );
}

export default function Wireframes() {
  return (
    <div className="wf-grid">
      <WireScreen label="Khám phá & bộ lọc">
        <div className="wf-hero">
          <div className="wf-hero__text">
            <i className="ph-h" />
            <i className="ph-c" />
            <i className="ph-b" />
          </div>
          <ImageIcon size={35} strokeWidth={1.25} color="#a7b4c4" />
        </div>
        <div className="wf-products">
          {[0, 1, 2].map((i) => (
            <div className="wf-product" key={i}>
              <i className="wf-product__img" />
              <i className="wf-product__name" />
              <i className="wf-product__price" />
            </div>
          ))}
        </div>
      </WireScreen>

      <WireScreen label="Chi tiết sản phẩm">
        <div className="wf-detail">
          <div className="wf-detail__img">
            <ImageIcon size={40} strokeWidth={1.25} color="#a7b4c4" />
          </div>
          <div className="wf-detail__info">
            <i className="wf-detail__title" />
            <i className="wf-detail__desc" />
            <span className="wf-detail__sizelabel">Chọn size</span>
            <i className="wf-detail__sizes" />
            <i className="wf-detail__cta" />
          </div>
        </div>
      </WireScreen>

      <WireScreen label="Giỏ hàng">
        <div className="wf-cart">
          {['Sản phẩm', 'Tạm tính', 'Vận chuyển'].map((l) => (
            <div className="wf-cart__line" key={l}>
              <span>{l}</span>
              <i />
            </div>
          ))}
          <i className="wf-cart__item" />
          <i className="wf-cart__checkout" />
        </div>
      </WireScreen>
    </div>
  );
}
