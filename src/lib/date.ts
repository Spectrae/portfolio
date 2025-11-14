// src/lib/date.ts
const UNITS = {
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date);
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  const absDiff = Math.abs(diff);

  for (const unit of Object.keys(UNITS) as (keyof typeof UNITS)[]) {
    if (absDiff > UNITS[unit] || unit === 'second') {
      return rtf.format(Math.round(diff / UNITS[unit]), unit);
    }
  }
  return '';
}