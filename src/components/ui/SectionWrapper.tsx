import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'default' | 'dark' | 'gray' | 'navy';
  containerClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  variant = 'default',
  className,
  containerClassName,
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-founderin-white text-founderin-dark',
    dark: 'bg-hero-gradient-mobile md:bg-hero-gradient text-founderin-dark', // Changed to Gradient as requested
    gray: 'bg-founderin-mint text-founderin-dark', // Changed to Mint as requested
    navy: 'bg-founderin-purple text-white', // Consolidated to Purple for consistency
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        variants[variant],
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};
