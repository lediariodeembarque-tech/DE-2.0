export function safeReturnTo() {
  try {
    const params = new URLSearchParams(window.location.search);
    const returnTo = params.get('returnTo');
    if (returnTo && returnTo.startsWith('/')) return returnTo;
  } catch {}
  return '/';
}

export default safeReturnTo;
