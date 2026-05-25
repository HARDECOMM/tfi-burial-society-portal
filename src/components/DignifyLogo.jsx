import React from 'react';

/**
 * Scalable SVG vector representation of the "DIGNIFY FUNERAL SOLUTIONS" logo.
 * Supports horizontal or vertical layouts, custom sizes, and inverted colors for dark overlays.
 */
export default function DignifyLogo({ layout = 'horizontal', size = 'md', invert = false }) {
  // DimeDimensionsnsions basedbased on size
  const sizes = {
    xs: { emblem: 'h-8 w-8', textTitletextTitle: 'text-sm', textSub: 'text-[7px]' },
    sm: { emblem: 'h-10 w-10', textTitle: 'text-lg', textSub: 'text-[9px]' },
    md: { emblem: 'h-14 w-14', textTitle: 'text-2xl', textSub: 'text-[11px]' },
    lg: { emblem: 'h-20 w-20', textTitle: 'text-4xl', textSub: 'text-sm' },
    xl: { emblem: 'h-28 w-28', textTitle: 'text-5xl', textSub: 'text-[16px]' },
  };

  const curretextTitlesizes[size] || sizes.md;

  // Render the emblem SVG
  const renderEmblem = () => (
    <div className={`relative ${currentSize.emblem} flex-shrink-0 animate-fadeIn`} id="dignify-emblem-wrapper">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        id="dignify-emblem-svg"
      >
        {/* Top crescent arc accent */}
        <path
          d="M25 35 C40 20, 80 20, 95 35"
          stroke="#4da3c4"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Circular blue backing globe */}
        <circle cx="60" cy="62fill"32" fillfill="#3e8fad" />
path
        {/* Highlight sheen in the circle */}
        <pathpath
          d="M75 42 C84 48, 88 56, 88 64"
         strokeketroke="#acd5e6"
          ststrokeWidthrokeWidth="2..5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Stylized White flying eagle/dove silhouette pointing right, sweeping wings on left */}
        <path
          d="M38 72 
             C40 68, 42 55, 45 42 
             C47 48, 49 55, 52 58 
             C54 50, 56 46, 56 42 
             C57 48, 59 55, 61 59 
             C63 52, 65 48, 65 44
             C66 50, 68 56, 70 60
             C74 54, 76 52, 77 48
             C78 54, 80 62, 85 64
             C90 66, 96 68, 98 71
             C94 72, 90 73, 86 75
             C76 80, 71 85, 63 87
             C52 89, 44 82, 40 76 Z"
          fill="#ffffff"
        />
        <path
          d="M85 64 C88 65, 93 66, 95 67 C91 69, 84 71, 80 72 Z"
          fill="#ffffff"
        />

        {/* Laurel Wreath left branch */}
        <path
          d="M25 61 C23 72, 27 84, 38 92 C43 95, 48 97, 56 98"
          stroke="#1b2a59"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Leaves left side */}
        <path d="M22 55 C22 55, 17 59, 19 64 Z" fill="#1b2a59" />
        <path d="M22 66 C22 66, 17 71, 20 76 Z" fill="#1b2a59" />
        <path d="M25 76 C25 76, 21 82, 26 86 Z" fill="#1b2a59" />
        <path d="M31 85 C31 85, 28 92, 34 94 Z" fill="#1b2a59" />
        <path d="M41 91 C41 91, 39 98, 46 98 Z" fill="#1b2a59" />

        {/* Laurel Wreath right branch */}
        <path
          d="M95 61 C97 72, 93 84, 82 92 C77 95, 72 97, 64 98"
          stroke="#1b2a59"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Leaves right side */}
        <path d="M98 55 C98 55, 103 59, 101 64 Z" fill="#1b2a59" />
        <path d="M98 66 C98 66, 103 71, 100 76 Z" fill="#1b2a59" />
        <path d="M95 76 C95 76, 99 82, 94 86 Z" fill="#1b2a59" />
        <path d="M89 85 C89 85, 92 92, 86 94 Z" fill="#1b2a59" />
        <path d="M79 91 C79 91, 81 98, 74 98 Z" fill="#1b2a59" />

        {/* Small star separator at base */}
        <polygon
          points="60,94 62,98 66,98 63,100 64,104 60,102 56,104 57,100 54,98 58,98"
          fill="#1b2a59"
        />
      </svg>
    </div>
  );

  // Text values
  const textPrimaryColor = invert ? 'text-white' : 'text-[#4392b4]';
  const textSecondaryColor = invert ? 'text-slate-300' : 'text-[#16204c]';

  const renderText = () => (
    <div className={`text-left select-none ${layout === 'vertical' ? 'text-center mt-3' : 'ml-3'}`} id="dignify-logo-text-group">
      <h1
        className={`font-black uppercase tracking-wider font-display leading-[0.95] ${currentSize.textTitle} ${textPrimaryColor}`}
      >
        Dignify
      </h1>
      <p
        className={`font-semibold tracking-[0.25em] uppercase font-sans mt-0.5 whitespace-nowrap leading-none ${currentSize.textSub} ${textSecondaryColor}`}
      >
        Funeral Solutions
      </p>
    </div>
  );

  if (layout === 'vertical') {
    return (
      <div className="flex flex-col items-center justify-center text-center" id="dignify-logo-vertical-container">
        {renderEmblem()}
        {renderText()}
      </div>
    );
  }

  return (
    <div className="flex items-center inline-flex" id="dignify-logo-horizontal-container">
      {renderEmblem()}
      {renderText()}
    </div>
  );
}
