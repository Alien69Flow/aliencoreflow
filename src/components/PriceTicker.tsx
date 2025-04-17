
import React, { useEffect } from 'react';

const PriceTicker = () => {
  useEffect(() => {
    // Eliminar cualquier script existente para evitar duplicados
    const existingScript = document.getElementById('coinmarketcap-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Crear un nuevo script
    const script = document.createElement('script');
    script.id = 'coinmarketcap-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    
    // Añadir el script al documento
    document.body.appendChild(script);
    
    return () => {
      // Limpiar el script cuando el componente se desmonta
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      {/* 
        For CoinMarketCap widget, we need to use the exact attribute names they expect.
        We'll use dangerouslySetInnerHTML to create the div with the required attributes
        since TypeScript doesn't allow non-standard HTML attributes.
      */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<div 
            id="coinmarketcap-widget-marquee" 
            coins="1,5176,1027,1839,5426,3794" 
            currency="USD" 
            theme="dark" 
            transparent="true" 
            show-symbol-logo="true">
          </div>`
        }}
      />
    </div>
  );
};

export default PriceTicker;
