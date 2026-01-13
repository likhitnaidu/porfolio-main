import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiGit, SiGithub, SiVercel, SiFigma, SiVite, SiNodedotjs,
  SiPython, SiRust, SiCplusplus
} from 'react-icons/si';
import { HiSparkles, HiCube } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building beautiful, responsive interfaces',
    icon: HiCube,
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 90 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 95 },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Shipping code efficiently',
    icon: HiCube,
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'Vercel', icon: SiVercel, level: 85 },
      { name: 'Vite', icon: SiVite, level: 90 },
      { name: 'Figma', icon: SiFigma, level: 75 },
      { name: 'Node.js', icon: SiNodedotjs, level: 70 },
    ],
  },
  {
    title: 'AI & Emerging',
    description: 'Exploring the future of development',
    icon: HiSparkles,
    skills: [
      { name: 'Prompt Engineering', icon: HiSparkles, level: 85 },
      { name: 'LLM Integration', icon: HiSparkles, level: 70 },
    ],
  },
  {
    title: 'Learning',
    description: 'Currently exploring',
    icon: HiCube,
    skills: [
      { name: 'Rust', icon: SiRust, level: 30 },
      { name: 'C/C++', icon: SiCplusplus, level: 40 },
      { name: 'Python', icon: SiPython, level: 50 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Skills & Stack</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
              className="p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">{category.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{category.description}</p>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary to-cyan-300 rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail Oriented', 'Product Thinking'].map((tag, i) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary))' }}
              className="px-4 py-2 text-sm font-mono border border-border rounded-full bg-card/50 text-muted-foreground transition-colors hover:text-primary"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
