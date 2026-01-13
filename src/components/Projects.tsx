import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode, HiX } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Recylytix',
    description: 'AI-driven recycling insights platform that helps communities track and improve their recycling habits using machine learning.',
    longDescription: 'A comprehensive platform that leverages AI to analyze recycling patterns, provide personalized recommendations, and track environmental impact at both individual and community levels.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
    tech: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
    features: ['Real-time waste classification', 'Community leaderboards', 'Impact visualization', 'AI-powered suggestions'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Live Map Navigator',
    description: 'Real-time navigation frontend with interactive maps, route optimization, and live traffic updates.',
    longDescription: 'A modern navigation application providing real-time route planning, traffic analysis, and location-based services with a focus on user experience and performance.',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=500&fit=crop',
    tech: ['React', 'Mapbox GL', 'WebSocket', 'Redux'],
    features: ['Real-time updates', 'Route optimization', 'Traffic overlay', 'Offline support'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Featured Projects</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <span className="px-4 py-2 bg-background/90 rounded font-mono text-sm">View Details</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-mono text-xs">Featured Project</span>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <HiExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <HiX size={24} />
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div>
                    <span className="text-primary font-mono text-sm">Featured Project</span>
                    <h3 className="text-3xl font-bold font-mono mt-1">{selectedProject.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-mono font-bold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-mono font-bold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-mono bg-muted rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono rounded hover:bg-primary/90 transition-colors"
                    >
                      <HiExternalLink />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
