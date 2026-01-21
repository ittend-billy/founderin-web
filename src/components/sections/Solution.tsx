import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { X, Check } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <SectionWrapper variant="default" className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-[2.2rem] md:text-[3.16rem] font-acumin-black text-founderin-dark">
              Founderin is <span className="underline decoration-founderin-purple underline-offset-4">not</span> a marketing agency.
            </h1>
            <p className="text-[1.41rem] text-founderin-dark/80 font-semibold leading-relaxed">You build the product. We turn it into story, category, and exposure. We don’t promote you—we wire you into the market.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-founderin-purple mt-1.5 flex-shrink-0" />
              <p className="text-founderin-dark/70 font-semibold text-[1.265rem]">We are not a content or branding lab churning out generic posts.</p>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-founderin-purple mt-1.5 flex-shrink-0" />
              <p className="text-founderin-dark/70 font-semibold text-[1.265rem]">We are not a coaching business that gives advice and leaves.</p>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-founderin-purple mt-1.5 flex-shrink-0" />
              <p className="text-founderin-dark/70 font-semibold text-[1.265rem]">We are not a PR firm that chases vanity metrics.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-founderin-purple/20 shadow-sm">
          <h3 className="text-[1.58rem] font-acumin-black text-founderin-purple mb-6">We are a Founder-to-Market Studio</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-founderin-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold font-acumin-black text-founderin-dark text-[1.41rem]">Founder Interface</h4>
                <p className="text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">We design the missing layers that make your product seen, understood, and trusted.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-founderin-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold font-acumin-black text-founderin-dark text-[1.41rem]">Category Design</h4>
                <p className="text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">We clarify who your product saves and why, making you the obvious solution.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-founderin-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold font-acumin-black text-founderin-dark text-[1.41rem]">Zero-to-Market System</h4>
                <p className="text-[1.265rem] text-founderin-dark/70 mt-1 font-semibold">We install an exposure system that runs while you build.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
