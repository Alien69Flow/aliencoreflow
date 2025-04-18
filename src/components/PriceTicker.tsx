
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    coinmarketcap?: {
      widget?: () => void;
    }
  }
}

const PriceTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing widget and script
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the script
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    if (document.body) {
      document.body.appendChild(script);
      
      // Initialize widget after script loads
      script.onload = () => {
        if (window.coinmarketcap?.widget) {
          window.coinmarketcap.widget();
        }
      };
    }
    
    return () => {
      const script = document.getElementById('coinmarketcap-widget-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        id="coinmarketcap-widget-marquee" 
        ref={containerRef}
        data-coins="1,5176,1027,1839,5426,3794" 
        data-currency="USD" 
        data-theme="dark" 
        data-transparent="true" 
        data-show-symbol-logo="true"
      ></div>
    </div>
  );
};

export default PriceTicker;
