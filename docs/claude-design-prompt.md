# Prompt gửi Claude Design — Personal Branding Website cho Backend Developer

Copy toàn bộ nội dung dưới đây và dán vào Claude Design.

---

## Bối cảnh & mục tiêu

Thiết kế giao diện (UI design) cho một **personal branding website** của một Backend Developer, dùng để hỗ trợ xin việc tại các công ty công nghệ ở Việt Nam. Đối tượng xem trang là nhà tuyển dụng, HR, và tech lead đang review ứng viên. Mục tiêu là truyền tải sự chuyên nghiệp, kinh nghiệm thực chiến với hệ thống backend/microservices, và dễ dàng nắm bắt thông tin trong thời gian ngắn.

Trang sẽ được lập trình lại bằng **Vite + React + TypeScript + Tailwind CSS**, hỗ trợ **song ngữ Việt/Anh** (toggle ở header). Vì vậy khi thiết kế, hãy:
- Xuất design dưới dạng **HTML + CSS tĩnh** (đóng gói zip), chia rõ theo từng trang/section, đặt tên class/section rõ ràng (header, hero, skills-section, project-card, timeline-item, contact-section, footer...) để dễ chuyển thành React components.
- Dùng **nội dung thật** được cung cấp bên dưới, không dùng lorem ipsum.
- Có nút chuyển ngôn ngữ (VI/EN) ở header — cung cấp mockup cho cả bản tiếng Việt và một bản mẫu tiếng Anh (ít nhất trang Home) để thấy rõ sự khác biệt độ dài text giữa 2 ngôn ngữ.

## Design system

- **Theme:** Light mode duy nhất (không cần dark mode).
- **Màu sắc:** Nền trắng/xám rất nhạt (`#ffffff`, `#f8fafc`), text đen/xám đậm (`#0f172a`, `#334155`), màu nhấn (accent) xanh dương chuyên nghiệp kiểu corporate (ví dụ tông `#2563eb`). Có thể thêm 1 màu phụ (xanh lá nhạt hoặc teal) cho badge/tag công nghệ.
- **Typography:** Font sans-serif hiện đại, dễ đọc cho phần nội dung chính (kiểu Inter/Manrope/Be Vietnam Pro — cần hỗ trợ tiếng Việt có dấu tốt). Dùng font monospace (kiểu JetBrains Mono/Fira Code) riêng cho các tech badge (tên công nghệ: Java, Spring Boot, PostgreSQL...) để tạo cảm giác kỹ thuật/kỹ sư mà vẫn giữ tổng thể sáng, sạch, thân thiện với nhà tuyển dụng không chuyên kỹ thuật.
- **Component style:** Card bo góc nhẹ, shadow rất mỏng hoặc border 1px màu xám nhạt; tech badge dạng pill nhỏ; timeline dọc cho phần kinh nghiệm; nút CTA bo góc, màu accent.
- **Responsive:** Thiết kế cho cả desktop và mobile.

## Cấu trúc trang (5 trang, multi-page)

1. **Home (`/`)** — Trang tổng quan/gây ấn tượng đầu tiên
2. **About (`/about`)** — Giới thiệu chi tiết + học vấn + toàn bộ kỹ năng + timeline kinh nghiệm
3. **Projects (`/projects`)** — Danh sách 5 dự án dạng card
4. **Project Detail (`/projects/:slug`)** — Chi tiết 1 dự án (dùng 1-2 dự án làm mẫu thiết kế, layout sẽ tái sử dụng cho cả 5)
5. **Contact (`/contact`)** — Thông tin liên hệ

Header (chung mọi trang): Tên/logo bên trái, nav (Home / About / Projects / Contact) ở giữa hoặc phải, language switcher (VI/EN) và có thể thêm link GitHub/LinkedIn icon ở góc phải.

Footer (chung mọi trang): Social links (GitHub, LinkedIn, Email), © năm hiện tại.

---

## NỘI DUNG THẬT — dùng nguyên văn khi thiết kế

### Thông tin cá nhân

| Field | Tiếng Việt | English |
|---|---|---|
| Họ tên | Nguyễn Văn Linh | Nguyen Van Linh |
| Chức danh | Backend Developer | Backend Developer |
| Địa điểm | Hà Nội, Việt Nam | Hanoi, Vietnam |
| Email | linhnv.work.dev@gmail.com | (same) |
| GitHub | github.com/nvlinhdev | (same) |
| LinkedIn | linkedin.com/in/nvlinhdev | (same) |

