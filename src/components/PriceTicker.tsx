
import React, { useEffect, useRef } from 'react';

const PriceTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing widget and script
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    const existingWidget = document.getElementById('coinmarketcap-widget-marquee');
    if (existingWidget) {
      existingWidget.innerHTML = '';
    }
    
    // Create and append the script with a small timeout to ensure DOM is ready
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    // Make sure to wait for the DOM to be ready before initializing the widget
    setTimeout(() => {
      if (document.body) {
        document.body.appendChild(script);
        
        // Reinitialize the widget if needed
        if (window.coinmarketcap && typeof window.coinmarketcap.widget === 'function') {
          window.coinmarketcap.widget();
        }
      }
    }, 300);
    
    return () => {
      if (document.getElementById('coinmarketcap-widget-script')) {
        document.getElementById('coinmarketcap-widget-script')?.remove();
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
        data-theme="light" 
        data-transparent="true" 
        data-show-symbol-logo="true"
      ></div>
    </div>
  );
};

export default PriceTicker;
