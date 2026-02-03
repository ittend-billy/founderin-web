import React from 'react';
import { Logo } from '@/components/ui/Logo';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <Logo variantImage="white" size="header" />
      </div>
      <div className="pointer-events-auto">
      </div>
    </header>
  );
};
