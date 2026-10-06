export function safeReturnTo() {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('returnTo') || '/diario';
    return raw.startsWith('/') ? raw : '/diario';
  } catch {
    return '/diario';
  }
}

export default safeReturnTo;
