// Nội dung case study Firefly Maze.
// Số liệu (TURN_WINDOW 0.45, tốc độ +8%/màn, dpr tối đa 2...) lấy trực tiếp từ game.js trong repo.
export const fireflyMaze = {
  eyebrow: 'CASE STUDY / GAME DESIGN · GRAPHIC · FRONTEND',
  title: ['Firefly Maze —', 'thắp sáng khu rừng đêm.'],
  summary:
    'Một con đom đóm lạc giữa rừng đêm, nhặt hết đốm sáng và né những bóng ma bóng tối. Mình lấy một thể loại ai cũng biết (game mê cung) và thử trả lời: phải đổi những gì để nó có thế giới, nhân vật và cảm giác của riêng mình?',
  play: { href: 'https://firefly-maze.vercel.app/' },
  sourceCode: { href: 'https://github.com/Quang292001/firefly-maze' },
  figma: { href: 'https://www.figma.com/design/xmbIACuPCjCvDYtKwmGLCA/Firefly-Maze?node-id=0-1&t=JxCPRF4ggwhISEfG-0' },
  status:
    'Phần gameplay dựa trên một tutorial game mê cung bằng JavaScript (2023), sau đó viết lại: bản đồ mới, canvas co giãn, điều khiển vuốt/kéo, hỗ trợ rẽ sớm/trễ, vật phẩm sức mạnh và hệ thống màn chơi. Ý tưởng, nhân vật, graphic và UI là thiết kế riêng. Không liên quan đến Pac-Man™ của Bandai Namco.',
  metadata: [
    { label: 'VAI TRÒ', value: 'Ý tưởng · Graphic · UI · Code' },
    { label: 'DỰ ÁN', value: 'Cá nhân' },
    { label: 'CÔNG NGHỆ', value: 'HTML · CSS · JS (Canvas 2D, Web Audio)' },
    { label: 'NỀN TẢNG', value: 'Máy tính · Điện thoại' },
  ],
  idea: {
    eyebrow: '01 / Ý TƯỞNG',
    heading: ['Luật chơi quen.', 'Thế giới thì mới.'],
    text: 'Game mê cung là thể loại ai cũng chơi được ngay, nên rủi ro lớn nhất không phải luật chơi mà là trông giống một bản sao. Mình chọn giữ nguyên vòng lặp quen thuộc (nhặt, né, phản công) và đổ toàn bộ công sức vào câu chuyện, hình ảnh và cảm giác điều khiển.',
    goalsTitle: 'Ba nguyên tắc từ đầu',
    goals: [
      { n: '01', title: 'Một câu chuyện trong một câu', text: 'Đom đóm thắp sáng khu rừng. Mọi thứ trên màn hình (đốm sáng, bóng ma, ngôi sao) đều phải khớp với câu đó.' },
      { n: '02', title: 'Ánh sáng là thông tin', text: 'Thứ gì phát sáng thì quan trọng. Nền tối, tường mờ, nhân vật và vật phẩm rực lên.' },
      { n: '03', title: 'Chơi được ở mọi nơi', text: 'Bàn phím, chuột và vuốt cảm ứng đều là cách chơi chính, không phải bản phụ.' },
    ],
  },
  visual: {
    eyebrow: '02 / HỆ THỐNG THỊ GIÁC',
    heading: 'Bảng màu "Lam đêm" và một cặp font.',
    description:
      'Chốt trong Figma trước khi viết dòng code nào: 6 vai trò màu thành color variables, một cặp font có đủ dấu tiếng Việt, logo bản chính và icon vuông.',
    palette: [
      { role: 'Nền', hex: '#06141B' },
      { role: 'Tường mê cung', hex: '#11425A' },
      { role: 'Đom đóm', hex: '#E8FF59' },
      { role: 'Điểm nhấn', hex: '#59C3FF' },
      { role: 'Chữ', hex: '#E6F1F5' },
      { role: 'Kẻ địch', hex: '#FF7A45' },
    ],
    ghosts: ['#FF7A45', '#FF5C8A', '#B98CFF', '#59C3FF'],
    ghostNote: 'Bốn bóng ma cùng độ sáng, khác sắc: nhìn lướt vẫn phân biệt được, nhưng không con nào nổi hơn đom đóm.',
    typeNote:
      'Lilita One cho logo, chữ tiếng Anh và con số trên HUD. Nunito cho toàn bộ chữ tiếng Việt, vì Lilita One không có dấu tiếng Việt.',
    logoNote: 'Logo: đom đóm bay theo một đường mê cung và để lại các đốm sáng, đúng cơ chế chơi.',
  },
  screens: {
    eyebrow: '03 / MÀN HÌNH',
    heading: 'Sáu trạng thái, hai kích thước.',
    description: 'Mỗi trạng thái của game có một màn riêng, thiết kế cho cả máy tính lẫn điện thoại.',
    items: [
      { key: '1-start', label: 'Bắt đầu' },
      { key: '2-howto', label: 'Cách điều khiển' },
      { key: '3-hud', label: 'Đang chơi' },
      { key: '4-pause', label: 'Tạm dừng' },
      { key: '5-over', label: 'Game over' },
      { key: '6-win', label: 'Qua màn' },
    ],
  },
  decisions: {
    eyebrow: '04 / QUYẾT ĐỊNH THIẾT KẾ',
    heading: 'Những chi tiết người chơi không thấy, nhưng cảm được.',
    items: [
      {
        eyebrow: '01 / ĐIỀU KHIỂN',
        title: 'Rẽ sớm hay trễ một chút vẫn được',
        text: 'Trong game mê cung, bấm hướng trễ nửa nhịp là đâm vào tường và rất ức chế, nhất là khi vuốt trên điện thoại. Nếu người chơi bấm hướng trong khoảng 0,45 ô quanh một lối rẽ, đom đóm tự căn vào giữa ô và rẽ luôn.',
      },
      {
        eyebrow: '02 / HƯỚNG DẪN',
        title: 'Màn hướng dẫn tự đổi theo thiết bị',
        text: 'Máy tính thấy phím mũi tên và W A S D. Điện thoại thấy một cử chỉ vuốt có đốm sáng chạy theo. Game nhận biết màn hình cảm ứng bằng media query pointer: coarse, nên không phải giải thích hai cách cho cùng một người.',
      },
      {
        eyebrow: '03 / NGỮ ĐIỆU',
        title: 'Thua cũng có câu chuyện',
        text: 'Thay vì chỉ "Game Over", màn thua mở bằng "Ánh sáng đã tắt", màn thắng là "Khu rừng đã sáng lên". Kỷ lục được lưu lại để mỗi lần chơi có một mục tiêu nhỏ.',
      },
      {
        eyebrow: '04 / TÔN TRỌNG NGƯỜI CHƠI',
        title: 'Rời tab là tự tạm dừng',
        text: 'Chuyển tab hoặc khóa màn hình thì game tự dừng, quay lại có 0,8 giây đếm ngược trước khi chơi tiếp. Không ai mất mạng vì một tin nhắn.',
      },
    ],
  },
  implementation: {
    eyebrow: '05 / TỪ THIẾT KẾ ĐẾN CODE',
    heading: 'Không thư viện, không build.',
    description:
      'Toàn bộ game là HTML, CSS và JavaScript thuần. Nhân vật, bóng ma, đốm sáng và mê cung đều vẽ vector bằng Canvas 2D, nên sắc nét ở mọi kích thước. Âm thanh tạo bằng Web Audio, không cần file.',
    path: 'firefly-maze /',
    tree: ['index.html        các màn UI (HTML)', 'style.css         HUD, menu, hiệu ứng glow', 'howto.css         hướng dẫn theo thiết bị', 'game.js           vòng lặp, AI, vẽ canvas', 'fonts/            Lilita One · Nunito', 'design/           ảnh 12 màn hình'],
    stack: ['JavaScript', 'Canvas 2D', 'Web Audio', 'localStorage', 'Vercel'],
    snippet: [
      '// Rẽ sớm/trễ: bấm hướng trong khoảng 0,45 ô',
      '// quanh lối rẽ → căn vào giữa ô và rẽ luôn',
      'const TURN_WINDOW = 0.45;',
      'function tryCornerTurn(e) {',
      '  const cx = Math.round(e.x), cy = Math.round(e.y);',
      '  const off = Math.abs(e.x - cx) + Math.abs(e.y - cy);',
      '  if (off > TURN_WINDOW) return;',
      '  if (!walkable(cx + e.next.dx, cy + e.next.dy)) return;',
      '  e.x = cx; e.y = cy; e.dir = e.next;',
      '}',
    ],
    priorities: [
      {
        title: 'Canvas co giãn theo màn hình',
        text: 'Kích thước ô được tính lại theo khung chơi mỗi khi đổi kích thước cửa sổ, nhân với devicePixelRatio (tối đa 2) để nét trên màn hình Retina mà không quá nặng.',
      },
      {
        title: 'Vẽ tường một lần',
        text: 'Mê cung có hiệu ứng phát sáng tốn tài nguyên, nên tường được vẽ sẵn vào một canvas phụ và chỉ dán lại mỗi khung hình. Chỉ nhân vật và vật phẩm được vẽ lại liên tục.',
      },
      {
        title: 'Bốn bóng ma, bốn tính cách',
        text: 'Mỗi bóng ma nhắm một mục tiêu khác nhau: đuổi thẳng, chặn đầu, kẹp hai phía, hoặc lảng vảng khi đến gần. Mỗi màn mới, cả đom đóm lẫn bóng ma nhanh hơn 8%.',
      },
    ],
    next: {
      title: 'Hạn chế và bước tiếp theo.',
      text: 'Game mới có một bản đồ, chưa có test tự động và chưa có buổi playtest nào với người chơi thật. Moodboard trong Figma vẫn thiếu nguồn ảnh. Bước tiếp theo: thêm 2–3 bản đồ có độ khó tăng dần, tùy chọn giảm hiệu ứng nhấp nháy cho người nhạy cảm với ánh sáng, và một buổi playtest nhỏ để chỉnh tốc độ bóng ma.',
    },
  },
};
