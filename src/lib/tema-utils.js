export function hslChannels(color) {
  if (!color) return '219 54% 8%';
  try {
    const match = color.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
    if (match) return `${match[1]} ${match[2]}% ${match[3]}%`;
  } catch {}
  return '219 54% 8%';
}

export function textoEscuro(color) {
  if (!color) return true;
  try {
    const match = color.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
    if (match) {
      const l = parseInt(match[3]);
      return l < 50;
    }
  } catch {}
  return true;
}

export default { hslChannels, textoEscuro };
