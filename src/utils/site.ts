// Public URL of the deployed site (GitHub Pages), used for canonical, Open Graph, sitemap and JSON-LD
export const SITE_URL = "https://vietanh31323.github.io/finra_Nguyen_Viet_Anh/";

export const SITE_NAME = "FINRA Capital";

export const SITE_DESCRIPTION =
  "Finra Capital - Nền tảng đầu tư công nghệ tài chính hiện đại, gia tăng giá trị thực cho khách hàng.";

// Absolute URL for a path relative to the site root, e.g. absoluteUrl("/resource/a.png")
export function absoluteUrl(path: string): string {
  return new URL(path.replace(/^\//, ""), SITE_URL).toString();
}
