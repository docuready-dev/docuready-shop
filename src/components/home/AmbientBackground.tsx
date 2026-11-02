/**
 * High-End Monochromatic Architectural Grid.
 * Pure minimal hairline structure — zero blur bubbles, zero AI glow slop, zero VRAM penalty.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none bg-white">
      {/* Subtle Architectural Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="swiss-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(0, 0, 0, 0.04)"
              strokeWidth="1"
            />
            {/* Subtle precision intersection crosshairs */}
            <circle cx="0" cy="0" r="1" fill="rgba(0, 0, 0, 0.15)" />
            <circle cx="80" cy="0" r="1" fill="rgba(0, 0, 0, 0.15)" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#swiss-grid)" />
      </svg>
    </div>
  );
}
