
import React from 'react';
import { Button } from '@/components/ui/button';

const ConnectButton = () => {
  return (
    <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-atomic-force rounded-full flex items-center gap-2 py-1 px-3 sm:px-4">
      <img 
        src="/lovable-uploads/AW.png" 
        alt="Wallet" 
        className="h-5 w-5 sm:h-6 sm:w-6 rounded-full" 
      />
      <span className="font-atomic-force">Connect Portal</span>
    </Button>
  );
};

export default ConnectButton;
