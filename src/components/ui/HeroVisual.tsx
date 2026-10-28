// Hình minh họa hero dựng bằng code: cửa sổ editor + thẻ UI là kết quả của đoạn code đó.
type Token = [kind: 'k' | 't' | 's' | 'p' | 'c' | 'n', text: string];

const code: Token[][] = [
  [['k', 'export function '], ['t', 'ProductCard'], ['p', '({ item }) {']],
  [['p', '  '], ['k', 'return'], ['p', ' (']],
  [['p', '    <'], ['t', 'article'], ['n', ' className'], ['p', '='], ['s', '"card"'], ['p', '>']],
  [['p', '      <'], ['t', 'img'], ['n', ' src'], ['p', '={item.image} />']],
  [['p', '      <'], ['t', 'h3'], ['p', '>{item.name}</'], ['t', 'h3'], ['p', '>']],
  [['p', '      <'], ['t', 'Button'], ['n', ' variant'], ['p', '='], ['s', '"primary"'], ['p', '>']],
  [['p', '        Thêm vào giỏ']],
  [['p', '      </'], ['t', 'Button'], ['p', '>']],
  [['p', '    </'], ['t', 'article'], ['p', '>']],
  [['p', '  );']],
  [['p', '}']],
];

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv__glow" />

      <div className="hv__editor">
        <div className="hv__chrome">
          <i /><i /><i />
          <span className="hv__tab">ProductCard.tsx</span>
        </div>
        <div className="hv__code">
          {code.map((line, i) => (
            <div className="hv__line" key={i}>
              <span className="hv__ln">{i + 1}</span>
              <span>
                {line.map(([kind, text], j) => (
                  <span className={`tok-${kind}`} key={j}>{text}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hv__palette">
        <i style={{ background: '#080f1e' }} />
        <i style={{ background: '#365f88' }} />
        <i style={{ background: '#b6dbff' }} />
        <i style={{ background: '#f5f7fa' }} />
        <span>Colors</span>
      </div>

      <div className="hv__card">
        <div className="hv__card-img">
          <svg viewBox="0 0 120 60" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
            <ellipse cx="60" cy="50" rx="38" ry="5" fill="#172336" opacity=".12" />
            <path d="M18 40c0-8 6-10 12-11l12-12c3-3 7-2 9 1l4 6c8 1 24 3 30 8 3 2 3 7 0 8H22c-3 0-4-2-4-5z" fill="#365f88" />
            <path d="M18 40h82c3-1 3-6 0-8-3 6-80 6-82 8z" fill="#f5f7fa" />
            <path d="M44 24l5 5m3-8l5 5" stroke="#b6dbff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="hv__tag">Everyday</span>
        <strong>Stride Everyday</strong>
        <span className="hv__price">1.290.000 ₫</span>
        <div className="hv__sizes">
          {[37, 38, 39, 40].map((s) => (
            <span key={s} className={s === 38 ? 'is-selected' : undefined}>{s}</span>
          ))}
        </div>
        <span className="hv__cta">Thêm vào giỏ +</span>
      </div>
    </div>
  );
}
