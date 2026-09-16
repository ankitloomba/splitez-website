export function Logo({ 
  reversed = false, 
  size = 32,
  className = "" 
}: { 
  reversed?: boolean;
  size?: number;
  className?: string;
}) {
  // Matching the visual from the "REVERSED" box in the brand guidelines
  const leftColor = reversed ? "#FFFFFF" : "#818CF8";
  const rightColor = reversed ? "#818CF8" : "#4338CA";
  
  // Text colors change based on reversed state
  const splitColor = reversed ? "#FFFFFF" : "#10142A";
  const ezColor = reversed ? "#818CF8" : "#4338CA";
  
  const textSizeClass = size < 30 ? "text-lg" : "text-2xl";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* We rotate the ENTIRE circle and gap by 15 degrees. 
            This prevents the semi-circle flat edges from clipping incorrectly! */}
        <g transform="rotate(15 20 20)">
          <mask id="gap-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
            <rect width="40" height="40" fill="white" />
            <line x1="20" y1="-5" x2="20" y2="45" stroke="black" strokeWidth="2.5" />
          </mask>
          
          <g mask="url(#gap-mask)">
            {/* Left half - semi circle */}
            <path d="M0 20C0 8.9543 8.9543 0 20 0V40C8.9543 40 0 31.0457 0 20Z" fill={leftColor} />
            {/* Right half - semi circle */}
            <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40V0Z" fill={rightColor} />
          </g>
        </g>
      </svg>
      <span className={`${textSizeClass} font-extrabold tracking-tight`} style={{ color: splitColor }}>
        Split<span style={{ color: ezColor }}>EZ</span>
      </span>
    </div>
  );
}
