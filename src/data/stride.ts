// TODO: thay nội dung mẫu bằng dự án thật (link demo, source code, thời gian...).
export const stride = {
  eyebrow: 'CASE STUDY / E-COMMERCE CONCEPT',
  title: ['SHOES — Chọn giày,', 'chọn cách bạn bước.'],
  summary:
    'Thiết kế trải nghiệm mua giày trực tuyến, tập trung vào khám phá sản phẩm, chọn kích cỡ và hoàn tất giỏ hàng.',
  liveDemo: { label: 'Live demo', href: 'https://shoes-ecommerce-6xyg.vercel.app/' },
  sourceCode: { label: '[Source code]', href: 'https://github.com/Quang292001/shoes-ecommerce' },
  disclosure:
    'Dự án mẫu — thay bằng sản phẩm của bạn. Nội dung, nghiên cứu và giao diện dưới đây minh họa cấu trúc case study, không phải bằng chứng từ dự án thực tế.',
  metadata: [
    { label: 'VAI TRÒ MẪU', value: 'UI/UX Design · Frontend' },
    { label: 'PHẠM VI', value: 'Website responsive' },
    { label: 'CÔNG CỤ', value: 'Figma · React · .NET · JavaScript' },
    { label: 'THỜI GIAN', value: '1 Tháng' },
  ],
  challenge: {
    eyebrow: '01 / DEFINE THE CHALLENGE',
    heading: ['Mua giày online,', 'đừng để phải đoán.'],
    text: 'Giả định bài toán: người mua khó so sánh các mẫu giày và chưa tự tin khi chọn size. Thông tin quan trọng dễ bị lẫn trong một trang sản phẩm nhiều chi tiết.',
    goalsTitle: 'Mục tiêu thiết kế đề xuất',
    goals: [
      { n: '01', title: 'Tìm nhanh', text: 'Danh mục và bộ lọc có thứ bậc rõ ràng.' },
      { n: '02', title: 'Chọn tự tin', text: 'Thông tin size, chất liệu và chính sách dễ thấy.' },
      { n: '03', title: 'Mua liền mạch', text: 'CTA nhất quán, tổng giá và trạng thái rõ ràng.' },
    ],
  },
  research: {
    eyebrow: '02 / RESEARCH BEFORE PIXELS',
    heading: 'Bắt đầu bằng những câu hỏi.',
    description:
      'Kế hoạch nghiên cứu minh họa, chưa thực hiện khảo sát hay phỏng vấn. Thay các giả thuyết dưới đây bằng insight và bằng chứng thực tế của dự án.',
    questions: [
      { tag: 'Khám phá', q: 'Người mua bắt đầu từ phong cách hay nhu cầu sử dụng?', note: 'Đề xuất: phỏng vấn người mua và phân tích cách họ tìm kiếm.' },
      { tag: 'Ra quyết định', q: 'Thông tin nào giúp người mua chọn đúng size?', note: 'Đề xuất: kiểm tra nội dung size guide và quan sát thao tác chọn size.' },
      { tag: 'Hoàn tất', q: 'Điều gì khiến người mua dừng ở giỏ hàng?', note: 'Đề xuất: usability test luồng mua và ghi lại điểm bối rối.' },
    ],
    // footnote: 'Tài liệu cần bổ sung: [Research notes] · [Insight có nguồn] · [Kết quả usability test]',
  },
  wireframes: {
    eyebrow: '03 / STRUCTURE & FLOW',
    heading: 'Đơn giản hóa trước khi làm đẹp.',
    description: 'Luồng mẫu: Khám phá → Lọc sản phẩm → Chi tiết & chọn size → Giỏ hàng.',
    footnote: 'Ưu tiên: nội dung quan trọng trước, một hành động chính trên mỗi bước và khả năng quay lại mà không mất lựa chọn.',
  },
  solution: {
    eyebrow: '04 / THE INTERFACE',
    heading: 'Rõ ràng trong từng lựa chọn.',
    description:
      'Bề mặt sáng, hình ảnh sản phẩm lớn và khoảng trống vừa đủ. Màu hồng và gradient đậm tạo sự tương phản và thu hút khách hàng.',
    decisions: [
      { eyebrow: '01 / TÌM KIẾM', title: 'Bộ lọc gọn, trạng thái dễ nhận biết', text: 'Giữ lựa chọn đang dùng và cho phép xóa lọc ngay trong danh sách.' },
      { eyebrow: '02 / THÔNG TIN', title: 'Size và chính sách ở đúng thời điểm', text: 'Đặt hướng dẫn size cạnh lựa chọn kích cỡ, không giấu ở cuối trang.' },
      { eyebrow: '03 / MOBILE FIRST', title: 'Hành động trong tầm tay', text: 'Nhóm giá và CTA rõ ràng; bố cục một cột để đọc và thao tác dễ hơn.' },
    ],
  },
  implementation: {
    eyebrow: '05 / FROM FIGMA TO FRONTEND',
    heading: 'Không dừng lại ở bản thiết kế.',
    description: 'Hướng triển khai mẫu — bổ sung repository, demo và ghi chú kỹ thuật từ sản phẩm thực tế của bạn.',
    path: 'src / components /',
    tree: ['ShopLayout', '  ├─ ProductFilter', '  ├─ ProductCard', '  ├─ SizeSelector', '  └─ CartSummary'],
    stack: ['React', 'Tailwind CSS', 'Responsive'],
    priorities: [
      { title: 'Component hóa', text: 'Tách giao diện theo trách nhiệm, dùng chung token và biến thể.' },
      { title: 'Responsive & accessibility', text: 'Grid linh hoạt, semantic HTML, focus state và tương phản rõ ràng.' },
      { title: 'Trạng thái & kiểm thử', text: 'Dự kiến kiểm tra empty cart, bộ lọc không có kết quả và chọn size.' },
    ],
    next: {
      title: 'Tiếp theo: kiểm chứng, không phỏng đoán.',
      text: 'Chưa có kết quả đo lường. Cần kiểm thử luồng tìm sản phẩm, chọn size và giỏ hàng; ghi lại lỗi thao tác, phản hồi và thay đổi sau mỗi vòng thử nghiệm.',
    },
  },
  
};
