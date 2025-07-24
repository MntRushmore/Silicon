import { useState, useEffect } from 'react';
import { CircuitPattern } from '@/components/CircuitPattern';
import { GlowingButton } from '@/components/GlowingButton';
import { TerminalText } from '@/components/TerminalText';
import { Gallery } from '@/components/Gallery';
import { Requirements } from '@/components/Requirements';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Circuit Pattern Background */}
      <CircuitPattern />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-green-800/30">
          <div className="flex items-center space-x-4">
            <img 
              src="/logos/logo.png" 
              alt="Silicon Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-mono font-bold text-green-300">SILICON</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-300 transition-colors font-mono">ABOUT</a>
            <a href="#gallery" className="hover:text-green-300 transition-colors font-mono">GALLERY</a>
            <a href="/guide" className="hover:text-green-300 transition-colors font-mono">GUIDE</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="text-sm font-mono text-green-300 tracking-widest">
                  TLDR: Design your own custom devboard and we'll fund it. 
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
                  SILICON
                </h1>
                <div className="text-2xl md:text-3xl text-green-300 font-mono">
                  <TerminalText text="You Build It. We Back It!" />
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300 max-w-2xl mx-auto px-4">
              <p className="text-lg leading-relaxed">
                Design your own custom devboard and we'll fund it.<br />
                This is for <strong>18 and under only</strong> <br />
                Got questions? Contact <span className="text-white font-semibold">@Aarav J or @Rudy</span> on Slack.<br />
               
              </p>


                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="font-mono">STATUS: Started!</span>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowingButton 
                  text="SUBMIT YOUR DESIGN" 
                  primary={true}
                  onClick={() => window.open('https://forms.hackclub.com/silicon', '_blank')}
                />
                <GlowingButton 
                  text="VIEW GALLERY" 
                  primary={false}
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                />
                <GlowingButton 
                  text="VIEW GUIDE" 
                  primary={false}
                  onClick={() => window.location.href = '/guide'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Requirements Section */}
        <Requirements />

        {/* Stats Section */}
        <section className="py-16 border-t border-green-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'GRANTS AWARDED', value: '$0', icon: '💰' },
                { label: 'DEVBOARDS FUNDED', value: '2', icon: '🔧' },
                { label: 'ACTIVE HACKERS', value: '35', icon: '👥' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 border border-green-800/30 rounded-lg bg-black/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-green-400 font-mono">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-mono tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-800/30 py-8 text-center text-gray-400">
          <p className="font-mono">Silicon YSWS by Aarav J & Rudy! - #silicon on slack - Website by Aarav J</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
