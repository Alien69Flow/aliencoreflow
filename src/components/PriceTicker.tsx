
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Landmark, TrendingUp } from 'lucide-react';

// Mock data for the ticker (in a real app, this would come from an API)
const initialPrices = [
  { id: 'bitcoin', name: 'Bitcoin', price: 62458.32, change: 2.34, icon: <Bitcoin className="h-4 w-4 text-alien-gold" /> },
  { id: 'ethereum', name: 'Ethereum', price: 3245.67, change: 1.23, icon: <TrendingUp className="h-4 w-4 text-alien-green" /> },
  { id: 'gold', name: 'Gold', price: 2354.89, change: 0.45, icon: <Landmark className="h-4 w-4 text-alien-gold" /> },
  { id: 'silver', name: 'Silver', price: 28.76, change: -0.32, icon: <Landmark className="h-4 w-4 text-alien-gold" /> },
  { id: 'abtc', name: 'ABTC', price: 324.56, change: 5.67, icon: <Bitcoin className="h-4 w-4 text-alien-green" /> },
];

const PriceTicker = () => {
  const [prices, setPrices] = useState(initialPrices);
  
  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(asset => ({
          ...asset,
          price: +(asset.price + (Math.random() * 2 - 1) * 0.5).toFixed(2),
          change: +(asset.change + (Math.random() * 0.4 - 0.2)).toFixed(2)
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-alien-space-dark/80 backdrop-blur-sm border-t border-b border-alien-gold/20">
      <div className="container mx-auto">
        <div className="flex items-center py-1 overflow-hidden">
          <motion.div
            className="flex items-center space-x-8 whitespace-nowrap"
            animate={{ x: [0, -1500] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear"
            }}
          >
            {[...prices, ...prices].map((asset, index) => (
              <div key={`${asset.id}-${index}`} className="flex items-center space-x-2">
                {asset.icon}
                <span className="text-alien-gold font-medium text-sm">{asset.name}</span>
                <span className="text-white font-medium text-sm">${asset.price.toLocaleString()}</span>
                <span className={`text-xs font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
