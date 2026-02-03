import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'mint';
  variantImage?: 'color' | 'white';
  size?: 'header' | 'small';
  clickable?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, variantImage = 'color', size = 'header', clickable = true }) => {
  const imageSrc = variantImage === 'color' ? '/logo-color-04.jpg' : '/logo-f.png';
  const altText = variantImage === 'color' ? 'Founderin Logo' : 'Founderin';
  const baseClasses = size === 'header' ? 'h-16 md:h-[6.96rem] w-auto' : 'h-8 w-auto md:h-10';

  const imgElement = (
    <img 
      src={imageSrc} 
      alt={altText} 
      className={`${baseClasses} object-contain ${clickable ? 'transition-opacity hover:opacity-80' : ''}`}
    />
  );

  if (clickable) {
    return (
      <Link 
        to="/" 
        className={`flex items-center justify-center ${className}`}
        aria-label="Go to Founderin home page"
      >
        {imgElement}
      </Link>
    );
  }

  return <div className={`flex items-center justify-center ${className}`}>{imgElement}</div>;
};
