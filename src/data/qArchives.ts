// Nội dung case study Q.Archives. Số liệu (giá gói, cọc 30%, các bước) lấy từ repo website-studio.
export const qArchives = {
  eyebrow: 'CASE STUDY / WEBSITE ĐẶT LỊCH · UI/UX · FRONTEND',
  title: ['Q.Archives —', 'đặt một buổi chụp trong một trang.'],
  summary:
    'Website cho một studio chụp ảnh concept ở Sài Gòn (thương hiệu giả định). Người xem lướt bộ sưu tập theo concept, chọn gói, chọn ngày giờ còn trống và giữ lịch bằng tiền cọc, tất cả không cần nhắn tin qua lại.',
  liveDemo: { href: 'https://website-studio-ten.vercel.app/' },
  figma: {
    href: 'https://www.figma.com/design/HHHdjlqYYz6j6koO1pyH7G/LUMI-STUDIO-%E2%80%93-Photography-Booking-Website?node-id=16-2&t=UoFnpOsyyVfbWwTG-1',
  },
  status:
    'Studio và số điện thoại là giả định. Ảnh trong bộ sưu tập là ảnh demo từ Unsplash (đã ghi nguồn trong repo), không phải ảnh mình chụp. Lịch trống và đơn đặt lịch là dữ liệu mẫu, chưa có backend.',
  metadata: [
    { label: 'VAI TRÒ', value: 'UI/UX Design · Frontend' },
    { label: 'DỰ ÁN', value: 'Cá nhân · thương hiệu giả định' },
    { label: 'CÔNG NGHỆ', value: 'React · React Router · Vite' },
    { label: 'TRANG', value: 'Trang chủ · Bộ sưu tập · Đặt lịch · Xác nhận' },
  ],
  challenge: {
    eyebrow: '01 / VẤN ĐỀ',
    heading: ['Muốn chụp một bộ ảnh,', 'phải nhắn mười tin.'],
    text: 'Phần lớn studio nhỏ nhận lịch qua Facebook hay Zalo: hỏi giá, hỏi concept, hỏi còn giờ không, rồi chuyển cọc. Mỗi câu hỏi là một lần chờ. Một năm cầm máy ảnh giúp mình hiểu phía studio; dự án này thử trả lời câu hỏi từ phía khách: nếu mọi câu trả lời đều nằm sẵn trên một trang thì sao?',
    goalsTitle: 'Ba mục tiêu thiết kế',
    goals: [
      { n: '01', title: 'Thấy trước khi hỏi', text: 'Concept, giá gói, thời lượng và số ảnh hiện ngay, không cần nhắn hỏi.' },
      { n: '02', title: 'Một trang, ba bước', text: 'Chọn câu chuyện → chọn ngày giờ → để lại liên hệ, không chuyển trang giữa chừng.' },
      { n: '03', title: 'Luôn biết mình đã chọn gì', text: 'Tóm tắt buổi chụp và số tiền cọc cập nhật theo từng lựa chọn.' },
    ],
  },
  flow: {
    eyebrow: '02 / LUỒNG ĐẶT LỊCH',
    heading: 'Ba câu hỏi, đặt theo thứ tự người ta nghĩ.',
    description:
      'Mỗi bước là một câu hỏi viết như lời studio nói với khách, thay cho nhãn form khô khan. Cột bên phải luôn đi theo để tóm tắt.',
    steps: [
      { n: '1', title: 'Bạn muốn kể câu chuyện nào?', text: 'Chọn 1 trong 5 concept và 1 trong 3 gói: Chạm, Kể, Lưu (45–120 phút, 8–25 ảnh). Gói Kể được chọn sẵn vì phù hợp với đa số.' },
      { n: '2', title: 'Chọn ngày & giờ của bạn', text: 'Lịch tháng chỉ cho bấm ngày còn trống, ngày kín lịch bị gạch. Chọn giờ xong, giờ kết thúc được tính theo thời lượng gói.' },
      { n: '3', title: 'Mình có thể liên hệ bạn qua đâu?', text: 'Tên, số điện thoại, email và ghi chú. Lỗi hiện ngay dưới ô sai, bấm gửi khi còn thiếu thì trang cuộn tới chỗ cần sửa.' },
    ],
  },
  decisions: {
    eyebrow: '03 / QUYẾT ĐỊNH THIẾT KẾ',
    heading: 'Bớt một tin nhắn là bớt một lần do dự.',
    items: [
      {
        eyebrow: '01 / TIỀN',
        title: 'Nói rõ số tiền trước khi bấm',
        text: 'Tóm tắt tách tổng giá thành hai dòng: đặt cọc giữ lịch (30%) và phần thanh toán tại studio. Người đặt biết chính xác phải chuyển bao nhiêu ngay bây giờ.',
      },
      {
        eyebrow: '02 / LỊCH',
        title: 'Không cho chọn thứ không có',
        text: 'Ngày hết lịch bị gạch và vô hiệu hóa, giờ đã có người đặt không bấm được. Người dùng không bao giờ đi hết form rồi mới biết giờ đó đã kín.',
      },
      {
        eyebrow: '03 / LỐI TẮT',
        title: 'Đi từ bộ ảnh thẳng vào đặt lịch',
        text: 'Concept và gói được đọc từ đường dẫn (?concept=…&goi=…), nên bấm "Đặt lịch" từ một bộ ảnh sẽ mở form với lựa chọn điền sẵn.',
      },
      {
        eyebrow: '04 / GIỌNG NÓI',
        title: 'Viết như một người, không như một form',
        text: '"Hẹn bạn một buổi chụp", "Đến và là chính bạn". Giọng xưng mình–bạn giữ cảm giác một studio nhỏ, gần gũi, khớp với tông màu be và xanh rêu.',
      },
    ],
  },
  collection: {
    eyebrow: '04 / BỘ SƯU TẬP',
    heading: 'Mỗi concept, một phiên bản của bạn.',
    description:
      '10 bộ ảnh lọc theo 5 concept, theo gói và sắp xếp theo thời gian. Mỗi bộ ảnh mở trong hộp thoại, kèm gói đã dùng và nút đặt lịch điền sẵn concept, gói. Bộ lọc nằm trên đường dẫn nên gửi link cho bạn bè vẫn giữ đúng bộ lọc.',
  },
  implementation: {
    eyebrow: '05 / TỪ THIẾT KẾ ĐẾN CODE',
    heading: 'Nội dung nằm ở dữ liệu, không nằm trong giao diện.',
    description:
      'Gói, concept, bộ ảnh, lịch trống và phụ phí đều khai báo trong một file dữ liệu. Đổi giá hay thêm concept không phải sửa component nào.',
    path: 'src /',
    tree: ['data/studio.js     gói · concept · lịch trống', 'photos/<concept>/  ảnh + info.json mỗi bộ', 'pages/', '  ├─ Home · Collection', '  └─ Booking · Confirmation', 'components/', '  └─ PlanCard · AlbumDialog · Progress'],
    stack: ['React', 'React Router', 'Vite', 'Vercel'],
    priorities: [
      {
        title: 'Form có trạng thái rõ ràng',
        text: 'Mỗi ô chỉ báo lỗi sau khi người dùng đã chạm vào (touched), nút gửi dùng aria-disabled thay vì disabled để vẫn bấm được và chỉ ra chỗ còn thiếu.',
      },
      {
        title: 'Ảnh tự đọc từ thư mục',
        text: 'Mỗi bộ ảnh là một thư mục có info.json. Thêm bộ mới chỉ cần thả ảnh vào đúng chỗ, trang bộ sưu tập tự cập nhật.',
      },
      {
        title: 'Mã đặt lịch và trang xác nhận',
        text: 'Sau khi gửi, đơn được tạo kèm mã đặt lịch, lưu tạm vào sessionStorage rồi chuyển sang trang xác nhận, nên tải lại trang vẫn còn thông tin.',
      },
    ],
    next: {
      title: 'Hạn chế và bước tiếp theo.',
      text: 'Lịch trống là dữ liệu tĩnh, đơn đặt lịch chỉ nằm trong phiên trình duyệt và chưa có thanh toán cọc thật. Mình cũng chưa thử luồng này với khách thật. Bước tiếp theo: nối backend cho lịch và đơn, gửi email xác nhận, rồi cho 5 người đặt thử một buổi chụp để xem họ dừng lại ở đâu.',
    },
  },
};
