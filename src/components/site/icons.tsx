/**
 * Minimal custom line-art icon set — single stroke language, no emoji.
 * All icons inherit `currentColor` and default to 22px.
 */
type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
});

export const IconWifi = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M2.5 8.5a15 15 0 0 1 19 0" />
    <path d="M5.8 12.3a10 10 0 0 1 12.4 0" />
    <path d="M9 16a5 5 0 0 1 6 0" />
    <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMeal = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 10.5h18" />
    <path d="M4.5 10.5a7.5 7.5 0 0 0 15 0" />
    <path d="M12 3v3" />
    <path d="M7.5 20.5h9" />
  </svg>
);

export const IconWater = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3s5.5 6.1 5.5 9.9A5.5 5.5 0 0 1 12 18.5a5.5 5.5 0 0 1-5.5-5.6C6.5 9.1 12 3 12 3Z" />
    <path d="M9.6 13.4a2.5 2.5 0 0 0 2.4 2.6" />
  </svg>
);

export const IconCctv = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 7.2l12.4-3.1 1.3 4.6L4.3 11.8 3 7.2Z" />
    <path d="M16.7 8.7 21 7.5" />
    <path d="M8 11.2v3.2a3 3 0 0 0 3 3h3.2" />
    <circle cx="15.5" cy="17.4" r="1.6" />
  </svg>
);

export const IconLocker = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <path d="M12 3.5v17" />
    <path d="M8.6 10h.8M14.6 10h.8" />
  </svg>
);

export const IconBed = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 18v-7.5h13a4 4 0 0 1 4 4V18" />
    <path d="M3 14.5h17" />
    <path d="M3 8v10M20 18v1.5M3 18v1.5" />
    <path d="M7.5 10.5V8h4v2.5" />
  </svg>
);

export const IconShield = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3.2 19 6v5.6c0 4-2.9 7.4-7 8.8-4.1-1.4-7-4.8-7-8.8V6l7-2.8Z" />
    <path d="M9.2 12.2l2 2 3.6-3.8" />
  </svg>
);

export const IconDesk = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 12h18" />
    <path d="M5 12v8M19 12v8" />
    <path d="M8 12V8.5a2 2 0 0 1 2-2h3" />
    <path d="M13 4.5h3.5v2H13z" />
  </svg>
);

export const IconClock = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconPin = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s6.5-6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21Z" />
    <circle cx="12" cy="10.4" r="2.4" />
  </svg>
);

export const IconPhone = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6.2 3.5h3l1.4 3.6-2 1.4a10.5 10.5 0 0 0 5.9 5.9l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const IconWhatsapp = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M20.2 11.6a8.2 8.2 0 0 1-12.1 7.2L3.8 20.2l1.4-4.3A8.2 8.2 0 1 1 20.2 11.6Z" />
    <path d="M9 9.2c0 3 2.3 5.4 5.2 5.6.6 0 1-.5 1-1.1l-.1-.6-1.8-.6-.8 1a5 5 0 0 1-2.3-2.4l1-.8-.6-1.8-.6-.1c-.6 0-1 .4-1 1Z" />
  </svg>
);

export const IconArrow = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4.5 12h14" />
    <path d="M13.5 7l5 5-5 5" />
  </svg>
);

export const IconCheck = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4.5 12.5l4 4 11-11" />
  </svg>
);

export const IconStar = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className} fill="currentColor" stroke="none">
    <path d="M12 3.6l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.6l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
  </svg>
);

export const IconMap = ({ size = 22, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M9.5 4.5 3.5 6.8v12.7l6-2.3 5 2.3 6-2.3V4.5l-6 2.3-5-2.3Z" />
    <path d="M9.5 4.5v12.7M14.5 6.8v12.7" />
  </svg>
);

/* ---------- decorative illustrations ---------- */

export const DecoSquiggle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="140"
    height="46"
    viewBox="0 0 140 46"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M2 34C18 8 34 8 50 24s32 16 48-4 38-10 38-10" />
  </svg>
);

export const DecoStar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M17 3v10M17 21v10M3 17h10M21 17h10" />
  </svg>
);

export const DecoBlob = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="220"
    height="200"
    viewBox="0 0 220 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    aria-hidden="true"
  >
    <path d="M113 6c48 4 92 34 100 76s-28 78-72 96-96 12-118-22S17 68 46 36 65 2 113 6Z" />
  </svg>
);

/** Line-art building + CCTV + shield illustration for the safety section. */
export const IllustrationSafety = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 420 300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Line illustration of a hostel building with a CCTV camera and a shield"
  >
    <path d="M60 260V96l86-38 86 38v164" />
    <path d="M32 260h356" />
    <path d="M96 132h28v28H96zM168 132h28v28h-28zM96 186h28v28H96zM168 186h28v28h-28z" />
    <path d="M132 260v-34h28v34" />
    <path d="M232 118h74v142h-74" />
    <path d="M256 146h26v22h-26zM256 190h26v22h-26z" />
    <g>
      <path d="M300 62l52-14 6 22-52 14-6-22Z" />
      <path d="M358 70l22-6" />
      <path d="M326 84v18a14 14 0 0 0 14 14h10" />
      <circle cx="352" cy="118" r="7" />
    </g>
    <g opacity="0.85">
      <path d="M36 74l30 12v24c0 17-12 31-30 37-18-6-30-20-30-37V86l30-12Z" />
      <path d="M24 104l9 9 15-16" />
    </g>
    <path d="M300 96c14 8 22 20 24 34" strokeDasharray="4 6" />
  </svg>
);

/** Minimal illustrated map used as the location background. */
export const IllustrationMap = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="M0 74h400M0 176h400M0 246h400" />
    <path d="M78 0v300M196 0v300M312 0v300" />
    <path d="M0 120c60 26 120-14 180 10s120 62 220 24" strokeDasharray="6 8" />
    <circle cx="196" cy="176" r="26" />
    <circle cx="196" cy="176" r="46" strokeDasharray="3 7" />
  </svg>
);
