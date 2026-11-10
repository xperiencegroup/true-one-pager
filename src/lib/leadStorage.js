const KEY = "true_lead_registered";
const DAYS = 7;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function saveLead() {
  try {
    localStorage.setItem(KEY, JSON.stringify({ at: Date.now() }));
  } catch {
    // modo privado o almacenamiento bloqueado: se ignora
  }
}

export function hasValidLead() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;

    const { at } = JSON.parse(raw);
    if (Date.now() - at > DAYS * MS_PER_DAY) {
      localStorage.removeItem(KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
