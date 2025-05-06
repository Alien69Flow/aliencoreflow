
import React from 'react';
import { Button } from '@/components/ui/button';

const ConnectButton = () => {
  return (
    <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-atomic-force rounded-full flex items-center gap-2 px-3 py-2">
      <img 
        src="/lovable-uploads/AW.png" 
        alt="Wallet" 
        className="h-5 w-5 md:h-6 md:w-6 rounded-full" 
      />
      <span className="whitespace-nowrap">Connect Portal</span>
    </Button>
  );
};

export default ConnectButton;
