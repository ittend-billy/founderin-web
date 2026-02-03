import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Problem } from '@/components/sections/Problem';
import { Reframe } from '@/components/sections/Reframe';
import { Solution } from '@/components/sections/Solution';
import { Team } from '@/components/sections/Team';
import { Services } from '@/components/sections/Services';
import { Transformation } from '@/components/sections/Transformation';
import { Qualification } from '@/components/sections/Qualification';
import { BehindTheScenes } from '@/components/sections/BehindTheScenes';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-founderin-white">
      <Header />
      <Hero />
      <Partners />
      <Problem />
      <Reframe />
      <Solution />
      <Team />
      <Services />
      <Transformation />
      <Qualification />
      <BehindTheScenes />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
