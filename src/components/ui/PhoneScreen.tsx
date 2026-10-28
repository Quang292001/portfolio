import { BatteryFull, ShoppingBag, Signal, Wifi } from 'lucide-react';
import type { ReactNode } from 'react';

export default function PhoneScreen({ children }: { children: ReactNode }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__status">
        <span>9:41</span>
        <span className="phone__signals">
          <Signal size={10} />
          <Wifi size={10} />
          <BatteryFull size={15} />
        </span>
      </div>
      <div className="phone__nav">
        <span>SHOES</span>
        <ShoppingBag size={15} strokeWidth={1.5} />
      </div>
      {children}
      <i className="phone__home" />
    </div>
  );
}
