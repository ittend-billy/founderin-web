import React from 'react';
import { Container } from '@/components/ui/Container';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-founderin-dark text-gray-500 py-12 border-t border-white/10 pb-24 md:pb-12">
      <Container>
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6">
          <div className="text-sm text-center md:text-left md:justify-self-start order-3 md:order-1">
            &copy; {new Date().getFullYear()} Founderin. All rights reserved.
          </div>
          
          <div className="flex gap-4 md:justify-self-center order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm flex gap-6 items-center md:justify-self-end order-2 md:order-3">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
