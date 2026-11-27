import type { GameStudy } from '../pages/GameCaseStudy';

// Nội dung case study Crossing Saigon. Số liệu (tốc độ làn, +15%/màn, chạm 300ms, vuốt 18px...) lấy từ index.html trong repo.
export const crossingSaigon: GameStudy = {
  id: 'crossing-saigon',
  heroKey: '2-play',
  heroAlt: 'Màn chơi Crossing Saigon nhìn từ trên xuống: dãy nhà phố nhiều màu ở trên, các làn xe máy, taxi, xe buýt xanh và xe đẩy hàng rong, dải phân cách có ly cà phê, nhân vật nhiếp ảnh gia đứng giữa đường',
  eyebrow: 'CASE STUDY / GAME DESIGN · GRAPHIC · FRONTEND',
  title: ['Crossing Saigon —', 'qua đường để chụp một tấm ảnh.'],
  summary:
    'Game băng qua đường lấy bối cảnh phố Sài Gòn. Bạn là một nhiếp ảnh gia phải né xe máy, taxi, xe buýt và xe đẩy hàng rong để tới dãy nhà phố bên kia đường chụp ảnh. Game thứ ba trong loạt game nhỏ về chụp ảnh, và là lần đầu mình dùng một game engine.',
  play: { href: 'https://crossing-saigon.vercel.app/' },
  sourceCode: { href: 'https://github.com/Quang292001/crossing-saigon' },
  status:
    'Lối chơi thuộc thể loại băng qua đường quen thuộc (như Frogger). Bối cảnh, nhân vật, xe cộ, âm thanh và code đều tự làm; thư viện Phaser 3 được tải từ CDN.',
  metadata: [
    { label: 'VAI TRÒ', value: 'Ý tưởng · Graphic · UI · Code' },
    { label: 'DỰ ÁN', value: 'Cá nhân' },
    { label: 'CÔNG NGHỆ', value: 'Phaser 3 · Canvas 2D · Web Audio' },
    { label: 'NỀN TẢNG', value: 'Máy tính · Điện thoại' },
  ],
  idea: {
    eyebrow: '01 / Ý TƯỞNG',
    heading: ['Ai sống ở Sài Gòn', 'cũng từng chơi game này.'],
    text: 'Băng qua một con đường đông xe ở Sài Gòn là một kỹ năng sống: không chạy, không dừng đột ngột, đi đều để xe máy tự tránh. Mình biến cảm giác đó thành game, và cho nhân vật một lý do để qua đường: dãy nhà phố nhiều màu bên kia là khung hình đẹp nhất con phố.',
    goalsTitle: 'Ba nguyên tắc từ đầu',
    goals: [
      { n: '01', title: 'Nhìn là biết Sài Gòn', text: 'Xe máy nhiều nhất, xe buýt xanh, xe đẩy dù sọc, ly cà phê sữa đá và dãy nhà phố mái che sọc đỏ trắng.' },
      { n: '02', title: 'Mỗi bước một quyết định', text: 'Nhân vật đi theo từng ô, nên người chơi luôn phải chọn: bước tới, né ngang hay đứng đợi.' },
      { n: '03', title: 'Thua cũng thấy vui', text: 'Bị tông thì camera rung, mất một mạng rồi hồi sinh nhấp nháy ở vỉa hè, điểm vẫn được giữ.' },
    ],
  },
  visual: {
    eyebrow: '02 / HỆ THỐNG THỊ GIÁC',
    heading: 'Bảng màu "Phố cũ".',
    description:
      'Nền nâu ấm như mặt đường lúc chiều, để xe cộ và dãy nhà phố nhiều màu nổi lên. Đỏ dùng cho nút và cảnh báo, vàng cho điểm số.',
    palette: [
      { role: 'Nền', hex: '#1B1410' },
      { role: 'Bảng', hex: '#261B15' },
      { role: 'Đỏ mái che', hex: '#D7262E' },
      { role: 'Vàng taxi', hex: '#FFC93C' },
      { role: 'Xanh xe buýt', hex: '#2E9B62' },
      { role: 'Chữ', hex: '#FBEFE2' },
    ],
    items: [
      { name: 'Xe máy', effect: 'Nhanh nhất, 130–185 px/giây' },
      { name: 'Taxi', effect: 'Vừa phải, 100–110 px/giây' },
      { name: 'Xe buýt', effect: 'Dài nhất, chậm 60–70 px/giây' },
      { name: 'Xe đẩy hàng rong', effect: 'Chậm nhất, 50–55 px/giây' },
      { name: 'Cà phê sữa đá', effect: '+50 điểm, nằm trên dải phân cách' },
      { name: 'Dãy nhà phố', effect: 'Chụp 1 ảnh, +100 × số màn' },
    ],
    typeSample: { display: 'CROSSING SAIGON', hud: 'BỊ TÔNG RỒI! · 1240', body: 'Băng qua đường tới dãy nhà phố để chụp ảnh' },
    typeNote: 'Cùng cặp font với Film Snake: Bungee cho logo và con số, Rubik cho chữ đọc. Hai game nhìn như cùng một loạt.',
  },
  screens: {
    eyebrow: '03 / MÀN HÌNH',
    heading: 'Ba trạng thái, hai kích thước.',
    description: 'Đường hẹp lại trên điện thoại (7 cột) và rộng ra trên máy tính (tối đa 11 cột), nên ô và nhân vật luôn đủ to để chạm.',
    items: [
      { key: '1-splash', label: 'Mở đầu' },
      { key: '2-play', label: 'Đang chơi' },
      { key: '3-pause', label: 'Tạm dừng' },
    ],
  },
  decisions: {
    eyebrow: '04 / QUYẾT ĐỊNH THIẾT KẾ',
    heading: 'Một bước đi, nhưng phải đúng nhịp.',
    items: [
      {
        eyebrow: '01 / ĐIỀU KHIỂN',
        title: 'Nhớ một bước bấm sớm',
        text: 'Mỗi bước nhảy mất 110ms. Bấm thêm trong lúc đang nhảy thì game nhớ bước đó và đi tiếp ngay khi chạm đất, nên bấm nhanh không bị mất lệnh. Giữ phím không làm nhân vật chạy liên tục.',
      },
      {
        eyebrow: '02 / CẢM ỨNG',
        title: 'Chạm là bước tới, vuốt là đổi hướng',
        text: 'Phần lớn bước đi là tiến lên, nên thao tác đó dễ nhất: chạm nhanh dưới 300ms. Vuốt quá 18px mới là đi ngang hoặc lùi.',
      },
      {
        eyebrow: '03 / BỐ CỤC',
        title: 'Đường hẹp hơn thì ít xe hơn',
        text: 'Số cột tự chọn từ 7 đến 11 theo tỉ lệ màn hình. Số xe mỗi làn giảm theo độ rộng con đường, để mật độ giao thông trên điện thoại giống trên máy tính.',
      },
      {
        eyebrow: '04 / NHỊP CHƠI',
        title: 'Dải phân cách là chỗ thở',
        text: 'Hàng giữa đường luôn an toàn và có ly cà phê để thưởng. Chụp ảnh xong có 450ms dừng lại cho đã, xe vẫn chạy. Còi xe kêu ngẫu nhiên mỗi 2,5–6,5 giây cho đúng chất phố.',
      },
    ],
  },
  implementation: {
    eyebrow: '05 / TỪ THIẾT KẾ ĐẾN CODE',
    heading: 'Phaser lo vòng lặp, canvas lo hình vẽ.',
    description:
      'Lần đầu dùng game engine, mình để Phaser 3 lo vòng lặp, tween cho bước nhảy, rung camera và co giãn bàn chơi. Mọi hình vẽ vẫn là code Canvas 2D của mình, nạp vào Phaser thành texture.',
    path: 'crossing-saigon /',
    tree: ['index.html', '  ├─ draw*()   xe, nhà phố, nhân vật (Canvas)', '  ├─ create()  nạp texture vào Phaser', '  ├─ update()  xe chạy vòng, va chạm AABB', '  └─ Sound     còi xe, nhạc nền (Web Audio)'],
    stack: ['Phaser 3', 'Canvas 2D', 'Web Audio', 'localStorage', 'Vercel'],
    snippet: [
      '// Vẽ sprite bằng Canvas ở độ phân giải gấp đôi,',
      '// rồi nạp vào Phaser như một texture',
      'function makeTex(scene, key, w, h, fn) {',
      "  const c = document.createElement('canvas');",
      '  c.width = w * 2; c.height = h * 2;',
      "  const g = c.getContext('2d'); g.scale(2, 2); fn(g, w, h);",
      '  scene.textures.addCanvas(key, c);',
      '}',
    ],
    priorities: [
      {
        title: 'Một hàm vẽ, hai chỗ dùng',
        text: 'Các hàm vẽ xe máy, taxi, xe buýt, xe đẩy, nhân vật và ly cà phê được dùng cho cả texture trong game lẫn hình minh họa động ở màn mở đầu.',
      },
      {
        title: 'Va chạm công bằng',
        text: 'Va chạm so hai hình chữ nhật, khung xe được thu nhỏ 6px mỗi cạnh để không bị "tông oan". Chỉ những làn gần nhân vật mới được kiểm tra.',
      },
      {
        title: 'Khó dần theo màn',
        text: 'Chụp đủ 3 ảnh là lên màn, mọi xe chạy nhanh hơn 15%. Có 3 mạng và kỷ lục được lưu lại trên trình duyệt.',
      },
    ],
    next: {
      title: 'Hạn chế và bước tiếp theo.',
      text: 'Ảnh "chụp được" hiện chỉ là điểm số, người chơi chưa thấy tấm ảnh nào. Bước tiếp theo hợp lý nhất là hiện ảnh phố Sài Gòn do chính mình chụp mỗi lần tới dãy nhà phố, giống album của Film Snake. Game phụ thuộc Phaser từ CDN (mất mạng thì có thông báo lỗi), chưa có test tự động và chưa có buổi playtest nào.',
    },
  },
};
