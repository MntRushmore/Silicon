
interface GlowingButtonProps {
  text: string;
  primary: boolean;
  onClick: () => void;
}

export const GlowingButton = ({ text, primary, onClick }: GlowingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-4 font-mono font-bold text-sm tracking-wide
        border-2 rounded-lg transition-all duration-300
        ${primary 
          ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
          : 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
        }
        hover:shadow-lg hover:scale-105
        ${primary ? 'hover:shadow-green-400/50' : 'hover:shadow-green-400/30'}
        group
      `}
    >
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-lg blur-sm transition-opacity duration-300
        ${primary 
          ? 'bg-green-400/20 group-hover:bg-green-400/30' 
          : 'bg-transparent group-hover:bg-green-400/10'
        }
      `}></div>
      
      {/* Button text */}
      <span className="relative z-10">{text}</span>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300"></div>
    </button>
  );
};
