import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center"
        >
          {/* Progress Ring */}
          <svg className="absolute w-12 h-12 -rotate-90" viewBox="0 0 44 44">
            {/* Background circle */}
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="hsl(var(--card))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (scrollProgress / 100) * circumference}
              className="transition-all duration-150"
            />
          </svg>

          {/* Arrow Icon */}
          <HiArrowUp className="relative z-10 w-5 h-5 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
