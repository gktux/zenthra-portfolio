'use client';

export default function CerezTercihleriLink({ style }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('cerez-tercihleri'))}
      style={{ background: 'none', border: 0, padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', ...style }}
    >
      Çerez Tercihleri
    </button>
  );
}
