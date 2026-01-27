import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ChatWidget: React.FC = () => {
  const handleClick = () => {
    // Opens the Telegram group link
    window.open('https://t.me/+7mIrkmaAlZEzZGM6', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        className="group flex items-center gap-2 rounded-full px-6 py-4 shadow-xl bg-founderin-dark text-white hover:bg-founderin-dark/90 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">Got questions? Chat with us</span>
      </Button>
    </div>
  );
};
