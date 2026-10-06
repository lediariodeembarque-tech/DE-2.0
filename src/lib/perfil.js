export function getPerfil() {
  try {
    return localStorage.getItem('perfil') || 'user';
  } catch {
    return 'user';
  }
}

export function setPerfil(value) {
  try {
    localStorage.setItem('perfil', value || 'user');
  } catch {}
}

export default { getPerfil, setPerfil };
