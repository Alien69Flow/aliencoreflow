
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
    
    // Create a cleanup function
    const cleanup = () => {
      // Remove the script element to prevent duplicates
      script.remove();
      
      // Clear any existing contents from the container
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
    
    // Initialize widget after script loads
    script.onload = () => {
      if (containerRef.current) {
        // Reset the container to ensure proper initialization
        containerRef.current.innerHTML = '';
        
        // Create the widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'coinmarketcap-widget-marquee';
        widgetContainer.classList.add('coinmarketcap-currency-widget');
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
              
              // Fallback: Create a simple ticker with static data
              if (containerRef.current) {
                containerRef.current.innerHTML = `
                  <div class="flex items-center justify-start gap-6 overflow-x-auto py-2 px-4 text-white">
                    <div class="flex items-center gap-2">
                      <span class="font-bold">BTC:</span>
                      <span class="text-alien-green">$64,750.21</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold">ETH:</span>
                      <span class="text-alien-green">$3,145.89</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold">BNB:</span>
                      <span class="text-alien-green">$596.24</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold">SOL:</span>
                      <span class="text-alien-green">$152.36</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold">MATIC:</span>
                      <span class="text-alien-green">$0.58</span>
                    </div>
                  </div>
                `;
              }
            }
          } catch (error) {
            console.error('Error initializing CoinMarketCap widget:', error);
          }
        }, 1000);
      }
    };
    
    // Add the script to the document body
    document.body.appendChild(script);
    
    // Cleanup on component unmount
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        ref={containerRef}
        className="w-full h-[40px]"
      ></div>
    </div>
  );
};

export default PriceTicker;
