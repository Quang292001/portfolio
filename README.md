# Portfolio — React + TypeScript + Vite

```bash
npm install
npm run dev
```

## Ảnh cần export từ Figma → `public/images/`
| File | Node Figma | Dùng ở |
|---|---|---|
| `sneaker.png` | 124:12393 (Sneaker photograph) | Dự án Stride |
| `portfolio-hero.png` | 124:12420 (Atmospheric illustration) | Dự án Personal Portfolio |
| `aether-hero.png` | 124:12448 (Atmospheric illustration) | Dự án Aether |

| `about-workspace.png` | 124:12525 (Workspace illustration) | Trang Về tôi |
| `stride-mobile.png` | 124:12853 (Mobile sneaker) | Case study — màn hình điện thoại 1 |
| `stride-cart.png` | 124:12881 (Cart product) | Case study — màn hình điện thoại 2 |

Trong Figma: chọn layer → Export (PNG, 2x) → đặt đúng tên file ở trên.

## Cần điền
`src/data/site.ts`: email, link CV, LinkedIn / GitHub / Behance.

## Cấu trúc
- `src/styles/tokens.css` — màu, font, spacing, radius (từ UI kit)
- `src/components/ui` — Button, Tag, SectionIntro, BrowserMockup, ProjectCard
- `src/components/layout` — Navigation (có menu mobile), Footer
- `src/pages/Home.tsx` — Trang chủ
- `src/pages/CaseStudy.tsx` + `src/data/stride.ts` — Case study Stride (`/projects/stride`)
- `src/pages/About.tsx` + `src/data/about.ts` — Về tôi & kỹ năng
- Breakpoint: ≤767px dùng layout mobile (lề 24, section 48)
