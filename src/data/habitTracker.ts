// Nội dung case study Habit Tracker.
// TODO: điền link demo thật sau khi deploy; kiểm tra lại link GitHub cho đúng repo của bạn.
export const habitTracker = {
  eyebrow: 'CASE STUDY / PRODUCT DESIGN + FRONTEND',
  title: ['Habit Tracker —', 'đều đặn, không áp lực.'],
  summary:
    'Ứng dụng theo dõi thói quen học tập (TOEIC, lập trình, thiết kế). Mình tự thiết kế trải nghiệm và xây dựng giao diện, tập trung vào một câu hỏi: làm sao để người dùng quay lại sau khi lỡ một ngày.',
  liveDemo: { href: 'https://habit-tracker-two-delta.vercel.app/' },
  sourceCode: { href: 'https://github.com/Quang292001/habit-tracker' },
  status:
    'Phiên bản hiện tại chạy hoàn toàn trên trình duyệt (localStorage): chưa có backend, tài khoản hay đồng bộ nhiều thiết bị.',
  metadata: [
    { label: 'VAI TRÒ', value: 'UI/UX Design · Frontend' },
    { label: 'DỰ ÁN', value: 'Cá nhân' },
    { label: 'CÔNG NGHỆ', value: 'React · TypeScript · Vite' },
    { label: 'DỮ LIỆU', value: 'localStorage' },
  ],
  challenge: {
    eyebrow: '01 / VẤN ĐỀ',
    heading: ['Lỡ một ngày,', 'đừng bỏ cả thói quen.'],
    text: 'Học TOEIC, luyện code hay luyện thiết kế đều cần đều đặn trong nhiều tuần. Khi một ứng dụng chỉ thưởng cho chuỗi ngày liên tiếp, lỡ một ngày là chuỗi về 0 và người dùng dễ nản. Mình muốn thử hướng khác: giữ động lực khi lỡ nhịp. Đây là giả định thiết kế của mình, chưa được kiểm chứng bằng user test.',
    goalsTitle: 'Ba mục tiêu thiết kế',
    goals: [
      { n: '01', title: 'Tạo nhanh', text: 'Thêm một thói quen trong vài giây, mặc định hợp lý.' },
      { n: '02', title: 'Thấy ngay', text: 'Tiến độ hiện ở ba tầng: ngày, tuần và chuỗi liên tiếp.' },
      { n: '03', title: 'Lỡ không sao', text: 'Có đường quay lại rõ ràng thay vì bị phạt.' },
    ],
  },
  decisions: {
    eyebrow: '02 / QUYẾT ĐỊNH THIẾT KẾ',
    heading: 'Ba quyết định giúp người dùng quay lại.',
    description: 'Mỗi quyết định trả lời một tình huống cụ thể trong cách dùng hằng ngày.',
    items: [
      {
        eyebrow: '01 / XỬ LÝ BỎ LỠ',
        title: 'Hai lối quay lại thay vì một lời nhắc',
        text: 'Sáng hôm sau, một banner liệt kê thói quen chưa làm với hai nút: Làm bù hôm qua, hoặc Bỏ qua, giữ chuỗi. Ngày bỏ qua không cộng điểm nhưng không làm đứt chuỗi. Nếu mục tiêu tuần đã đạt, app không nhắc nữa vì nghỉ lúc đó là hợp lý.',
      },
      {
        eyebrow: '02 / TIẾN ĐỘ',
        title: 'Ba tầng, nhìn là hiểu',
        text: 'Vòng cam trên lịch cho từng ngày, dải 7 chấm dưới mỗi thói quen cho nhịp của tuần, thanh mục tiêu tuần ở cột phải. Mỗi tầng trả lời một câu hỏi khác nhau.',
      },
      {
        eyebrow: '03 / AN TOÀN KHI THAO TÁC',
        title: 'Hoàn tác thay vì hộp xác nhận',
        text: 'Xóa thói quen hiện thông báo Hoàn tác trong 6 giây, thay cho hộp xác nhận chặn giao diện. Thói quen được trả về đúng vị trí cũ.',
      },
    ],
  },
  implementation: {
    eyebrow: '03 / TỪ THIẾT KẾ ĐẾN CODE',
    heading: 'Logic tách khỏi giao diện.',
    description:
      'Phần tính toán (chuỗi ngày, bỏ lỡ, kiểm tra form) nằm trong các hàm thuần, không phụ thuộc React, nên dễ kiểm tra riêng và dễ thay lớp lưu trữ khi thêm backend.',
    path: 'src /',
    tree: ['lib/', '  ├─ date.ts', '  └─ habits.ts', 'hooks/useLocalStorage.ts', 'components/', '  ├─ Calendar · TodayList', '  └─ MissedBanner · Analytics'],
    stack: ['React', 'TypeScript', 'Vite', 'localStorage'],
    priorities: [
      {
        title: 'Mô hình dữ liệu',
        text: 'Mỗi thói quen giữ danh sách ngày đã làm và ngày bỏ qua dạng YYYY-MM-DD. Chuỗi này so sánh trực tiếp được và tránh lỗi múi giờ của đối tượng Date.',
      },
      {
        title: 'Thuật toán chuỗi ngày',
        text: 'Duyệt ngược từ hôm nay: ngày đã làm thì cộng, ngày bỏ qua thì đi tiếp, ngày trống thì dừng. Riêng hôm nay chưa làm thì chưa tính là đứt.',
      },
      {
        title: 'Form và khả năng truy cập',
        text: 'Kiểm tra tên, giờ và mục tiêu với thông báo lỗi tiếng Việt; checkbox có role và aria; hộp thoại đóng bằng Esc; vùng bấm 44px trên màn hình cảm ứng.',
      },
    ],
    next: {
      title: 'Hạn chế và bước tiếp theo.',
      text: 'Dữ liệu chỉ nằm trên một trình duyệt và chưa có test tự động. Mình cũng chưa chạy user test, nên các quyết định UX ở trên là giả định có lý do, chưa được kiểm chứng. Kế hoạch tiếp theo: viết unit test cho phần logic, rồi thêm backend (API, đăng nhập, cơ sở dữ liệu) để đồng bộ nhiều thiết bị.',
    },
  },
};
