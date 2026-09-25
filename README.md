# FINRA Capital – Trang "Về chúng tôi"

Dựng lại trang [Về chúng tôi của FINRA Capital](https://finra.com.vn/ve-chung-toi) bằng Next.js, xuất ra site tĩnh và triển khai lên GitHub Pages.

**Demo:** https://vietanh31323.github.io/finra_Nguyen_Viet_Anh/

## Công nghệ

- [Next.js 16](https://nextjs.org) (App Router, `output: "export"`)
- React 19, TypeScript
- Font Be Vietnam Pro qua `next/font/google`
- GitHub Actions + GitHub Pages để build và deploy

## Chạy ở máy local

Yêu cầu Node.js 20 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy server phát triển |
| `npm run build` | Build site tĩnh ra thư mục `out/` |
| `npm run lint` | Kiểm tra code bằng ESLint |

Muốn build giống môi trường GitHub Pages (có basePath `/finra_Nguyen_Viet_Anh`):

```bash
GITHUB_ACTIONS=true npm run build
```

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx            # Layout gốc, font, metadata SEO dùng chung
│   ├── page.tsx              # Trang chính (/) + JSON-LD
│   ├── ve-chung-toi/page.tsx # Cùng nội dung, canonical trỏ về /
│   ├── sitemap.ts            # Sinh sitemap.xml
│   ├── robots.ts             # Sinh robots.txt
│   └── *.css                 # Style toàn cục, header, footer, trang giới thiệu
├── components/               # Mỗi section của trang là một component
│   ├── FinraHeader.tsx       # Thanh điều hướng + menu mobile
│   ├── HeroSection.tsx
│   ├── CeoSection.tsx        # Thông điệp từ Tổng Giám Đốc
│   ├── VisionSection.tsx     # Tầm nhìn & Sứ mệnh
│   ├── ValuesSection.tsx     # Giá trị cốt lõi
│   ├── PhilosophySection.tsx # Triết lý kinh doanh
│   ├── TeamIntroSection.tsx
│   ├── LeadersSection.tsx    # Đội ngũ lãnh đạo + popup chi tiết
│   ├── EcosystemSection.tsx  # Hệ sinh thái Bolt Holdings
│   ├── PartnersSection.tsx   # Đối tác
│   ├── FinraFooter.tsx
│   └── ScrollToTop.tsx
└── utils/
    ├── asset.ts              # getAssetUrl(): thêm basePath cho đường dẫn ảnh
    └── site.ts               # URL site, tên, mô tả dùng cho SEO
public/resource/images/       # Ảnh, icon, logo đối tác
```

## Triển khai

Mỗi lần push lên nhánh `main`, workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) sẽ build và deploy thư mục `out/` lên GitHub Pages.

Vì site nằm dưới đường dẫn con `/finra_Nguyen_Viet_Anh`, cần lưu ý:

- `next.config.ts` chỉ bật `basePath` khi build trên GitHub Actions, và truyền giá trị này qua biến `NEXT_PUBLIC_BASE_PATH`.
- Ảnh trong component phải đi qua `getAssetUrl("/resource/...")`, không viết đường dẫn tuyệt đối trực tiếp.
- Ảnh gọi trong CSS dùng đường dẫn tương đối tới `public/` (ví dụ `url(../../public/resource/...)`) để Next tự đóng gói và gắn đúng basePath.

## SEO và hiệu năng

- Metadata đầy đủ: title, description, Open Graph, Twitter card, ảnh chia sẻ 1200×630.
- Canonical URL; `/ve-chung-toi/` trỏ canonical về `/` để tránh trùng lặp nội dung.
- `sitemap.xml`, `robots.txt`.
- Dữ liệu có cấu trúc JSON-LD (`Organization`, `AboutPage`).
- Ảnh chuyển sang WebP, rộng tối đa 1920px; ảnh lớn có `width`/`height` để giảm nhảy layout (CLS).
- Ảnh trang trí dùng `alt=""`, ảnh nội dung có alt tiếng Việt mô tả.
- Một thẻ `<h1>`, các section dùng `<h2>`/`<h3>` theo thứ tự.

Sau khi deploy, nên gửi sitemap `https://vietanh31323.github.io/finra_Nguyen_Viet_Anh/sitemap.xml` trong Google Search Console. Trên GitHub Pages dạng project site, `robots.txt` nằm trong thư mục con nên công cụ tìm kiếm sẽ không đọc; file này chỉ có tác dụng khi chuyển sang domain riêng.

## Việc còn lại

- Link mạng xã hội ở footer (Facebook, YouTube, Messenger) đang là link tạm, cần thay bằng trang chính thức.

## Nguồn nội dung

Nội dung, hình ảnh và logo thuộc về FINRA Capital và các đối tác, lấy từ https://finra.com.vn/ve-chung-toi. Dự án chỉ dùng cho mục đích học tập và demo.
