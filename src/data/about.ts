export const about = {
  subtitle: 'UI/UX Designer & Frontend Developer · Tp. Hồ Chí Minh · nh.quang29200189@gmail.com · 0342455466',
  statement: 'Mình yêu cái đẹp, nhưng cái đẹp phải có lý do.',
  paragraphs: [
    'Mình theo đuổi sự giao thoa giữa thiết kế trải nghiệm và phát triển giao diện: hiểu vấn đề, tổ chức thông tin, thử nghiệm ý tưởng và hiện thực hóa bằng code.',
    'Mình yêu thích nghệ thuật nhưng cũng cần mọi thứ hợp lý, nên luôn muốn làm ra sản phẩm vừa đẹp vừa dễ dùng và mang dấu ấn riêng. Một năm theo đuổi nhiếp ảnh giúp mình nhìn ánh sáng, bố cục và màu sắc kỹ hơn; mình mang cách nhìn đó vào từng màn hình mình thiết kế và code.'
  ],
  details: [
    { label: 'ĐỊNH HƯỚNG', value: 'Frontend Developer (React) · UI/UX Designer' },
    { label: 'HỌC VẤN', value: 'Kỹ thuật phần mềm · Đại học Công nghiệp TP.HCM (2020–2025)' },
    { label: 'KINH NGHIỆM', value: 'Thực tập UI/UX Designer & Frontend Developer · i-Soft (3 tháng)' },
    { label: 'NGÔN NGỮ', value: 'Tiếng Việt · Tiếng Anh (TOEIC 560, đang luyện thi)' },
  ],
  // Mốc thời gian: hiển thị ở mục "Kinh nghiệm & học vấn" trên trang Về tôi
  timeline: [
    {
      time: '2024 · 3 tháng',
      title: 'UI/UX Designer & Frontend Developer Intern',
      place: 'i-Soft',
      points: [
        'Thiết kế wireframe, mockup và prototype cho Website và Mobile App bằng Figma, giữ nhất quán theo design system.',
        'Chuyển thiết kế Figma sang giao diện React.js responsive, xây dựng component tái sử dụng.',
        'Phối hợp với Backend để tích hợp RESTful API; sửa lỗi, cải thiện giao diện và quản lý mã nguồn bằng Git.',
      ],
    },
    {
      time: '2020 – 2025',
      title: 'Kỹ thuật phần mềm',
      place: 'Trường Đại học Công nghiệp TP. Hồ Chí Minh (IUH)',
      points: ['Nền tảng lập trình, cơ sở dữ liệu, phân tích thiết kế hệ thống và phát triển ứng dụng web.'],
    },
    {
      time: '1 năm',
      title: 'Theo đuổi nhiếp ảnh',
      place: 'Tự do',
      points: ['Rèn luyện óc thẩm mỹ về ánh sáng, bố cục và màu sắc, những thứ mình mang vào thiết kế giao diện mỗi ngày.'],
    },
  ],
  // Kinh nghiệm sáng tạo khác ngoài UI/UX
  creative: ['Nhiếp ảnh', 'Thiết kế ấn phẩm', 'Dựng video', 'Vẽ tay'],
  disciplines: [
    {
      id: 'uiux',
      icon: 'figma',
      title: 'UI/UX Design',
      summary: 'Từ nhu cầu đến trải nghiệm có cấu trúc.',
      tags: ['User research', 'User flow', 'Wireframe', 'Prototyping', 'Design system'],
      tools: 'Figma · FigJam',
      output: 'Đầu ra: flow, prototype, UI kit và handoff.',
    },
    {
      id: 'frontend',
      icon: 'code',
      title: 'Frontend Development',
      summary: 'Từ bản thiết kế đến giao diện có thể dùng.',
      tags: ['HTML / CSS', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Responsive'],
      tools: 'VS Code · Git · GitHub · Vercel',
      output: 'Đầu ra: component, responsive UI và tài liệu.',
    },
    {
      id: 'fullstack',
      icon: 'server',
      title: 'Backend & Mobile',
      summary: 'Đủ để làm việc trơn tru với cả hệ thống.',
      tags: ['RESTful API', 'JWT', '.NET', 'Node.js', 'Java', 'MySQL', 'MongoDB', 'Flutter'],
      tools: 'Postman · Socket.IO · SQLite',
      output: 'Đã dùng trong: Shoes Ecommerce (.NET + MySQL), Chat App (Node.js + Socket.IO), Lumi Beauty (Flutter).',
    },
    {
      id: 'ai',
      icon: 'sparkles',
      title: 'Công cụ AI',
      summary: 'Tăng tốc, nhưng vẫn hiểu từng dòng code.',
      tags: ['GitHub Copilot', 'Cursor AI', 'ChatGPT', 'Claude'],
      tools: 'Dùng để phác ý tưởng, debug và refactor',
      output: 'Mình dùng AI như một người cùng làm, rồi tự đọc lại và giải thích được mọi thay đổi.',
    },
  ],
  process: [
    { n: '01', title: 'Hiểu vấn đề', text: 'Làm rõ mục tiêu, bối cảnh và nhu cầu. Không bắt đầu bằng một màn hình đẹp.', deliverables: 'Brief · Research plan' },
    { n: '02', title: 'Tạo cấu trúc', text: 'Sắp xếp nội dung, vẽ user flow và kiểm tra ý tưởng ở mức wireframe.', deliverables: 'Flow · Wireframe' },
    { n: '03', title: 'Thiết kế & thử', text: 'Phát triển UI, xây prototype và ghi lại phản hồi để điều chỉnh.', deliverables: 'UI system · Prototype' },
    { n: '04', title: 'Xây dựng & rà soát', text: 'Chia component, triển khai responsive và kiểm tra chi tiết trên trình duyệt.', deliverables: 'Frontend · QA' },
  ],
  principle:
    'Chia sẻ sớm, giải thích quyết định và ghi nhận phản hồi. Thiết kế và lập trình là một quá trình liên tục, không phải hai phần tách biệt.',
};
