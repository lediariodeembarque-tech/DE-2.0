export const PERFIS = [
  { id: 'user', nome: 'Usuário', descricao: 'Registre e gerencie seus embarques' },
  { id: 'hcc', nome: 'HCC', descricao: 'Consulte dados de embarques (somente leitura)' },
  { id: 'admin', nome: 'Admin', descricao: 'Acesso ao painel administrativo' }
];

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

export default { PERFIS, getPerfil, setPerfil };