### Bio / Mô tả ngắn (dùng cho Hero ở Home + phần đầu About)

**Tiếng Việt:**
> Middle Backend Developer với hơn 3 năm kinh nghiệm phát triển hệ thống doanh nghiệp sử dụng Java Spring Boot. Có kinh nghiệm tham gia phân tích yêu cầu nghiệp vụ, đề xuất giải pháp kỹ thuật, thiết kế và phát triển Microservices, RESTful API và tích hợp hệ thống trên môi trường production. Thành thạo PostgreSQL, có khả năng xây dựng Stored Procedure, làm việc với Docker, Git và AWS. Có khả năng giao tiếp, phối hợp hiệu quả với BrSE, khách hàng và các thành viên trong dự án theo mô hình Agile/Scrum.

**English:**
> Middle Backend Developer with 3+ years of experience building enterprise systems using Java Spring Boot. Experienced in business requirement analysis, technical solution proposals, and designing/developing Microservices, RESTful APIs, and system integrations in production environments. Proficient in PostgreSQL, capable of building and optimizing Stored Procedures, and skilled with Docker, Git, and AWS. Strong communicator who collaborates effectively with BrSEs, clients, and project members in Agile/Scrum settings.

### Học vấn

- **Trường / School:** Đại học FPT / FPT University
- **Chuyên ngành / Major:** Kỹ thuật phần mềm / Software Engineering

### Kỹ năng (nhóm theo category cho trang About)

**Ngôn ngữ & Framework:** Java Core, Spring Framework, Spring Boot, ReactJS, JavaScript, HTML5, CSS3

**Kiến trúc & API:** RESTful API, Microservices, gRPC

**Database:** PostgreSQL, MySQL, MariaDB, SQL Server, Stored Procedure

**Hạ tầng dữ liệu & Caching:** Redis, Redis Streams, Kafka, Elasticsearch

**Bảo mật & Xác thực:** OAuth2, JWT, SSO Authentication

**DevOps & Hạ tầng:** Docker, Git, GitLab CI/CD, AWS (EC2, Lambda, S3, EBS, RDS, DynamoDB, ELB, ECS, CloudFront, CloudWatch), Linux Server, Nginx

**Monitoring:** Prometheus, Grafana, Node Exporter, Redis Exporter, MySQL Exporter

**Khác:** Phân tích yêu cầu nghiệp vụ & đề xuất giải pháp kỹ thuật, Agile/Scrum Development, phối hợp hiệu quả với BrSE/BA/QA

### Kinh nghiệm / Dự án (5 dự án, dùng cho Projects list + Timeline ở About)

**1. ONLINEQUIZZ – Hệ thống thi trắc nghiệm trực tuyến**
- Thời gian: 05/2023 – 03/2024 | Vai trò: Fullstack Developer | Team: 4 người
- Mô tả: Xây dựng hệ thống quản lý ngân hàng câu hỏi và tổ chức thi trực tuyến dành cho học sinh và sinh viên.
- Trách nhiệm: Phát triển backend bằng Java Servlet, JSP, JDBC; thiết kế cơ sở dữ liệu và xây dựng chức năng quản lý đề thi; xây dựng đăng ký/đăng nhập/xác thực; tích hợp Google Login; tối ưu hiệu năng; xử lý lỗi và hỗ trợ triển khai.
- Công nghệ: Java Servlet, JSP, JDBC, MySQL, HTML, CSS, JavaScript

**2. TRANSITLINK – Hệ thống điều phối xe trung chuyển thông minh**
- Thời gian: 04/2024 – 09/2025 | Vai trò: Backend Developer | Team: 6 người
- Mô tả: Xây dựng hệ thống quản lý và điều phối xe trung chuyển, hỗ trợ tìm kiếm, theo dõi và vận hành dữ liệu theo thời gian thực.
- Trách nhiệm: Xây dựng backend bằng Java Spring Boot; thiết kế DB và RESTful API; tích hợp Redis Cache; tích hợp Elasticsearch cho tìm kiếm; xây dựng realtime bằng WebSocket STOMP; tài liệu hóa API bằng Swagger; triển khai VPS bằng Docker Compose; thiết lập Nginx Reverse Proxy/HTTPS; xây dựng GitLab CI/CD.
- Công nghệ: Java, Spring Boot, Redis, Elasticsearch, WebSocket, Swagger, Docker, Nginx, GitLab CI/CD, MySQL

