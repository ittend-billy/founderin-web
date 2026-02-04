import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Quote } from 'lucide-react';

export const BehindTheScenes: React.FC = () => {
  return (
    <SectionWrapper variant="default" className="py-24 md:py-32 bg-founderin-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-founderin-purple rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-founderin-mint rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[2.2rem] md:text-[3.16rem] font-acumin-black text-white mb-16 leading-tight">
          How FounderIn Happened
        </h2>

        <div className="space-y-16">
          {/* The Story - More visual weight */}
          <div className="space-y-10">
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              We met at a hackathon in Tokyo and ended up building on the same team.
            </p>

            <div className="space-y-6">
              <p className="text-lg font-bold text-founderin-purple tracking-wide uppercase">
                Long story short: we won.
              </p>
              
              <div className="relative inline-block max-w-3xl mx-auto">
                {/* <Quote className="absolute -top-6 -left-8 w-10 h-10 text-white/10 hidden md:block" /> */}
                <h3 className="text-2xl md:text-4xl font-acumin-black text-white leading-tight">
                  "It turned out we think and operate differently — but build exceptionally well together."
                </h3>
                {/* <Quote className="absolute -bottom-6 -right-8 w-10 h-10 text-white/10 rotate-180 hidden md:block" /> */}
              </div>
            </div>

            <div className="text-lg md:text-xl text-white/60 space-y-1">
              <p>So we stuck.</p>
              <p>The rest is history.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 opacity-30">
            <div className="h-px w-12 bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="h-px w-12 bg-white"></div>
          </div>

          {/* The Mission - Secondary information */}
          <div className="max-w-2xl mx-auto space-y-6 text-base md:text-lg text-white/70 leading-relaxed font-light">
            <p>
              By combining our expertise, we built <strong className="text-white font-bold">FOUNDERIN</strong> to help founders and builders in Japan turn products into companies the world can understand, trust, and back.
            </p>
            <p>
              We work privately with a small number of founders, shaping direction and building founder-to-market systems that don’t collapse without them.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
