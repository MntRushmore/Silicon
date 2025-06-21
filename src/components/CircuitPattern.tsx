
export const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Main circuit lines */}
            <path d="M0,20 L100,20" stroke="#10b981" strokeWidth="1" fill="none" />
            <path d="M0,80 L100,80" stroke="#10b981" strokeWidth="1" fill="none" />
            <path d="M20,0 L20,100" stroke="#10b981" strokeWidth="1" fill="none" />
            <path d="M80,0 L80,100" stroke="#10b981" strokeWidth="1" fill="none" />
            
            {/* Connection points */}
            <circle cx="20" cy="20" r="2" fill="#10b981" />
            <circle cx="80" cy="20" r="2" fill="#10b981" />
            <circle cx="20" cy="80" r="2" fill="#10b981" />
            <circle cx="80" cy="80" r="2" fill="#10b981" />
            
            {/* Resistor symbols */}
            <rect x="15" y="18" width="10" height="4" fill="none" stroke="#10b981" strokeWidth="0.5" />
            <rect x="75" y="78" width="10" height="4" fill="none" stroke="#10b981" strokeWidth="0.5" />
            
            {/* Capacitor symbols */}
            <line x1="18" y1="78" x2="18" y2="82" stroke="#10b981" strokeWidth="1" />
            <line x1="22" y1="78" x2="22" y2="82" stroke="#10b981" strokeWidth="1" />
            <line x1="78" y1="18" x2="78" y2="22" stroke="#10b981" strokeWidth="1" />
            <line x1="82" y1="18" x2="82" y2="22" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};
