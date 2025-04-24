import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button 
    onClick={onClick}
    className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
    aria-label="Close"
  >
    <X className="h-6 w-6" aria-hidden="true" />
  </button>
); 