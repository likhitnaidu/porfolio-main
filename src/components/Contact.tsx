import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiLocationMarker, HiCheck } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (static site - no backend)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', username: '@likhitnaidu' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', username: 'Likhit Naidu' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', username: '@likhitnaidu' },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm">05. What's Next?</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-4 mb-6">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, 
            want to collaborate, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                  placeholder="m.likhitwork@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground font-mono font-medium rounded-lg transition-all glow-box hover:shadow-[0_0_40px_hsl(var(--glow)/0.4)]"
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <HiCheck className="w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-mono font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:m.likhitwork@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <HiMail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-sm">m.likhitwork@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <HiLocationMarker className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-sm">India 🇮🇳</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-mono font-bold mb-4">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, href, label, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{username}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-mono">Currently available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