**3. HỆ THỐNG QUẢN LÝ ĐỐI TÁC, KHO VÀ TÀI SẢN**
- Thời gian: 10/2025 – 02/2026 | Vai trò: Backend Developer | Team: 10+ người
- Mô tả: Tham gia xây dựng hệ thống quản lý đối tác, kho và tài sản theo kiến trúc Microservices phục vụ khách hàng doanh nghiệp.
- Trách nhiệm: Phân tích yêu cầu nghiệp vụ; phát triển Microservices bằng Spring Boot; thiết kế RESTful API, gRPC; tích hợp SSO/OAuth2/JWT; tích hợp Kafka xử lý bất đồng bộ; tối ưu hiệu năng và xử lý lỗi production; phối hợp với BA/Tester/DevOps.
- Công nghệ: Java, Spring Boot, Microservices, Kafka, gRPC, OAuth2, JWT, PostgreSQL, Docker, GitLab CI/CD

**4. LAOONE – Super App và hệ thống CMS quản trị nội dung**
- Thời gian: 03/2026 – Nay | Vai trò: Backend Lead / DevOps Engineer | Team: 15 người
- Mô tả: Xây dựng nền tảng Super App tích hợp nhiều Mini App và hệ thống CMS quản trị nội dung, cấu hình giao diện, quản lý thông báo và đồng bộ dữ liệu tập trung. Phục vụ hàng nghìn người dùng với kiến trúc mở rộng linh hoạt.
- Trách nhiệm: Dẫn dắt phát triển backend; xây dựng Authentication/Authorization (Email OTP, SMS OTP); hệ thống Notification đa kênh + FCM; đồng bộ dữ liệu Mini App vào hệ thống trung tâm; xây dựng CMS quản trị nội dung/theme; tối ưu PostgreSQL/Redis Cache; container hóa bằng Docker; review code, hỗ trợ kỹ thuật cho team.
- Công nghệ: Java, Spring Boot, PostgreSQL, Redis Cache, Docker, Firebase Cloud Messaging (FCM), RESTful API, Git

**5. LAOID – Hệ thống định danh quốc gia và Single Sign-On (SSO)**
- Thời gian: 02/2026 – Nay | Vai trò: Backend Developer / DevOps Engineer | Team: 10 người
- Mô tả: Xây dựng nền tảng định danh số quốc gia và hệ thống SSO cho phép người dùng xác thực một lần và truy cập nhiều ứng dụng trong hệ sinh thái. Quản lý phiên tập trung, bảo mật cao, mở rộng phục vụ lưu lượng lớn.
- Trách nhiệm: Phát triển dịch vụ xác thực/phân quyền SSO; luồng SSO dựa trên OAuth2/JWT; quản lý phiên (Access/Refresh Token, Token Rotation/Exchange, Revoke, Logout toàn hệ thống); đồng bộ phiên bất đồng bộ bằng Redis Streams; Rate Limiting/Session Management; nâng cấp Java 17 → 21 với Virtual Threads; performance tuning HikariCP/Lettuce; đạt **hơn 3.000 requests/giây (RPS)**.
- Công nghệ: Java 21, Spring Boot, OAuth2, JWT, MariaDB, Redis Cache, Redis Streams, Virtual Threads, HikariCP, Lettuce, Docker, RESTful API, Git

*(Lưu ý cho Claude Design: nội dung "Trách nhiệm" khá dài — ở project card ngoài danh sách chỉ hiện mô tả ngắn + 4-5 tech badge nổi bật; toàn bộ chi tiết trách nhiệm hiển thị ở trang Project Detail dạng bullet list.)*

### Contact section

- Email: linhnv.work.dev@gmail.com (mailto link)
- GitHub: github.com/nvlinhdev
- LinkedIn: linkedin.com/in/nvlinhdev
- Không cần form liên hệ — chỉ hiển thị các link trên rõ ràng, dễ bấm (button/icon lớn, dễ thao tác trên mobile).

---

## Yêu cầu bàn giao (deliverable)

- Xuất file HTML/CSS tĩnh cho cả 5 trang (Project Detail có thể xuất 1 bản mẫu dùng chung layout), đóng gói vào 1 file **zip**.
- Kèm theo: color palette (mã hex cụ thể), font family dùng, spacing scale nếu có — để dễ map sang Tailwind config.
- Ảnh đại diện: dùng placeholder dạng monogram "NVL" hoặc avatar minh họa chung chung (ảnh thật sẽ được thay sau).
- Không cần đính kèm JS phức tạp — chỉ cần HTML/CSS, phần tương tác (routing, language switch thực sự) sẽ được lập trình lại bằng React sau khi nhận thiết kế.
