// Nội dung case study Film Snake. Số liệu (14px vuốt, 150→70ms, ảnh hiếm 6 giây...) lấy từ index.html trong repo.
export const filmSnake = {
  eyebrow: 'CASE STUDY / GAME DESIGN · GRAPHIC · FRONTEND',
  title: ['Film Snake —', 'mỗi cuộn phim, một khung hình.'],
  summary:
    'Game rắn săn mồi chủ đề nhiếp ảnh: bạn điều khiển một dải phim có đầu là máy ảnh, nhặt cuộn phim để dài ra và săn ảnh hiếm để mở khóa album. Sau Firefly Maze, mình thử đưa niềm yêu thích chụp ảnh vào một thể loại cổ điển khác.',
  play: { href: 'https://film-snake.vercel.app/' },
  sourceCode: { href: 'https://github.com/Quang292001/film-snake' },
  status:
    'Game làm một mình từ ý tưởng, hình vẽ đến code. Sáu ảnh trong album hiện là hình minh họa vẽ bằng canvas, chưa phải ảnh do mình chụp.',
  metadata: [
    { label: 'VAI TRÒ', value: 'Ý tưởng · Graphic · UI · Code' },
    { label: 'DỰ ÁN', value: 'Cá nhân' },
    { label: 'CÔNG NGHỆ', value: 'HTML · CSS · JS (Canvas 2D, Web Audio)' },
    { label: 'NỀN TẢNG', value: 'Máy tính · Điện thoại' },
  ],
  idea: {
    eyebrow: '01 / Ý TƯỞNG',
    heading: ['Rắn săn mồi,', 'nhưng là một cuộn phim.'],
    text: 'Rắn săn mồi là game ai cũng biết luật sau ba giây. Mình giữ nguyên luật đó và đổi toàn bộ "đồ vật" sang thế giới chụp ảnh phim: thân rắn là dải phim có lỗ răng cưa, đầu là máy ảnh, mồi là cuộn phim. Chơi càng lâu, cuộn phim càng dài, như đang chụp hết một cuộn 36 kiểu.',
    goalsTitle: 'Ba nguyên tắc từ đầu',
    goals: [
      { n: '01', title: 'Mọi thứ đều là đồ nghề chụp ảnh', text: 'Cuộn phim, tia flash, ống kính, ảnh in. Không có vật phẩm nào lạc khỏi chủ đề.' },
      { n: '02', title: 'Có lý do để chơi lại', text: 'Kỷ lục và album 6 ảnh được lưu lại, mỗi ván có thể mở thêm một ảnh.' },
      { n: '03', title: 'Bấm là rẽ', text: 'Game rắn chết vì điều khiển trễ. Rẽ phải xảy ra ngay khung hình kế tiếp.' },
    ],
  },
  visual: {
    eyebrow: '02 / HỆ THỐNG THỊ GIÁC',
    heading: 'Bảng màu "Phòng tối".',
    description:
      'Lấy cảm hứng từ ánh đèn đỏ trong phòng tráng phim: nền gần như đen pha đỏ, chữ màu giấy ảnh, điểm nhấn là màu hổ phách của phim âm bản.',
    palette: [
      { role: 'Nền', hex: '#140A0A' },
      { role: 'Bảng', hex: '#1F1111' },
      { role: 'Đèn phòng tối', hex: '#D7262E' },
      { role: 'Hổ phách', hex: '#E8A33A' },
      { role: 'Vàng ống kính', hex: '#FFD25A' },
      { role: 'Giấy ảnh', hex: '#F6E9DF' },
    ],
    items: [
      { name: 'Cuộn phim', effect: '+10 điểm, dài thêm một ô' },
      { name: 'Tia flash', effect: 'Chậm lại trong 5 giây' },
      { name: 'Ống kính vàng', effect: 'Nhân đôi điểm trong 8 giây' },
      { name: 'Ảnh hiếm', effect: '+50 điểm, mở khóa 1 ảnh, biến mất sau 6 giây' },
    ],
    typeNote: 'Bungee cho logo, tiêu đề và con số: khối chữ dày như chữ in trên vỏ hộp phim. Rubik cho phần chữ đọc, vì gọn và đủ dấu tiếng Việt.',
  },
  screens: {
    eyebrow: '03 / MÀN HÌNH',
    heading: 'Bốn trạng thái, hai kích thước.',
    description: 'Bàn chơi tự đổi hình theo màn hình: ngang trên máy tính, dọc trên điện thoại.',
    items: [
      { key: '1-guide', label: 'Hướng dẫn' },
      { key: '2-play', label: 'Đang chơi' },
      { key: '3-over', label: 'Hết phim' },
      { key: '4-album', label: 'Album ảnh' },
    ],
  },
  decisions: {
    eyebrow: '04 / QUYẾT ĐỊNH THIẾT KẾ',
    heading: 'Một game nhỏ, nhưng điều khiển phải đúng.',
    items: [
      {
        eyebrow: '01 / ĐIỀU KHIỂN',
        title: 'Rẽ ngay, không đợi hết nhịp',
        text: 'Lệnh rẽ được xếp hàng tối đa 2 lượt, chặn quay đầu 180°. Lượt rẽ đầu tiên kích hoạt bước đi ngay ở khung hình kế tiếp thay vì đợi hết nhịp, nên bấm là thấy rẽ.',
      },
      {
        eyebrow: '02 / CẢM ỨNG',
        title: 'Vuốt 14px là rẽ, không cần nhấc tay',
        text: 'Cả vùng chơi nhận vuốt, không chỉ canvas. Sau mỗi lần rẽ, điểm gốc được đặt lại, nên có thể vuốt liền một đường chữ L. Nút mũi tên trên điện thoại được bỏ để bàn chơi lớn hơn.',
      },
      {
        eyebrow: '03 / BỐ CỤC',
        title: 'Bàn chơi đổi hình theo màn hình',
        text: 'Màn ngang dùng lưới 15 hàng, số cột co giãn từ 15 đến 28. Màn dọc thì ngược lại. Không có dải đen thừa, và điện thoại không phải chơi trên một bàn ngang bé xíu.',
      },
      {
        eyebrow: '04 / PHẦN THƯỞNG',
        title: 'Ảnh hiếm chỉ sống 6 giây',
        text: 'Ảnh hiếm buộc người chơi đổi hướng mạo hiểm để kịp nhặt. Ảnh chỉ xuất hiện khi album chưa đủ, và màn "Hết phim!" kể tên những ảnh vừa mở khóa trong ván đó.',
      },
    ],
  },
  implementation: {
    eyebrow: '05 / TỪ THIẾT KẾ ĐẾN CODE',
    heading: 'Một file HTML, nhịp cố định.',
    description:
      'Toàn bộ game nằm trong một file index.html, không thư viện, không build. Logic chạy theo nhịp cố định, còn hình vẽ được nội suy giữa hai nhịp nên rắn trượt mượt thay vì nhảy từng ô.',
    path: 'film-snake /',
    tree: ['index.html', '  ├─ CSS       bảng màu, HUD, popup', '  ├─ Canvas    rắn, vật phẩm, 6 ảnh album', '  ├─ Sound     nhạc + hiệu ứng (Web Audio)', '  └─ Loop      nhịp cố định + nội suy'],
    stack: ['JavaScript', 'Canvas 2D', 'Web Audio', 'localStorage', 'Vercel'],
    snippet: [
      '// Logic đi theo nhịp cố định, hình vẽ theo khung hình',
      'function frame(t) {',
      '  const dt = Math.min(100, t - last); last = t;',
      '  acc += dt;',
      '  while (acc >= interval()) { acc -= interval(); step(); }',
      '  draw(); // nội suy: prev + (now - prev) * acc / interval()',
      '  requestAnimationFrame(frame);',
      '}',
    ],
    priorities: [
      {
        title: 'Tốc độ tăng dần',
        text: 'Mỗi 50 điểm, nhịp ngắn lại 8ms, từ 150ms xuống tối thiểu 70ms. Tia flash kéo dài nhịp ×1,6 trong 5 giây để người chơi thở.',
      },
      {
        title: 'Vẽ theo đơn vị ô',
        text: 'Mọi hình vẽ dùng đơn vị 24 "điểm" một ô rồi phóng to bằng setTransform, nhân với devicePixelRatio, nên sắc nét trên mọi màn hình mà code vẽ không phải đổi.',
      },
      {
        title: 'Âm thanh không cần file',
        text: 'Tiếng chụp ảnh, flash, ăn mồi và một vòng nhạc nền đều tạo bằng oscillator và nhiễu trắng. Âm thanh chỉ khởi động sau lần bấm đầu tiên, đúng luật trình duyệt.',
      },
    ],
    next: {
      title: 'Hạn chế và bước tiếp theo.',
      text: 'Ảnh album đang là hình vẽ tạm: bước quan trọng nhất là thay bằng 6 ảnh do chính mình chụp, để game thật sự là một cuốn album của mình. Game chưa có test tự động và chưa có buổi playtest nào; README vẫn nhắc nút mũi tên trên điện thoại đã bỏ. Sau đó: thêm chướng ngại vật theo màn và tùy chọn tắt hiệu ứng flash.',
    },
  },
};
