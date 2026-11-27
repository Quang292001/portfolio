export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  stageBg: string;
  dark?: boolean; // true nếu nền thẻ tối
  ctaHref?: string; // link riêng cho nút trong mockup
  note?: string;
  links?: { label: string; href: string }[];
  /** Khung hình trong hero (kính ngắm). Thông số phơi sáng là một trò đùa của người chụp ảnh. */
  hero?: { image: string; kind: string; exposure: string };
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

/** Dự án chính, theo thứ tự hiển thị. Dự án đầu tiên là thẻ lớn. */
export const projects: Project[] = [
  {
    id: 'firefly-maze',
    title: 'Firefly Maze — Browser Game',
    description:
      'Game mê cung trên trình duyệt: đom đóm nhặt đốm sáng giữa rừng đêm, né bóng ma. Tự làm từ ý tưởng, nhân vật, bảng màu đến code Canvas.',
    tags: ['Game Design', 'Graphic & UI', 'JavaScript · Canvas'],
    href: '/projects/firefly-maze',
    links: [
      { label: 'Chơi ngay', href: 'https://firefly-maze.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/firefly-maze' },
      { label: 'Thiết kế Figma', href: 'https://www.figma.com/design/xmbIACuPCjCvDYtKwmGLCA/Firefly-Maze?node-id=0-1&t=JxCPRF4ggwhISEfG-0' },
    ],
    stageBg: '#06141b',
    dark: true,
    hero: { image: '/images/hero/firefly.jpg', kind: 'Game · Canvas', exposure: 'ISO 3200 · 1/30s' },
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
    id: 'stride',
    title: 'SHOES — E-commerce Website',
    description:
      'Cửa hàng giày làm trọn vòng: chọn size, giỏ hàng, đặt hàng, theo dõi đơn và trang quản trị sản phẩm. Frontend React nối API .NET.',
    tags: ['UI/UX Design', 'React', '.NET API'],
    href: '/projects/stride',
    ctaHref: 'https://shoes-ecommerce-6xyg.vercel.app/',
    links: [
      { label: 'Live demo', href: 'https://shoes-ecommerce-6xyg.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/shoes-ecommerce' },
    ],
    stageBg: '#e8eef5',
    hero: { image: '/images/hero/shoes.jpg', kind: 'E-commerce · Full-stack', exposure: 'ISO 200 · 1/1000s' },
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
    description:
      'Ứng dụng theo dõi thói quen học tập (TOEIC, lập trình, thiết kế) với lịch, biểu đồ tiến độ và cách xử lý khi bỏ lỡ một ngày.',
    tags: ['UI/UX Design', 'React', 'TypeScript'],
    href: '/projects/habit-tracker',
    links: [
      { label: 'Live demo', href: 'https://habit-tracker-two-delta.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/habit-tracker' },
    ],
    stageBg: '#f1ebe0',
    hero: { image: '/images/hero/habit.jpg', kind: 'Product · TypeScript', exposure: 'ISO 400 · 1/125s' },
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
    id: 'q-archives',
    title: 'Q.Archives — Photography Booking Website',
    description:
      'Website đặt lịch chụp ảnh concept: bộ sưu tập theo concept, ba gói chụp, chọn ngày giờ còn trống và giữ lịch bằng tiền cọc, tất cả trong một trang.',
    tags: ['UI/UX Design', 'React', 'Booking Flow'],
    href: '/projects/q-archives',
    ctaHref: 'https://website-studio-ten.vercel.app/',
    links: [
      { label: 'Live demo', href: 'https://website-studio-ten.vercel.app/' },
      { label: 'Thiết kế Figma', href: 'https://www.figma.com/design/HHHdjlqYYz6j6koO1pyH7G/LUMI-STUDIO-%E2%80%93-Photography-Booking-Website?node-id=16-2&t=UoFnpOsyyVfbWwTG-1' },
    ],
    stageBg: '#efebe3',
    hero: { image: '/images/hero/q-archives.jpg', kind: 'Booking · UX flow', exposure: 'ISO 100 · f/1.8' },
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
  {
    id: 'film-snake',
    title: 'Film Snake — Browser Game',
    description:
      'Game rắn săn mồi chủ đề nhiếp ảnh: dải phim đầu máy ảnh nhặt cuộn phim, săn ảnh hiếm để mở khóa album. Ý tưởng, hình vẽ, âm thanh và code Canvas đều tự làm.',
    tags: ['Game Design', 'Graphic & UI', 'JavaScript · Canvas'],
    href: '/projects/film-snake',
    links: [
      { label: 'Chơi ngay', href: 'https://film-snake.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/film-snake' },
    ],
    stageBg: '#140a0a',
    dark: true,
    hero: { image: '/images/hero/film-snake.jpg', kind: 'Game · Canvas', exposure: 'Phim 400 · 36 kiểu' },
    mockup: {
      variant: 'overlay',
      url: 'film-snake.vercel.app',
      brand: 'FILM SNAKE',
      links: '',
      overline: '',
      headline: ['', ''],
      cta: '',
      image: '/images/film-snake/desktop-1-guide.jpg',
    },
  },
  {
    id: 'crossing-saigon',
    title: 'Crossing Saigon — Browser Game',
    description:
      'Game băng qua đường phố Sài Gòn: nhiếp ảnh gia né xe máy, taxi, xe buýt để tới dãy nhà phố chụp ảnh. Lần đầu dùng Phaser 3, hình vẽ và âm thanh tự làm.',
    tags: ['Game Design', 'Graphic & UI', 'Phaser 3'],
    href: '/projects/crossing-saigon',
    links: [
      { label: 'Chơi ngay', href: 'https://crossing-saigon.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/Quang292001/crossing-saigon' },
    ],
    stageBg: '#1b1410',
    dark: true,
    hero: { image: '/images/hero/crossing-saigon.jpg', kind: 'Game · Phaser 3', exposure: 'ISO 800 · 1/500s' },
    mockup: {
      variant: 'overlay',
      url: 'crossing-saigon.vercel.app',
      brand: 'CROSSING SAIGON',
      links: '',
      overline: '',
      headline: ['', ''],
      cta: '',
      image: '/images/crossing-saigon/desktop-1-splash.jpg',
    },
  },
];

/** Bài tập và thử nghiệm: nhỏ hơn, không có case study, hiển thị gọn dưới lưới dự án. */
export const experiments: {
  title: string;
  year: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}[] = [
  {
    title: 'Nexus — Game Launcher',
    year: '2026',
    description: 'Luyện bố cục ứng dụng nhiều khu vực: thư viện, khám phá theo thể loại, tìm kiếm và danh sách yêu thích lưu trên trình duyệt.',
    tags: ['React', 'Vite', 'localStorage'],
    links: [
      { label: 'Xem web', href: 'https://nexus-game-launcher-six.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Quang292001/nexus-game-launcher' },
      { label: 'Figma', href: 'https://www.figma.com/design/svCHWcuikjBuidp7PztkvZ/Untitled?node-id=147-2&t=T7zIQ66bTARJhdha-1' },
    ],
  },
  {
    title: 'MỘC Studio — Landing Page',
    year: '2026',
    description: 'Landing page một trang cho studio ảnh ở Củ Chi: bộ ảnh, bảng gói, quy trình và form đặt lịch. Ý tưởng studio ảnh đầu tiên, sau đó phát triển thành Q.Archives.',
    tags: ['HTML · CSS · JS', 'Responsive'],
    links: [
      { label: 'Xem web', href: 'https://landing-page-beta-jet.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Quang292001/landing-page' },
    ],
  },
];
