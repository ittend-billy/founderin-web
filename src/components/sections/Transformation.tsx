import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ArrowRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  return (
    <SectionWrapper variant="gray" className="py-16 md:py-24 bg-founderin-mint">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[1.9rem] md:text-[3.16rem] font-acumin-black text-center text-founderin-dark mb-16 leading-tight">The Transformation</h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 md:gap-8 items-center">
          
          {/* Before */}
          <div className="bg-white p-8 rounded-2xl border border-founderin-purple/10 h-full flex flex-col justify-center shadow-sm">
            <h3 className="text-[1.58rem] font-acumin-black text-founderin-dark/50 mb-6 uppercase tracking-widest text-center">Before</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-founderin-dark/70 font-semibold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/30" />
                <span>Brilliant but invisible</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark/70 font-semibold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/30" />
                <span>"Just another startup"</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark/70 font-semibold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/30" />
                <span>Pitching features & specs</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark/70 font-semibold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/30" />
                <span>Chasing investors</span>
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex justify-center transform rotate-90 md:rotate-0">
            <ArrowRight className="w-8 h-8 text-founderin-purple" />
          </div>

          {/* After */}
          <div className="bg-founderin-purple p-8 rounded-2xl border border-founderin-purple h-full flex flex-col justify-center shadow-xl">
            <h3 className="text-[1.58rem] font-acumin-black text-founderin-dark mb-6 uppercase tracking-widest text-center">After</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-founderin-dark font-bold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark" />
                <span>Understood & trusted</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark font-bold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark" />
                <span>Category leader</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark font-bold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark" />
                <span>Pitching value</span>
              </li>
              <li className="flex items-center gap-3 text-founderin-dark font-bold text-[1.265rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark" />
                <span>Attracting capital</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};
