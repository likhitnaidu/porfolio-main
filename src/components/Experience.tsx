import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCode, HiLightningBolt, HiStar } from 'react-icons/hi';

const timeline = [
  {
    id: 1,
    title: 'CSE Student',
    organization: 'University',
    period: '2022 - Present',
    description: 'Pursuing Computer Science & Engineering. Building a strong foundation in algorithms, data structures, and software engineering principles.',
    icon: HiAcademicCap,
    type: 'education',
  },
  {
    id: 2,
    title: 'Web Development Track',
    organization: 'Self-Learning',
    period: '2023 - Present',
    description: 'Mastered modern frontend development with React, TypeScript, and modern tooling. Built multiple production-ready applications.',
    icon: HiCode,
    type: 'learning',
  },
  {
    id: 3,
    title: 'AI & LLM Exploration',
    organization: 'Research & Projects',
    period: '2024 - Present',
    description: 'Diving into AI-assisted development, prompt engineering, and building tools that leverage large language models.',
    icon: HiLightningBolt,
    type: 'current',
  },
  {
    id: 4,
    title: 'Target: ₹50k/month Internship',
    organization: 'Career Goal',
    period: '2025',
    description: 'Actively seeking opportunities to work with innovative teams on products that matter. Open to remote positions.',
    icon: HiStar,
    type: 'goal',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Experience & Journey</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm card-hover text-left"
                    >
                      <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-3">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold font-mono mb-1">{item.title}</h3>
                      <p className="text-primary text-sm font-mono mb-3">{item.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
                    className={`absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 flex items-center justify-center rounded-full border-2 border-primary bg-background z-10 ${
                      item.type === 'goal' ? 'animate-glow-pulse' : ''
                    }`}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    
                    {/* Glow for current/goal */}
                    {(item.type === 'current' || item.type === 'goal') && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    )}
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/50 bg-primary/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-mono text-sm">Currently open to new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
