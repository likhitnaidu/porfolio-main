import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiChip, HiGlobe } from 'react-icons/hi';

const facts = [
  { icon: HiCode, label: 'Clean Code', value: 'Obsessed' },
  { icon: HiLightningBolt, label: 'Ship Speed', value: 'Fast AF' },
  { icon: HiChip, label: 'AI/LLM', value: 'Learning' },
  { icon: HiGlobe, label: 'Available', value: 'Remote' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">About Me</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm not your typical developer. While others debate tabs vs spaces, 
              I'm busy <span className="text-foreground font-medium">building products</span> that 
              actually solve problems. My journey started with curiosity, evolved through countless 
              late nights of debugging, and led me to where I am now.A frontend engineer with a 
              product mindset.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground font-medium">CSE degree</span>, 
              I spend most of my time exploring the intersection of 
              <span className="text-primary"> AI and web development</span>. I believe the best 
              interfaces are invisible. That's what I strive to build.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, reading about system design, 
              or experimenting with LLMs to enhance my development workflow. I'm always looking 
              for opportunities to work on products that matter.
            </p>

            {/* Technologies */}
            <div className="pt-4">
              <p className="text-foreground font-mono text-sm mb-4">Technologies I work with:</p>
              <div className="grid grid-cols-2 gap-2">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Python', 'Llama3', 'TailwindCSS'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Quick Facts Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'hsl(var(--primary))',
                  }}
                  className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 card-hover"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">
                    {fact.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">{fact.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
