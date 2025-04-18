
import React, { useEffect } from 'react';

const PriceTicker = () => {
  useEffect(() => {
    // Remove existing script and widget
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create new script
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    
    // Create widget container with attributes
    const widgetContainer = document.getElementById('coinmarketcap-widget-marquee');
    if (widgetContainer) {
      widgetContainer.setAttribute('data-coins', '1,5176,1027,1839,5426,3794');
      widgetContainer.setAttribute('data-currency', 'USD');
      widgetContainer.setAttribute('data-theme', 'light');
      widgetContainer.setAttribute('data-transparent', 'true');
      widgetContainer.setAttribute('data-show-symbol-logo', 'true');
    }
    
    // Append script after setting attributes
    document.body.appendChild(script);
    
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div id="coinmarketcap-widget-marquee"></div>
    </div>
  );
};

export default PriceTicker;
