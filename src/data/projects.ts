export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  stageBg: string;
  dark?: boolean; // ← thêm dòng này: true nếu nền thẻ tối
   ctaHref?: string; // link riêng cho nút trong mockup;
   note?: string;
links?: { label: string; href: string }[];
  mockup:
    | {
        variant: 'split';
        url: string;
        brand: string;
        links: string;
        overline: string;
        headline: string[];
        text: string[];
        cta: string;
        image: string;
      }
    | {
        variant: 'overlay';
        url: string;
        brand: string;
        links: string;
        overline: string;
        headline: string[];
        cta: string;
        image: string;
      };
};

export const projects: Project[] = [
  {
    id: 'stride',
    title: 'SHOES — E-commerce Website',
    
    description: 'Trải nghiệm tìm và chọn giày, từ khám phá bộ sưu tập đến giỏ hàng rõ ràng.',
    tags: ['UI/UX Design', 'React', 'Tailwind CSS'],
     href: '/projects/stride',          // tiêu đề vẫn dẫn tới trang case study
  ctaHref: 'https://shoes-ecommerce-6xyg.vercel.app/', // nút "Khám phá bộ sưu tập" dẫn tới web thật
    stageBg: '#e8eef5',
    mockup: {
      variant: 'split',
      url: 'https://shoes-ecommerce-6xyg.vercel.app/',
      brand: 'SHOES.',
      links: 'Bộ sưu tập     Nam     Nữ       Tìm kiếm  ⌕',
      overline: 'THE EVERYDAY COLLECTION',
      headline: ['Mỗi bước chân.', 'Một dấu ấn.'],
      text: ['Thiết kế nhẹ nhàng. Chuyển động tự do.', 'Tìm đôi giày dành riêng cho bạn.'],
      cta: 'Khám phá bộ sưu tập ↗',
      image: '/images/shoes.png',

    },
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Không gian kể câu chuyện cá nhân qua thiết kế và lập trình.',
    tags: ['Web Design', 'Next.js'],
    href: '#',
    stageBg: '#1c304a',
    dark: true,
    mockup: {
      variant: 'overlay',
      url: 'portfolio / concept',
      brand: '〈/〉 Portfolio',
      links: 'Explore     Collection     About',
      overline: 'DESIGNER & DEVELOPER',
      headline: ['Ý tưởng thành', 'trải nghiệm.'],
      cta: 'Khám phá dự án ↗',
      image: '/images/portfolio-hero.png',
    },
  },
  {
  id: 'nexus',
  title: 'Nexus — Game Launcher',
  description: 'Launcher game fantasy RPG mô phỏng: duyệt thư viện, khám phá theo thể loại, tìm kiếm và lưu game yêu thích.',
  tags: ['UI/UX Design', 'React', 'Vite'],
  href: 'https://nexus-game-launcher-six.vercel.app/',
  ctaHref: 'https://nexus-game-launcher-six.vercel.app/',
  links: [
    { label: 'Source code', href: 'https://github.com/Quang292001/nexus-game-launcher' },
    { label: 'Thiết kế Figma', href: 'https://www.figma.com/design/svCHWcuikjBuidp7PztkvZ/Untitled?node-id=147-2&t=T7zIQ66bTARJhdha-1' }, // dán link Figma của bạn vào đây
  ],
  stageBg: '#152137',
  dark: true,
  mockup: {
    variant: 'overlay',
    url: 'nexus-game-launcher-six.vercel.app',
    brand: 'NEXUS',
    links: 'Home     Library     Discover     Favorites',
    overline: '',
    headline: ['', ''],
    cta: '',
    image: '/images/nexus.png',
  },
},
];
