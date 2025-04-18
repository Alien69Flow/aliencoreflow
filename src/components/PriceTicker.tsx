
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    coinmarketcap?: {
      widget?: {
        marquee?: (options: any) => void;
      }
    }
  }
}

const PriceTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Remove any existing widget scripts
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the script
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    // Add the script to the document body
    document.body.appendChild(script);
    
    // Initialize widget after script loads
    script.onload = () => {
      if (containerRef.current) {
        // Reset the container to ensure proper initialization
        containerRef.current.innerHTML = '';
        
        // Create the widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'coinmarketcap-widget-marquee';
        widgetContainer.dataset.coins = '1,1027,825,1839,5426,3794,5994';  // BTC, ETH, USDT, BNB, SOL, MATIC, SHIB
        widgetContainer.dataset.currency = 'USD';
        widgetContainer.dataset.theme = 'dark';
        widgetContainer.dataset.transparent = 'true';
        widgetContainer.dataset.showSymbolLogo = 'true';
        widgetContainer.style.width = '100%';
        widgetContainer.style.height = '40px';
        
        containerRef.current.appendChild(widgetContainer);
        
        // Delay initialization slightly to ensure DOM is ready
        setTimeout(() => {
          try {
            if (window.coinmarketcap && window.coinmarketcap.widget && window.coinmarketcap.widget.marquee) {
              window.coinmarketcap.widget.marquee({
                selector: '#coinmarketcap-widget-marquee',
                coins: ['1', '1027', '825', '1839', '5426', '3794', '5994'],
                currency: 'USD',
                theme: 'dark',
                transparent: true,
                showSymbolLogo: true,
              });
              console.log('CoinMarketCap widget initialized successfully');
            } else {
              console.error('CoinMarketCap widget not available after loading script');
            }
          } catch (error) {
            console.error('Error initializing CoinMarketCap widget:', error);
          }
        }, 1000);
      }
    };
    
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        ref={containerRef}
        style={{ width: '100%', height: '40px' }}
      ></div>
    </div>
  );
};

export default PriceTicker;
