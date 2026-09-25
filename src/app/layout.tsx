import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { getAssetUrl } from "@/utils/asset";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/utils/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const OG_IMAGE = {
  url: "/resource/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "FINRA - Nền tảng đầu tư công nghệ tài chính hiện đại",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Về chúng tôi | FINRA Capital - Nền tảng đầu tư công nghệ tài chính",
    template: "%s | FINRA Capital",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Finra",
    "Finra Capital",
    "đầu tư",
    "công nghệ tài chính",
    "fintech",
    "nền tảng đầu tư",
    "Finra Invest",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: SITE_NAME,
    url: "/",
    title: "Về chúng tôi | FINRA Capital",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Về chúng tôi | FINRA Capital",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: getAssetUrl("/resource/images/finra_fav.svg"), type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
