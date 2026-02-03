import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const partners = [
  { name: 'Fujitsu', src: '/logos/01-fujitsu.png', alt: 'Fujitsu' },
  { name: 'UIS', src: '/logos/02-uis.webp', alt: 'UIS' },
  { name: 'Antler', src: '/logos/03-antler.png', alt: 'Antler' },
  { name: 'Founder Institute', src: '/logos/04-founder_institute.png', alt: 'Founder Institute' },
  { name: 'iU', src: '/logos/05-iU.png', alt: 'iU' },
];

export const Partners: React.FC = () => {
  return (
    <SectionWrapper className="py-12 md:py-16 bg-white border-b border-founderin-dark/5">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm font-bold text-founderin-dark/40 uppercase tracking-widest mb-8 md:mb-12">
          Our Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center w-32 md:w-40 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
