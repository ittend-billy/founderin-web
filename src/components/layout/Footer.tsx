import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-founderin-dark text-gray-500 py-12 border-t border-white/10 pb-32 md:pb-20">
      <Container>
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6">
          <div className="text-sm text-center md:text-left md:justify-self-start order-3 md:order-1">
            &copy; {new Date().getFullYear()} Founderin. All rights reserved.
          </div>
          
          <div className="flex gap-4 md:justify-self-center order-1 md:order-2">
            <a href="https://www.linkedin.com/company/founder-in/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BJvz%2BEALqTeaxznsLQba2bA%3D%3D" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/founderin_" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm flex gap-6 items-center md:justify-self-end order-2 md:order-3">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
