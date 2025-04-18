
import React, { useEffect } from 'react';

const PriceTicker = () => {
  useEffect(() => {
    // Clean up any existing widgets and scripts first
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create widget container with proper attributes
    const widgetContainer = document.getElementById('coinmarketcap-widget-marquee');
    if (widgetContainer) {
      // Set attributes directly on the DOM element for better compatibility
      widgetContainer.setAttribute('coins', '1,5176,1027,1839,5426,3794');
      widgetContainer.setAttribute('currency', 'USD');
      widgetContainer.setAttribute('theme', 'light');
      widgetContainer.setAttribute('transparent', 'true');
      widgetContainer.setAttribute('show-symbol-logo', 'true');
    }
    
    // Create and append the script after setting attributes
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      // Clean up on unmount
      if (document.getElementById('coinmarketcap-widget-script')) {
        document.getElementById('coinmarketcap-widget-script')?.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        id="coinmarketcap-widget-marquee" 
        coins="1,5176,1027,1839,5426,3794" 
        currency="USD" 
        theme="light" 
        transparent="true" 
        show-symbol-logo="true"
      ></div>
    </div>
  );
};

export default PriceTicker;
