import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper variant="dark" className="py-20 md:py-32 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <h2 className="text-[1.98rem] md:text-[3.16rem] font-acumin-black text-founderin-dark leading-tight">Ready for the world <span className="text-founderin-mint">to get<br />what you’re building?</span></h2>
        
        <p className="text-[1.03rem] md:text-[1.42rem] text-founderin-dark max-w-2xl mx-auto font-semibold px-8 md:px-0 relative z-10">
          We only work with a few founders <br className="md:hidden" />at a time so this can be done properly. <br className="md:hidden" />If you’re ready, let’s get to work.
        </p>

        <div className="pt-8">
          <Button 
            size="lg" 
            onClick={() => navigate('/founder-pitch-shoot')}
            className="group bg-founderin-dark text-white hover:bg-founderin-dark/90 font-acumin-black tracking-wide"
          >
            Shoot My Founder Pitch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>



      </div>
    </SectionWrapper>
  );
};
