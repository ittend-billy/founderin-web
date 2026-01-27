import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Reframe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper variant="dark" className="py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-[1.75rem] md:text-[3.16rem] font-acumin-black text-founderin-dark leading-tight tracking-tight">
            This isn't a <span className="text-founderin-mint">marketing problem</span><br />
            It's a <span className="text-founderin-mint">Founder-to-Market Gap</span>
          </h2>
        </div>

        <div className="bg-white/20 rounded-2xl p-6 md:p-12 border border-founderin-dark/10 backdrop-blur-sm mb-6">
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
            <div className="hidden md:block absolute top-[2.5rem] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-founderin-dark/40 to-transparent -translate-y-1/2 z-0"></div>
            
            {/* Founder Side */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-founderin-dark/10 flex items-center justify-center border border-founderin-dark/20">
                <span className="text-3xl md:text-4xl">🧠</span>
              </div>
              <div className="text-center">
                <h3 className="text-founderin-dark font-medium font-acumin-black text-[1.26rem] md:text-[1.58rem]">The Founder</h3>
                <p className="text-[1.0rem] md:text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">Product, Vision, Code</p>
              </div>
            </div>

            {/* The Gap */}
            <div className="relative z-10 w-full md:w-auto flex flex-col items-center space-y-4 px-8">
              
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-founderin-mint flex items-center justify-center border-4 border-white shadow-xl">
                <img src="/logo-f.png" alt="Founderin" className="h-8 w-auto md:h-10" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-founderin-dark font-medium font-acumin-black text-[1.26rem] md:text-[1.58rem]">The Gap</h3>
                <p className="text-[1.0rem] md:text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">Story, Category, Exposure</p>
              </div>
              

            </div>

            {/* Market Side */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-founderin-dark/10 flex items-center justify-center border border-founderin-dark/20">
                <span className="text-3xl md:text-4xl">🌍</span>
              </div>
              <div className="text-center">
                <h3 className="text-founderin-dark font-medium font-acumin-black text-[1.26rem] md:text-[1.58rem]">The World</h3>
                <p className="text-[1.0rem] md:text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">Investors, Users, Talent</p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-founderin-dark text-[1.34rem] md:text-[1.58rem] font-bold md:font-bold italic font-acumin-extra-light max-w-2xl mx-auto leading-relaxed py-5 mb-5 relative z-10">
          It’s the gap between <span className="text-founderin-mint md:text-founderin-dark font-bold">what you’ve built</span><br />and <span className="text-founderin-mint md:text-founderin-dark font-bold">what the world sees</span>
        </p>
        
        <div>
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
    </SectionWrapper>
  );
};
