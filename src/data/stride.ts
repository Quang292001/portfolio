// Nội dung case study SHOES, lấy từ repo shoes-ecommerce.
export const stride = {
  eyebrow: 'CASE STUDY / THƯƠNG MẠI ĐIỆN TỬ · FULL-STACK',
  title: ['SHOES — Chọn giày,', 'chọn cách bạn bước.'],
  summary:
    'Website bán giày làm trọn vòng: khách xem sản phẩm, chọn size, thêm vào giỏ, đặt hàng và theo dõi đơn; quản trị viên quản lý sản phẩm và danh mục. Mình thiết kế giao diện và viết frontend React nối với API .NET.',
  liveDemo: { label: 'Live demo', href: 'https://shoes-ecommerce-6xyg.vercel.app/' },
  sourceCode: { label: 'Source code', href: 'https://github.com/Quang292001/shoes-ecommerce' },
  disclosure: '',
  metadata: [
    { label: 'VAI TRÒ', value: 'UI/UX Design · Frontend' },
    { label: 'PHẠM VI', value: 'Cửa hàng + trang quản trị' },
    { label: 'CÔNG NGHỆ', value: 'React 19 · React Router · Axios · .NET API' },
    { label: 'THỜI GIAN', value: '1 tháng' },
  ],
  challenge: {
    eyebrow: '01 / XÁC ĐỊNH VẤN ĐỀ',
    heading: ['Mua giày online,', 'đừng để phải đoán.'],
    text: 'Mua giày online có hai nỗi lo lớn: không chắc size có vừa và không rõ đơn hàng đang ở đâu. Một cửa hàng demo thường dừng ở trang sản phẩm đẹp; mình muốn làm đủ cả phần sau khi bấm "mua": giỏ hàng, địa chỉ giao, đơn hàng và trang quản trị.',
    goalsTitle: 'Ba mục tiêu thiết kế',
    goals: [
      { n: '01', title: 'Tìm nhanh', text: 'Lọc theo thương hiệu, thẻ sản phẩm chỉ giữ ảnh, tên, giá.' },
      { n: '02', title: 'Chọn tự tin', text: 'Chọn size ngay trên trang chi tiết, trạng thái đang chọn luôn rõ.' },
      { n: '03', title: 'Mua liền mạch', text: 'Từ giỏ hàng đến đặt hàng và xem lại đơn không bị đứt mạch.' },
    ],
  },
  research: {
    eyebrow: '02 / CÂU HỎI ĐỊNH HƯỚNG',
    heading: 'Bắt đầu bằng những câu hỏi.',
    description:
      'Mình chưa phỏng vấn người mua thật. Đây là ba câu hỏi mình tự đặt ra trước khi vẽ, và cách giao diện trả lời từng câu.',
    questions: [
      { tag: 'Khám phá', q: 'Người mua bắt đầu từ thương hiệu hay từ kiểu dáng?', note: 'Trả lời bằng: dải logo thương hiệu ở trang chủ và bộ lọc thương hiệu trong danh sách.' },
      { tag: 'Ra quyết định', q: 'Thông tin nào giúp người mua chọn đúng size?', note: 'Trả lời bằng: chọn size ngay cạnh nút thêm vào giỏ, size đang chọn được tô đậm.' },
      { tag: 'Sau khi mua', q: 'Người mua cần gì sau khi bấm đặt hàng?', note: 'Trả lời bằng: sổ địa chỉ có chọn tỉnh/thành và bản đồ, trang lịch sử đơn và chi tiết từng đơn.' },
    ],
  },
  wireframes: {
    eyebrow: '03 / CẤU TRÚC & LUỒNG',
    heading: 'Đơn giản hóa trước khi làm đẹp.',
    description: 'Luồng chính: Khám phá → Lọc sản phẩm → Chi tiết & chọn size → Giỏ hàng.',
    footnote: 'Ưu tiên: nội dung quan trọng trước, một hành động chính trên mỗi bước và khả năng quay lại mà không mất lựa chọn.',
  },
  solution: {
    eyebrow: '04 / GIAO DIỆN',
    heading: 'Rõ ràng trong từng lựa chọn.',
    description:
      'Bề mặt sáng, hình ảnh sản phẩm lớn và khoảng trống vừa đủ. Màu hồng và gradient đậm tạo sự tương phản và thu hút khách hàng.',
    decisions: [
      { eyebrow: '01 / TÌM KIẾM', title: 'Bộ lọc gọn, trạng thái dễ nhận biết', text: 'Giữ lựa chọn đang dùng và cho phép xóa lọc ngay trong danh sách.' },
      { eyebrow: '02 / THÔNG TIN', title: 'Size và chính sách ở đúng thời điểm', text: 'Đặt hướng dẫn size cạnh lựa chọn kích cỡ, không giấu ở cuối trang.' },
      { eyebrow: '03 / ƯU TIÊN DI ĐỘNG', title: 'Hành động trong tầm tay', text: 'Nhóm giá và CTA rõ ràng; bố cục một cột để đọc và thao tác dễ hơn.' },
    ],
  },
  implementation: {
    eyebrow: '05 / TỪ FIGMA ĐẾN CODE',
    heading: 'Không dừng lại ở bản thiết kế.',
    description: 'Code chia theo tính năng (features/) thay vì theo loại file, nên phần mua hàng, tài khoản và quản trị phát triển độc lập. Mọi lời gọi API đi qua một Axios client dùng chung, tự gắn token đăng nhập.',
    path: 'src /',
    tree: ['app/        routes · ProtectedRoute', 'features/', '  ├─ products  danh sách · chi tiết', '  ├─ cart      giỏ hàng · đơn hàng', '  ├─ auth      đăng nhập · hồ sơ', '  └─ admin     sản phẩm · danh mục', 'shared/     httpClient · theme · i18n'],
    stack: ['React 19', 'React Router 7', 'Axios', 'Leaflet', '.NET API', 'MySQL'],
    priorities: [
      { title: 'Phân quyền bằng route', text: 'ProtectedRoute chặn trang hồ sơ, đơn hàng và khu quản trị khi chưa đăng nhập; token lưu riêng một chỗ và được gắn tự động vào mỗi request.' },
      { title: 'Địa chỉ kiểu Việt Nam', text: 'Sổ địa chỉ chọn tỉnh/thành theo dữ liệu hành chính Việt Nam, kèm bản đồ Leaflet để ghim vị trí giao hàng.' },
      { title: 'Những thứ nhỏ nhưng đủ', text: 'Chuyển ngôn ngữ, chế độ sáng/tối, danh sách yêu thích và thông báo toast dùng chung cho mọi thao tác.' },
    ],
    next: {
      title: 'Tiếp theo: kiểm chứng, không phỏng đoán.',
      text: 'Chưa có số liệu đo lường và chưa có test tự động. Bước tiếp theo: usability test với 5 người cho luồng chọn size → giỏ hàng → đặt hàng, ghi lại chỗ họ do dự, và viết test cho giỏ hàng và phân quyền.',
    },
  },
  
};
