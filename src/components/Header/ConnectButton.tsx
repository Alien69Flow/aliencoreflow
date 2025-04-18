
import React from 'react';
import { Button } from '@/components/ui/button';

const ConnectButton = () => {
  return (
    <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-[Atomic Age] rounded-full flex items-center gap-2">
      <img 
        src="/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png" 
        alt="Wallet" 
        className="h-6 w-6 rounded-full" 
      />
      Connect Portal
    </Button>
  );
};

export default ConnectButton;
