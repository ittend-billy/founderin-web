import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-founderin-dark text-white hover:bg-black/90 border border-transparent',
      secondary: 'bg-founderin-navy text-white hover:bg-founderin-navy/90 border border-transparent',
      outline: 'bg-transparent border border-founderin-dark text-founderin-dark hover:bg-founderin-gray',
      ghost: 'bg-transparent text-founderin-dark hover:bg-founderin-gray border border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-6 py-3 text-lg md:px-[2.42rem] md:py-[1.21rem] md:text-[1.32rem]',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-founderin-dark focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
