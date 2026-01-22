import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Quote } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <SectionWrapper variant="gray" className="py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 text-founderin-purple font-acumin-black text-[1.29rem] uppercase tracking-wider">
            <span className="w-8 h-px bg-founderin-purple"></span>
            <span>THE SILENT KILLER</span>
          </div>
          
          <h2 className="text-[2.07rem] sm:text-[1.9rem] md:text-[2.84rem] font-acumin-black text-founderin-dark leading-tight tracking-tight whitespace-pre-line">
            Great products rarely fail loudly.
            They disappear quietly.
          </h2>
          
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center absolute left-0 top-0 bottom-0 w-4">
                <div className="w-3 h-3 rounded-full border-2 border-founderin-purple bg-white shrink-0 z-10 mt-1.5" />
                <div className="w-px flex-1 bg-founderin-purple/20" />
              </div>
              <p className="pl-8 pb-8 text-founderin-dark/80 font-medium leading-snug text-[1.265rem]">You spend months perfecting the code, the architecture, the performance. You assume that if the product is good enough, the world will recognize it.</p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center absolute left-0 top-0 bottom-0 w-4">
                <div className="w-3 h-3 rounded-full border-2 border-founderin-purple bg-white shrink-0 z-10 mt-1.5" />
                <div className="w-px flex-1 bg-founderin-purple/20" />
              </div>
              <p className="pl-8 pb-8 text-founderin-dark/80 font-medium leading-snug text-[1.265rem]">
                Then you launch.<br />
                Users don’t feel it.<br />
                The world never sees it.
              </p>
            </div>





            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col items-center absolute left-0 top-0 w-4">
                <div className="w-3 h-3 rounded-full bg-founderin-purple border-2 border-founderin-purple shrink-0 z-10 mt-1.5" />
              </div>
              <p className="pl-8 text-founderin-dark/80 font-medium leading-snug text-[1.265rem]">
                <span className="italic">
                  You’re building in one language.<br />
                  The market speaks another.<br />
                  And the problem isn’t your product.
                </span><br /><br />
                <span className="text-founderin-purple font-bold tracking-tight md:whitespace-nowrap">
                  It's the missing layer between you and the world.<br />
                  That missing layer is what we build.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-founderin-purple/10 relative">
          <Quote className="absolute top-6 left-8 h-8 w-8 text-founderin-purple opacity-20" />
          <blockquote className="space-y-4 relative z-10 pt-4">
            <p className="text-[1.41rem] font-acumin-wide-light-italic text-founderin-dark font-semibold">" Inside the product, everything is clear. Outside, I can’t make anyone see what I see. It feels like the company exists only in my head."</p>
            <footer className="text-[1.265rem] font-acumin-black text-founderin-purple">— Every Technical Founder, eventually.</footer>
          </blockquote>
        </div>

      </div>
    </SectionWrapper>
  );
};
