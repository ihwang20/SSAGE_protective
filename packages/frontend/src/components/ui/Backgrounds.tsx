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
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 60%, rgba(255,255,255,0) 100%)',
        opacity: 0.15,
      }}
    />
  );
}

export function TopographicBg({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, var(--color-primary-light) 0%, transparent 60%)',
        opacity: 0.5,
      }}
    />
  );
}
