
import React, { useEffect } from 'react';

const PriceTicker = () => {
  useEffect(() => {
    // Create script element for CoinMarketCap widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);
    
    return () => {
      // Clean up script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        id="coinmarketcap-widget-marquee" 
        coins="1,5176,1027,1839,5426,3794" 
        currency="USD" 
        theme="dark" 
        transparent="true" 
        show-symbol-logo="true"
      ></div>
    </div>
  );
};

export default PriceTicker;
