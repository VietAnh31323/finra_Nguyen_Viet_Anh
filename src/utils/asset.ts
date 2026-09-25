// Helper to resolve asset URLs correctly in development and production (GitHub Pages)
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
