/**
 * Human UI Expert Ambient Background:
 * Structured architectural mesh & subtle directional Majestic Violet lighting.
 * 100% hardware-composited, zero VRAM penalty, no AI-slop neon clutter.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Directional Majestic Violet Top Ambient Spotlight */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] sm:w-[1100px] sm:h-[700px] rounded-full radial-glow-majestic animate-float-1 pointer-events-none"
        style={{ transform: 'translate3d(-50%, 0, 0)' }}
      />

      {/* Subtle Deep Violet Counter-Glow (Bottom Lateral) */}
      <div
        className="absolute -bottom-40 right-1/4 w-[650px] h-[650px] rounded-full radial-glow-deep animate-float-2 pointer-events-none"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Subtle Geometric Line Art & Architectural Mesh Layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 64px Modular Architectural Grid */}
          <pattern
            id="docu-mesh-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="rgba(109, 40, 217, 0.05)"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1" fill="rgba(109, 40, 217, 0.15)" />
            <circle cx="64" cy="0" r="1" fill="rgba(109, 40, 217, 0.15)" />
          </pattern>

          {/* Gradients for curated architectural contour line art */}
          <linearGradient id="contour-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(109, 40, 217, 0.14)" />
            <stop offset="60%" stopColor="rgba(76, 29, 149, 0.07)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="contour-grad-subtle" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(109, 40, 217, 0.12)" />
            <stop offset="70%" stopColor="rgba(88, 28, 135, 0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* The Grid Mesh */}
        <rect width="100%" height="100%" fill="url(#docu-mesh-grid)" />

        {/* Elegant curvilinear vector wireframe contour line art */}
        <g fill="none" strokeWidth="1" strokeLinecap="round">
          {/* Top-Right Architectural Contours */}
          <path
            d="M 600 -100 C 850 150, 1100 80, 1450 320 S 1750 400, 2000 650"
            stroke="url(#contour-grad-violet)"
          />
          <path
            d="M 650 -80 C 890 180, 1130 110, 1480 350 S 1780 430, 2000 700"
            stroke="url(#contour-grad-violet)"
            strokeDasharray="4 8"
          />

          {/* Mid-Left Subtle Isometric Ribs */}
          <path
            d="M -150 400 C 200 480, 450 680, 700 850 S 1100 1100, 1400 1350"
            stroke="url(#contour-grad-subtle)"
          />
          <path
            d="M -150 460 C 200 540, 450 740, 700 910 S 1100 1160, 1400 1410"
            stroke="url(#contour-grad-subtle)"
            strokeDasharray="5 9"
          />
        </g>
      </svg>
    </div>
  );
}
