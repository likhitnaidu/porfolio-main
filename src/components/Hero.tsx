import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const headlines = [
    "I build products.",
    "I ship fast.",
    "I design with code."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center noise-bg">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-primary text-sm md:text-base"
            >
              {'>'} Hello, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono"
            >
              <span className="text-foreground">Likhit</span>{' '}
              <span className="gradient-text">Naidu</span>
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Animated Headlines */}
            <motion.div variants={itemVariants} className="space-y-2">
              {headlines.map((headline, index) => (
                <motion.p
                  key={headline}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-mono text-muted-foreground"
                >
                  <span className="text-primary">//</span> {headline}
                </motion.p>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed"
            >
              Product-minded frontend engineer crafting exceptional digital experiences. 
              Currently diving deep into AI and LLMs while shipping production-ready applications.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded transition-all glow-box hover:shadow-[0_0_60px_hsl(var(--glow)/0.4)]"
              >
                View Projects
                <HiArrowDown className="animate-bounce" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1aaGJYZrbCwJUAp_ienJk1tYDU9Dr1MOn/view"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono font-medium rounded hover:bg-primary/10 transition-colors"
              >
                <HiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm card-hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">identity.json</span>
              </div>

              {/* Card Content */}
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-muted-foreground">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-primary">"name"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"Likhit Naidu"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-primary">"role"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"Product-minded Frontend Engineer"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-primary">"focus"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"AI-assisted builder | Learning LLMs"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-primary">"location"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"India 🇮🇳"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-primary">"status"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"Open to opportunities"</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{'}'}</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 -z-10 blur-xl opacity-50" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
