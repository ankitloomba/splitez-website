import Image from 'next/image';

export function Logo({ 
  reversed = false, 
  size = 32,
  className = "" 
}: { 
  reversed?: boolean;
  size?: number;
  className?: string;
}) {
  // We assume the user will place 'logo-reversed.png' and 'logo-primary.png' in the public folder.
  // Alternatively, just 'logo.png' if they only have one.
  const logoSrc = reversed ? "/logo-reversed.png" : "/logo.png";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src={logoSrc} 
        alt="SplitEZ Logo" 
        width={size * 4} // adjust aspect ratio depending on the actual image width
        height={size} 
        className="object-contain"
      />
    </div>
  );
}
