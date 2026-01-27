import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['understand', 'see', 'back', 'trust'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper variant="dark" className="pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-2xl">
          {/* Left Column: Text Content */}
          <div className="space-y-9 md:space-y-10 text-left">
            <div className="space-y-3.5 md:space-y-4">
              <p className="text-founderin-dark font-acumin-black tracking-tight uppercase text-[1.23rem] md:text-[1.375rem] leading-[1.1]">FOUNDER-TO-MARKET STUDIO</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-acumin-black tracking-tight leading-[1.1] text-founderin-dark relative z-10">
                We turn great products in Japan into companies the world can <br className="md:hidden" /><span className="text-founderin-purple md:text-founderin-mint transition-all duration-500 ease-in-out inline-block min-w-[3ch]">{words[wordIndex]}</span>
              </h1>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-founderin-dark/80 max-w-2xl font-acumin-extra-light leading-relaxed">
              <p className="text-founderin-dark md:text-founderin-dark/80 text-[1.32rem] md:text-[1.8rem] font-semibold md:font-bold italic tracking-tight md:whitespace-nowrap relative z-10">
                <span className="md:hidden">Private founding work for builders & founders going global</span>
                <span className="hidden md:inline font-bold">Private founding work for builders and founders going global</span>
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button 
                size="lg" 
                onClick={() => navigate('/founder-pitch-shoot')}
                className="group bg-founderin-dark hover:bg-founderin-dark/90 text-white font-acumin-black tracking-wide"
              >
                Shoot My Founder Pitch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background subtle effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60 md:opacity-30">
        <div className="absolute top-1/4 left-[70%] md:left-1/4 w-64 h-64 bg-founderin-mint rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 md:right-1/4 w-96 h-96 bg-white rounded-full filter blur-[120px]" />
      </div>
    </SectionWrapper>
  );
};
