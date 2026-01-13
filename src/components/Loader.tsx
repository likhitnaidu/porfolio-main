import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    // Trigger glitch effect at 70%
    const glitchTimeout = setTimeout(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 1050);

    // Complete after 1.5 seconds
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(glitchTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  const circumference = 2 * Math.PI * 45;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Progress Ring */}
        <div className="relative">
          <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
              transition={{ duration: 0.1, ease: 'linear' }}
              className="drop-shadow-[0_0_10px_hsl(var(--primary))]"
            />
          </svg>

          {/* Logo */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-center ${isGlitching ? 'glitch' : ''}`}
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.img
              src="/assets/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain"
              animate={{
                rotateZ: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              style={{
                filter: 'drop-shadow(0 0 20px hsl(var(--primary)))'
              }}
            />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          className="mt-8 font-mono text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-primary">[</span>
          {progress}%
          <span className="text-primary">]</span>
          <span className="ml-2 animate-blink">_</span>
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
