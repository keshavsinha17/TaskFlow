import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TaskToast = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div 
      className={`fixed bottom-4 right-4 glass px-4 py-3 rounded-lg shadow-lg flex items-center justify-between max-w-xs w-full z-50 transition-all duration-300 ${
        isVisible ? 'animate-toast-in' : 'animate-toast-out'
      }`}
    >
      <p className="text-sm font-medium text-foreground pr-2">{message}</p>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default TaskToast;