import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Focus, Compass, Mic2, PenTool, Radio, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Focus className="w-6 h-6" />,
      title: "Translate Product to Market",
      description: "Who your product saves and why."
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      title: "Rebuild & Record Your Pitch",
      description: "Video pitch you can reuse."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Design & Lock Your Category",
      description: "Own the space you lead."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Architect Your Narrative",
      description: "We install an exposure system that runs while you build."
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Install Founder Interface",
      description: "A system that runs while you build."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Wire You Into the Market",
      description: "Launch alongside you, not a PDF"
    }
  ];

  return (
    <SectionWrapper variant="default" className="py-16 md:py-24 bg-founderin-purple">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[2.2rem] md:text-[3.16rem] font-acumin-black text-founderin-dark leading-tight">What We Actually Do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-fit mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center justify-center text-center h-full aspect-square max-w-[250px] mx-auto w-full">
            <div className="w-12 h-12 bg-founderin-mint rounded-lg flex items-center justify-center text-founderin-purple mb-6 group-hover:bg-founderin-purple group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-[1.42rem] font-bold font-acumin-black text-founderin-dark mb-2">{service.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button size="lg" className="group bg-founderin-dark text-white hover:bg-founderin-dark/90 font-acumin-black tracking-wide">
          Shoot My Founder Pitch
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
