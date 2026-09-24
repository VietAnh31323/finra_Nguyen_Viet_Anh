import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Về chúng tôi - FINRA Capital",
  description: "Finra Capital - Nền tảng đầu tư công nghệ tài chính hiện đại, gia tăng giá trị thực cho khách hàng.",
  icons: {
    icon: "/resource/images/finra_fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/resource/images/finra_fav.svg" />
      </head>
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
