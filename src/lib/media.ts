export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function isValidMediaUrl(url: string): boolean {
  if (!url.trim()) return false;
  if (url.startsWith("/")) return true;
  return isExternalUrl(url);
}
