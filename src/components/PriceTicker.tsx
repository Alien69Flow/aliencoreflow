
import React, { useEffect, useRef } from 'react';

interface CoinMarketCapWidget {
  widget: any;
}

declare global {
  interface Window {
    CoinMarketCapWidget?: CoinMarketCapWidget;
  }
}

const PriceTicker = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Remove existing script to avoid duplicates
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
    
    // Apply the attributes to the widget div using dataset
    if (widgetRef.current) {
      widgetRef.current.dataset.coins = "1,5176,1027,1839,5426,3794";
      widgetRef.current.dataset.currency = "USD";
      widgetRef.current.dataset.theme = "light";
      widgetRef.current.dataset.transparent = "true";
      widgetRef.current.dataset.showSymbolLogo = "true";
    }
    
    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.getElementById('coinmarketcap-widget-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        ref={widgetRef}
        id="coinmarketcap-widget-marquee" 
      >
      </div>
    </div>
  );
};

export default PriceTicker;
