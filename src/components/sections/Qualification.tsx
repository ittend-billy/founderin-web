import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CheckCircle2, X } from 'lucide-react';

export const Qualification: React.FC = () => {
  return (
    <SectionWrapper variant="default" className="py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        
        {/* Who it's for */}
        <div className="space-y-8">
          <h3 className="text-[1.9rem] font-acumin-black text-founderin-dark flex items-center gap-3">
            <CheckCircle2 className="text-founderin-purple" />
            Who this is for
          </h3>
          <ul className="space-y-4 pt-4">
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-purple mt-2.5 flex-shrink-0" />
              <span>Serious builders with a real product or deep prototype and no exposure.</span>
            </li>
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-purple mt-2.5 flex-shrink-0" />
              <span>Tech founders who struggle to communicate why their product matters.</span>
            </li>
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-purple mt-2.5 flex-shrink-0" />
              <span>Startups aiming for global relevance, not just domestic survival.</span>
            </li>
          </ul>
        </div>

        {/* Who it's not for */}
        <div className="space-y-8 opacity-100">
          <h3 className="text-[1.9rem] font-acumin-black text-founderin-dark flex items-center gap-3">
            <X className="text-founderin-dark" />
            Who this is NOT for
          </h3>
          <ul className="space-y-4 pt-4">
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/20 mt-2.5 flex-shrink-0" />
              <span>People looking for marketing hacks or viral tricks.</span>
            </li>
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/20 mt-2.5 flex-shrink-0" />
              <span>Founders who want to outsource talking to users.</span>
            </li>
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/20 mt-2.5 flex-shrink-0" />
              <span>Pre-product dreamers with just an idea and no execution.</span>
            </li>
            <li className="flex gap-3 text-founderin-dark/80 font-bold text-[1.265rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-founderin-dark/20 mt-2.5 flex-shrink-0" />
              <span>Anyone seeking vanity metrics over real business value.</span>
            </li>
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
};
