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
        background:
          'linear-gradient(135deg, var(--color-primary-light) 0%, color-mix(in srgb, var(--color-primary) 12%, transparent) 55%, transparent 100%)',
      }}
    />
  );
}

export function TopographicBg({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none opacity-30 ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 20% 50%, color-mix(in srgb, var(--color-primary) 6%, transparent) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, color-mix(in srgb, var(--color-secondary) 5%, transparent) 0%, transparent 50%)',
      }}
    />
  );
}
