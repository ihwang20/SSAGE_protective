/**
 * Shared background / overlay components used across CourseCatalog
 * and in-course pages for visual consistency.
 */

export function NoiseOverlay() { return null; }

export function GradientMesh({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-light) 0%, rgba(255,255,255,0) 70%)',
      }}
    />
  );
}

export function TopographicBg({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none opacity-20 ${className}`}
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, var(--color-primary-light) 0%, transparent 60%)',
      }}
    />
  );
}
