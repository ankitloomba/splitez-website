export function Logo({ 
  reversed = false, 
  size = 32,
  className = "" 
}: { 
  reversed?: boolean;
  size?: number;
  className?: string;
}) {
  // RULE: "Light indigo always left, deep indigo always right."
  const leftColor = "#818CF8"; 
  const rightColor = "#4338CA"; 
  
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
        <mask id="gap-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
          <rect width="40" height="40" fill="white" />
          {/* Increased the angle of the split to match the brand guidelines more accurately */}
          <line x1="12" y1="-5" x2="28" y2="45" stroke="black" strokeWidth="3.5" />
        </mask>
        <g mask="url(#gap-mask)">
          <path d="M0 20C0 8.9543 8.9543 0 20 0V40C8.9543 40 0 31.0457 0 20Z" fill={leftColor} />
          <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40V0Z" fill={rightColor} />
        </g>
      </svg>
      <span className={`${textSizeClass} font-extrabold tracking-tight`} style={{ color: splitColor }}>
        Split<span style={{ color: ezColor }}>EZ</span>
      </span>
    </div>
  );
}
