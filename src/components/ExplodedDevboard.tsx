
import { useState, useEffect } from 'react';

export const ExplodedDevboard = () => {
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExploded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const layers = [
    { 
      name: 'MCU', 
      color: 'bg-blue-500', 
      size: 'w-16 h-16', 
      position: 'top-8 left-8',
      explodedPosition: 'top-0 left-0'
    },
    { 
      name: 'PCB', 
      color: 'bg-green-600', 
      size: 'w-32 h-24', 
      position: 'top-12 left-4',
      explodedPosition: 'top-16 left-4'
    },
    { 
      name: 'Components', 
      color: 'bg-yellow-500', 
      size: 'w-4 h-4', 
      position: 'top-16 left-12',
      explodedPosition: 'top-32 left-12'
    },
    { 
      name: 'Connectors', 
      color: 'bg-purple-500', 
      size: 'w-8 h-6', 
      position: 'top-20 left-16',
      explodedPosition: 'top-40 left-16'
    }
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      
      {/* Devboard Container */}
      <div className="relative w-80 h-64 perspective-1000">
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`absolute ${layer.size} ${layer.color} rounded-lg shadow-lg transition-all duration-1000 ease-out cursor-pointer hover:scale-110 ${
              isExploded ? layer.explodedPosition : layer.position
            }`}
            style={{
              transform: isExploded 
                ? `translateZ(${(index + 1) * 30}px) rotateX(${index * 5}deg) rotateY(${index * 3}deg)`
                : 'translateZ(0px)',
              boxShadow: `0 0 20px ${layer.color.includes('blue') ? '#3b82f6' : 
                                     layer.color.includes('green') ? '#10b981' :
                                     layer.color.includes('yellow') ? '#f59e0b' : '#8b5cf6'}40`
            }}
            onClick={() => setIsExploded(!isExploded)}
          >
            {/* Circuit Traces */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path 
                  d="M10,10 L90,10 L90,90 L10,90 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                  className="text-white/30"
                />
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white/50" />
                <circle cx="80" cy="20" r="2" fill="currentColor" className="text-white/50" />
                <circle cx="20" cy="80" r="2" fill="currentColor" className="text-white/50" />
                <circle cx="80" cy="80" r="2" fill="currentColor" className="text-white/50" />
              </svg>
            </div>
            
            {/* Layer Label */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-400 whitespace-nowrap">
              {layer.name}
            </div>
          </div>
        ))}
        
        {/* Connecting Lines */}
        {isExploded && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {layers.map((_, index) => (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={`${50 + index * 10}%`}
                y2={`${50 + index * 15}%`}
                stroke="#10b981"
                strokeWidth="1"
                strokeDasharray="2,2"
                className="animate-pulse"
              />
            ))}
          </svg>
        )}
      </div>
      
      {/* Interaction Hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm font-mono text-gray-500 animate-pulse">
          CLICK TO {isExploded ? 'ASSEMBLE' : 'EXPLODE'}
        </p>
      </div>
    </div>
  );
};
