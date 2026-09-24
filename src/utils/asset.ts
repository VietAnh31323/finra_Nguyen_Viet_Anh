// Helper to resolve asset URLs correctly in development and production (GitHub Pages)
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  const basePath = process.env.NODE_ENV === 'production' ? '/finra_Nguyen_Viet_Anh' : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
