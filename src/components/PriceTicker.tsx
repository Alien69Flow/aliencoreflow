
import React, { useEffect } from 'react';

const PriceTicker = () => {
  useEffect(() => {
    // Remove any existing script to avoid duplicates
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
    document.body.appendChild(script);
    
    return () => {
      // Cleanup on unmount
      const script = document.getElementById('coinmarketcap-widget-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div id="coinmarketcap-widget-marquee" 
           data-coins="1,5176,1027,1839,5426,3794" 
           data-currency="USD" 
           data-theme="light" 
           data-transparent="true" 
           data-show-symbol-logo="true">
      </div>
    </div>
  );
};

export default PriceTicker;
