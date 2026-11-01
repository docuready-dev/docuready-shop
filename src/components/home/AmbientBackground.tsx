/**
 * Ultra-low VRAM Ambient Background with subtle Line-Art Mesh.
 * Uses native CSS radial-gradient light falloff + hardware translate3d compositing + lightweight SVG mesh lines.
 * Avoids expensive runtime Gaussian GPU blur shaders (filter: blur) and avoids JS RAF loops.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Moving Ambient Glow Orbs (Pure CSS translate3d, 0 frame drops) */}
      {/* Orb 1 - Violet Glow (Top Right) */}
      <div
        className="absolute -top-20 -right-20 w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] rounded-full radial-glow-purple animate-float-1"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Orb 2 - Indigo Glow (Mid Left) */}
      <div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full radial-glow-indigo animate-float-2"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Orb 3 - Soft Pink/Purple Glow (Bottom Right) */}
      <div
        className="absolute top-2/3 right-10 w-[480px] h-[480px] sm:w-[580px] sm:h-[580px] rounded-full radial-glow-pink animate-float-3"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Orb 4 - Subtle Bottom Ambient Orb */}
      <div
        className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] rounded-full radial-glow-purple animate-float-1"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Subtle Geometric Line Art & Architectural Mesh Layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 60px Modular Tech Grid Pattern */}
          <pattern
            id="docu-mesh-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Soft grid lines */}
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="rgba(124, 58, 237, 0.05)"
              strokeWidth="1"
            />
            {/* Subtle corner crosshairs / dots */}
            <circle cx="0" cy="0" r="1" fill="rgba(124, 58, 237, 0.12)" />
            <circle cx="64" cy="0" r="1" fill="rgba(124, 58, 237, 0.12)" />
          </pattern>

          {/* Mask to gracefully fade the mesh towards edges and center */}
          <radialGradient id="mesh-fade-mask" cx="50%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.05" />
          </radialGradient>

          {/* Subtle gradient for contour line art */}
          <linearGradient id="contour-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.12)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.08)" />
            <stop offset="100%" stopColor="rgba(192, 132, 252, 0.01)" />
          </linearGradient>

          <linearGradient id="contour-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.12)" />
            <stop offset="60%" stopColor="rgba(124, 58, 237, 0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* The Grid Mesh with soft fade */}
        <rect width="100%" height="100%" fill="url(#docu-mesh-grid)" mask="url(#mesh-mask)" />

        {/* Elegant curvilinear vector wireframe / contour line art */}
        <g fill="none" strokeWidth="1.2" strokeLinecap="round">
          {/* Top-Right Wave Contours */}
          <path
            d="M 600 -100 C 850 150, 1100 80, 1450 320 S 1750 400, 2000 650"
            stroke="url(#contour-grad-1)"
          />
          <path
            d="M 650 -80 C 890 180, 1130 110, 1480 350 S 1780 430, 2000 700"
            stroke="url(#contour-grad-1)"
            strokeDasharray="4 6"
          />
          <path
            d="M 700 -60 C 930 210, 1160 140, 1510 380 S 1810 460, 2000 750"
            stroke="url(#contour-grad-1)"
          />

          {/* Mid-Left Subtle Isometric Wireframe Ribs */}
          <path
            d="M -150 400 C 200 480, 450 680, 700 850 S 1100 1100, 1400 1350"
            stroke="url(#contour-grad-2)"
          />
          <path
            d="M -150 460 C 200 540, 450 740, 700 910 S 1100 1160, 1400 1410"
            stroke="url(#contour-grad-2)"
            strokeDasharray="6 8"
          />
          <path
            d="M -150 520 C 200 600, 450 800, 700 970 S 1100 1220, 1400 1470"
            stroke="url(#contour-grad-2)"
          />
        </g>
      </svg>
    </div>
  );
}
