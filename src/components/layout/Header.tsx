import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <img
          src="/logo-f.png"
          alt="Founderin"
          className="h-16 md:h-[6.96rem] w-auto"
        />
      </div>
      <div className="pointer-events-auto">
      </div>
    </header>
  );
};
