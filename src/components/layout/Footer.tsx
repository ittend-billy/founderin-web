import React from 'react';
import { Container } from '@/components/ui/Container';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-founderin-dark text-gray-500 py-12 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Founderin. All rights reserved.
          </div>
          <div className="text-sm flex gap-6 items-center">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
