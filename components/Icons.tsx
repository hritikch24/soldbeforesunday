const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const IconHouse = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
);
export const IconCash = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9v6M18 9v6" /></svg>
);
export const IconCalendar = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 9h17M8 3v4M16 3v4" /><path d="M8 14l2.5 2.5L16 12" /></svg>
);
export const IconShield = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const IconGavel = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><path d="M14 4l6 6-3 3-6-6z" /><path d="M11 7l-6 6 3 3 6-6" /><path d="M4 20h9" /></svg>
);
export const IconKeys = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><circle cx="8" cy="8" r="4" /><path d="M11 11l8 8M16 16l2-2M18.5 18.5l1.5-1.5" /></svg>
);
export const IconHeart = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.6 12 20 12 20z" /></svg>
);
export const IconTruck = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><rect x="2.5" y="7" width="11" height="9" rx="1" /><path d="M13.5 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></svg>
);
export const IconWrench = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={p.className} {...base}><path d="M15 4a4 4 0 00-3.5 6L4 17.5 6.5 20l7.5-7.5A4 4 0 1015 4z" /></svg>
);

export const situationIcon: Record<string, (p: { className?: string }) => React.ReactElement> = {
  'stopping-foreclosure': IconShield,
  'inherited-property': IconGavel,
  'divorce': IconHeart,
  'relocation': IconTruck,
  'damaged-property': IconWrench,
  'tired-landlord': IconKeys,
};
