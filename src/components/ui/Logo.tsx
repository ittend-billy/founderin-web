import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'mint';
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo-color-04.jpg" 
        alt="Founderin Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
