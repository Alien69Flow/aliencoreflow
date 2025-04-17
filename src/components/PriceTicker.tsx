
import React, { useEffect } from 'react';

interface CoinMarketCapWidget {
  widget: any;
}

declare global {
  interface Window {
    CoinMarketCapWidget?: CoinMarketCapWidget;
  }
}

const PriceTicker = () => {
  useEffect(() => {
    // Remove existing widget container if it exists
    const existingWidget = document.getElementById('coinmarketcap-widget-marquee');
    if (existingWidget) {
      while (existingWidget.firstChild) {
        existingWidget.removeChild(existingWidget.firstChild);
      }
    }
    
    // Remove any existing script to avoid duplicates
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the script exactly as CoinMarketCap provides it
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    document.body.appendChild(script);
    
    // Force widget reinitialization
    const checkInterval = setInterval(() => {
      if (window.CoinMarketCapWidget) {
        clearInterval(checkInterval);
        console.log('CoinMarketCap widget loaded successfully');
      }
    }, 300);
    
    return () => {
      // Cleanup on unmount
      clearInterval(checkInterval);
      const scriptToRemove = document.getElementById('coinmarketcap-widget-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
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
        show-symbol-logo="true">
      </div>
    </div>
  );
};

export default PriceTicker;
