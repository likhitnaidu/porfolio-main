import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Animated Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
      />

      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img 
              src="/assets/logo.png" 
              alt="LN" 
              className="w-8 h-8 object-contain"
            />
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Built With */}
          <p className="text-muted-foreground text-sm font-mono text-center">
            Built with{' '}
            <span className="inline-flex items-center">
              <FaHeart className="w-3 h-3 text-red-500 mx-1" />
            </span>
            using React + Framer Motion
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs font-mono">
            © {currentYear} Likhit Naidu. All rights reserved.
          </p>

          {/* Source */}
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-mono"
          >
            {'<'} view source {'/>'} 
          </motion.a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl rounded-full opacity-50" />
    </footer>
  );
};

export default Footer;
