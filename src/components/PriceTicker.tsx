
import React, { useEffect, useRef } from 'react';

const PriceTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Eliminar cualquier script existente de widgets anteriores
    const existingScript = document.getElementById('coingecko-widget-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Crear y añadir el script de CoinGecko
    const script = document.createElement('script');
    script.id = 'coingecko-widget-script';
    script.src = 'https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js';
    script.async = true;
    
    // Función de limpieza
    const cleanup = () => {
      script.remove();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
    
    // Inicializar widget después de que el script cargue
    script.onload = () => {
      if (containerRef.current) {
        // Resetear el contenedor para asegurar una inicialización adecuada
        containerRef.current.innerHTML = '';
        
        // Crear el elemento del widget
        const widgetElement = document.createElement('coingecko-coin-price-marquee-widget');
        widgetElement.setAttribute('locale', 'es');
        widgetElement.setAttribute('coin-ids', 'bitcoin,tether-gold,ethereum,binancecoin,solana,cosmos');
        widgetElement.setAttribute('currency', 'usd');
        widgetElement.setAttribute('background-color', '#0e1014');
        widgetElement.setAttribute('font-color', '#ffffff');
        widgetElement.setAttribute('transparent', 'true');
        widgetElement.setAttribute('height', '40');
        
        containerRef.current.appendChild(widgetElement);
        
        console.log('CoinGecko widget initialized');
      }
    };
    
    script.onerror = () => {
      console.error('Error loading CoinGecko widget script');
      
      // Fallback en caso de error
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
              <span class="font-bold">COSMOS:</span>
              <span class="text-alien-green">$6.82</span>
            </div>
          </div>
        `;
      }
    };
    
    // Añadir el script al documento
    document.body.appendChild(script);
    
    // Limpieza al desmontar el componente
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20 h-[40px]">
      <div 
        ref={containerRef}
        className="w-full h-[40px]"
      >
        {/* El widget de CoinGecko se cargará aquí */}
        <div className="flex items-center justify-start gap-6 overflow-x-auto py-2 px-4 text-white">
          <div className="flex items-center gap-2">
            <span className="font-bold">BTC:</span>
            <span className="text-alien-green">$64,750.21</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">ETH:</span>
            <span className="text-alien-green">$3,145.89</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">BNB:</span>
            <span className="text-alien-green">$596.24</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">SOL:</span>
            <span className="text-alien-green">$152.36</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">COSMOS:</span>
            <span className="text-alien-green">$6.82</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
