import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Check, Quote } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <SectionWrapper variant="gray" className="py-16 md:py-24">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[2.2rem] md:text-[3.16rem] font-acumin-black text-founderin-dark leading-tight">
          こんにちは From Your Founder-To-Market Team
        </h2>
      </div>
      
      {/* Billy */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-24 max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
           <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg relative group flex-shrink-0 mb-8">
              <img 
                src="/team/billy.jpg" 
                alt="Billy" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
           </div>

           <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-founderin-purple/10 mb-8">
              <h4 className="text-lg font-bold text-founderin-dark mb-4">My core competencies:</h4>
              <ul className="space-y-3">
                {[
                  "B2B SaaS product architecture and design",
                  "AI product development and implementation",
                  "Enterprise-grade technical systems",
                  "Cross-border brand and technology strategy",
                  "Developer community building and operations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-founderin-purple mt-1 flex-shrink-0" />
                    <span className="text-founderin-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative p-6 bg-founderin-purple/5 rounded-xl border-l-4 border-founderin-purple w-full">
              <Quote className="w-8 h-8 text-founderin-purple/20 absolute top-4 right-4" />
              <p className="italic font-medium text-founderin-dark/90 relative z-10 leading-relaxed">
                "I’m deeply passionate about the intersection of AI, systems thinking, and human creativity — and about helping founders build products that are both technically sound and market-ready."
              </p>
            </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-[2rem] font-acumin-black text-founderin-dark">Hey, I’m Billy,</h3>
          <div className="text-lg text-founderin-dark/80 space-y-4 font-medium leading-relaxed">
            <p>I’ve always been a technologist who loves turning complex technology into real, usable solutions.</p>
            <p>That’s why I’ve spent over 20 years building software.</p>
            <p>I started my career in technical consulting at KPMG, where I learned how enterprise systems actually work under pressure. Years later, I went on to lead digital transformation initiatives at McCann Worldgroup, architecting large-scale solutions for global brands like GSK, L’Oréal, and Bank of Communications.</p>
            <p>That’s where I learned what it really takes to build products that scale, not just technically, but operationally and organizationally. After more than a decade working with corporate giants, I decided to pivot.</p>
            <p>Today, I’m a technologist and startup ecosystem builder focused on empowering the next generation of founders in Japan — bridging enterprise-grade discipline with startup speed and experimentation. How?</p>
            
            <div className="pl-6 border-l-4 border-founderin-purple/30 my-8">
              <h4 className="text-xl font-bold text-founderin-dark mb-2">Building at PixelX Inc.</h4>
              <p>As Co-Founder, I lead the development of AI-driven products designed specifically for startups and venture capital firms — tools that help teams move faster without breaking fundamentals.</p>
            </div>

            <div className="pl-6 border-l-4 border-founderin-purple/30 my-8">
               <h4 className="text-xl font-bold text-founderin-dark mb-2">Connecting at CreatorLabo</h4>
               <p>As Director, I build infrastructure for innovation in Tokyo. I organize hackathons and community initiatives that connect founders, designers, and engineers into high-signal ecosystems.</p>
            </div>

            <div className="pl-6 border-l-4 border-founderin-purple/30 my-8">
               <h4 className="text-xl font-bold text-founderin-dark mb-2">Scaling FOUNDERIN</h4>
               <p>Our go-to-market studio we’re building with Diana to help founders and builders in Japan to go global.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diana */}
      <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
           <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg relative group flex-shrink-0 mb-8">
              <img 
                src="/team/diana.jpg" 
                alt="Diana" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
           </div>

           <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-founderin-purple/10 mb-8">
              <h4 className="text-lg font-bold text-founderin-dark mb-4">My Core Competencies:</h4>
              <ul className="space-y-3">
                {[
                  "Founder thinking and narrative extraction",
                  "Positioning, framing, and category design",
                  "Early-stage go-to-market strategy",
                  "Zero-to-one content systems that scale beyond the founder",
                  "Pattern recognition across startups, content, and markets"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-founderin-purple mt-1 flex-shrink-0" />
                    <span className="text-founderin-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative p-6 bg-founderin-purple/5 rounded-xl border-l-4 border-founderin-purple w-full">
              <Quote className="w-8 h-8 text-founderin-purple/20 absolute top-4 right-4" />
              <p className="italic font-medium text-founderin-dark/90 relative z-10 leading-relaxed">
                "As a passion project of mine, I’m slowly building <strong>foundverse</strong>."
              </p>
            </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-[2rem] font-acumin-black text-founderin-dark">Hey, I’m Diana</h3>
          <div className="text-lg text-founderin-dark/80 space-y-4 font-medium leading-relaxed">
            <p>I’m a dancer turned writer turned entrepreneur turned founder.</p>
            <p>I’ve spent the last 8+ years inside early-stage tech startups, translating complex ideas into language the market can actually understand.</p>
            <p>I entered the startup world in 2018, right after graduating from business school in Shanghai. My first real role was at an early-stage startup.</p>
            <p>No marketing team. No positioning. No systems. Just a founder with a strong product and a big vision — and me, turning what lived in his head into something customers, partners, and investors could grasp. I ran marketing, PR, and content end to end. Everything was held together with Google Docs, Slack threads, and late nights.</p>
            <p>Over the years, I kept doing the same work in different forms: translating technology into narratives that move markets. I’ve written thousands of assets for companies, startups, and founders — from high-converting landing pages and email campaigns to social content, newsletters, pitch decks, and product launch narratives.</p>
            <p>I’ve built traction engines across three continents.<br/>
            Turned complex tech into $200K email campaigns and sticky product launches.<br/>
            And worked as a ghostwriter for founders, helping them scale their startups with words.</p>
            
            <div className="pl-6 border-l-4 border-founderin-purple/30 my-8">
              <h4 className="text-xl font-bold text-founderin-dark mb-2">Founder in Therapy</h4>
              <p>I’m a thinker, writer, and co-founding partner to builders becoming founders. At Founder in Therapy, I explore the shift from execution to founding. I also work privately with a small number of builders to help them make that shift in practice.</p>
            </div>

            <div className="pl-6 border-l-4 border-founderin-purple/30 my-8">
               <h4 className="text-xl font-bold text-founderin-dark mb-2">FOUNDERIN</h4>
               <p>I’m also the co-founder of <strong>FOUNDERIN</strong>, our go-to-market studio built with Billy. FOUNDERIN exists to help founders turn what they’re building into something the market can clearly understand.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
