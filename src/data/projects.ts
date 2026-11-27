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
     id: 'habit-tracker',
     title: 'Habit Tracker — Study Planner',
     description: 'Ứng dụng theo dõi thói quen học tập (TOEIC, lập trình, thiết kế) với lịch, biểu đồ tiến độ và cách xử lý khi bỏ lỡ một ngày.',
     tags: ['UI/UX Design', 'React', 'TypeScript'],
     href: '/projects/habit-tracker',
     links: [
       { label: 'Source code', href: 'https://github.com/Quang292001/habit-tracker' },
       { label: 'Live demo', href: 'https://habit-tracker-two-delta.vercel.app/' }, // dán link Vercel sau khi deploy
     ],
     stageBg: '#f1ebe0',
     mockup: {
       variant: 'split',
       url: 'habit-tracker / study planner',
       brand: 'habits.',
       links: 'Hôm nay     Lịch     Tiến độ',
       overline: 'STUDY HABIT TRACKER',
       headline: ['Đều đặn,', 'không áp lực.'],
       text: ['Theo dõi thói quen học tập.', 'Lỡ một ngày vẫn quay lại được.'],
       cta: 'Xem case study ↗',
       image: '/images/habit-card.png',
     },
   },
  {
    id: 'firefly-maze',
    title: 'Firefly Maze — Browser Game',
    description: 'Game mê cung trên trình duyệt: đom đóm nhặt đốm sáng giữa rừng đêm, né bóng ma. Tự làm từ ý tưởng, nhân vật, bảng màu đến code Canvas.',
    tags: ['Game Design', 'Graphic & UI', 'JavaScript · Canvas'],
    href: '/projects/firefly-maze',
    links: [
      { label: 'Chơi ngay', href: 'https://firefly-maze.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/firefly-maze' },
      { label: 'Thiết kế Figma', href: 'https://www.figma.com/design/xmbIACuPCjCvDYtKwmGLCA/Firefly-Maze?node-id=0-1&t=JxCPRF4ggwhISEfG-0' },
    ],
    stageBg: '#06141b',
    dark: true,
    mockup: {
      variant: 'overlay',
      url: 'firefly-maze.vercel.app',
      brand: 'FIREFLY MAZE',
      links: '',
      overline: '',
      headline: ['', ''],
      cta: '',
      image: '/images/firefly/desktop-1-start.png',
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
  {
    id: 'moc-studio',
    title: 'MỘC Studio — Photography Landing Page',
    description: 'Landing page cho studio nhiếp ảnh tại Củ Chi: giới thiệu bộ ảnh, bảng gói chụp, quy trình và form đặt lịch.',
    tags: ['UI/UX Design', 'Landing Page', 'Responsive'],
    href: 'https://landing-page-beta-jet.vercel.app/',
    ctaHref: 'https://landing-page-beta-jet.vercel.app/',
    links: [
      { label: 'Live demo', href: 'https://landing-page-beta-jet.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/landing-page' },
    ],
    stageBg: '#ede6dc',
    mockup: {
      variant: 'split',
      url: 'landing-page-beta-jet.vercel.app',
      brand: 'MỘC STUDIO',
      links: 'Giới thiệu     Bộ ảnh     Dịch vụ     Về Mộc',
      overline: 'STUDIO NHIẾP ẢNH / CỦ CHI',
      headline: ['Chụp một khoảnh khắc.', 'Lưu một đời kỷ niệm.'],
      text: ['Không cần cầu kỳ. Chỉ cần bạn,', 'tự nhiên, trong khoảnh khắc của mình.'],
      cta: 'Xem landing page ↗',
      image: '/images/moc-studio.jpg',
    },
  },
  {
    id: 'q-archives',
    title: 'Q.Archives — Photography Booking Website',
    description: 'Website đặt lịch chụp ảnh concept tại Sài Gòn: bộ sưu tập theo concept, bảng gói chụp, chọn ngày giờ còn trống và đặt cọc giữ lịch.',
    tags: ['UI/UX Design', 'React', 'Booking Flow'],
    href: 'https://website-studio-ten.vercel.app/',
    ctaHref: 'https://website-studio-ten.vercel.app/',
    links: [
      { label: 'Live demo', href: 'https://website-studio-ten.vercel.app/' },
      { label: 'Thiết kế Figma', href: 'https://www.figma.com/design/HHHdjlqYYz6j6koO1pyH7G/LUMI-STUDIO-%E2%80%93-Photography-Booking-Website?node-id=16-2&t=UoFnpOsyyVfbWwTG-1' },
    ],
    stageBg: '#efebe3',
    mockup: {
      variant: 'split',
      url: 'website-studio-ten.vercel.app',
      brand: 'Q.Archives',
      links: 'Bộ sưu tập     Gói chụp     Giới thiệu     Liên hệ',
      overline: 'PHOTOGRAPHY · SÀI GÒN',
      headline: ['Lưu giữ những', 'khung hình đẹp nhất.'],
      text: ['Chụp concept sinh nhật, nàng thơ, cổ trang.', 'Chọn gói, chọn giờ, đặt lịch ngay trên web.'],
      cta: 'Xem bộ sưu tập ↗',
      image: '/images/q-archives.jpg',
    },
  },
];
