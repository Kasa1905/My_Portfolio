import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Cpu, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showGreenGlow, setShowGreenGlow] = useState(false);

  // Console easter egg
  useEffect(() => {
    try {
      console.log("%cYou weren't supposed to look here.", "color: #50C878; font-size: 14px; font-weight: bold;");
      console.log("%cSince you did... welcome.", "color: #888; font-size: 12px;");
    } catch (e) {
      // Fail silently
    }
  }, []);

  // Keyboard shortcut easter egg (L key)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'l' || e.key === 'L') {
        setShowGreenGlow(true);
        setTimeout(() => setShowGreenGlow(false), 800);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-300 selection:bg-loki-green selection:text-white overflow-hidden">
      {/* Green glow overlay (L key easter egg) */}
      {showGreenGlow && (
        <div className="fixed inset-0 pointer-events-none z-[100] bg-loki-green/10 animate-pulse"
          style={{ animation: 'pulse 0.8s ease-out' }} />
      )}

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-loki-void opacity-90 mx-auto" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-loki-green/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-loki-gold/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoHoverTime, setLogoHoverTime] = useState(0);
  const [triggerLogoSpin, setTriggerLogoSpin] = useState(false);
  const hoverTimerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoMouseEnter = () => {
    hoverTimerRef.current = setInterval(() => {
      setLogoHoverTime(prev => {
        const newTime = prev + 100;
        if (newTime >= 3000) {
          setTriggerLogoSpin(true);
          setTimeout(() => setTriggerLogoSpin(false), 1000);
          clearInterval(hoverTimerRef.current);
          return 0;
        }
        return newTime;
      });
    }, 100);
  };

  const handleLogoMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearInterval(hoverTimerRef.current);
    }
    setLogoHoverTime(0);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-loki-void/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-sm tracking-widest font-semibold uppercase text-loki-gold/80">
        <span
          className={`text-xl font-bold tracking-tight text-loki-green cursor-pointer transition-all duration-300 hover:scale-105 ${triggerLogoSpin ? 'animate-spin' : ''}`}
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
          style={{
            filter: triggerLogoSpin ? 'drop-shadow(0 0 8px rgba(80, 200, 120, 0.8))' : 'none'
          }}
        >
          KS<span className="text-loki-gold">.</span>
        </span>
        <ul className="hidden md:flex space-x-8">
          {['Origin', 'Abilities', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-loki-green transition-colors cursor-pointer text-xs">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const clickTimerRef = React.useRef(null);

  const handleNameClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;

      // Reset timer
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }

      // Reset counter after 3 seconds of inactivity
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 3000);

      // Trigger easter egg at 5 clicks
      if (newCount >= 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
        return 0; // Reset
      }

      return newCount;
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-48 h-48 md:w-64 md:h-64 mb-16 rounded-full border-2 border-loki-gold/20 flex items-center justify-center group"
      >
        {/* Abstract Avatar Placeholder with Loki Horns hint */}
        <div className="absolute inset-0 rounded-full border border-loki-green/30 animate-ping opacity-20" />
        <div className="w-full h-full bg-gradient-to-br from-loki-void to-gray-900 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(80,200,120,0.2)] group-hover:shadow-[0_0_80px_rgba(80,200,120,0.4)] transition-all duration-700">
          <span className="text-loki-green font-bold text-6xl md:text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">KS</span>
        </div>

        {/* Decorative Lines */}
        <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-loki-gold opacity-60" />
        <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-loki-gold opacity-60" />
      </motion.div>

      <div className="space-y-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-loki-green text-base md:text-xl font-semibold tracking-[0.3em] uppercase"
        >
          Data Manager & Engineer
        </motion.h2>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 relative cursor-pointer select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={handleNameClick}
        >
          <span className="glitch-hover inline-block">KAUSHIK</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-loki-gold to-[#f0e68c] glitch-hover inline-block">SAMBE</span>
        </motion.h1>

        {/* Easter egg message */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-loki-green/70 text-sm italic font-light"
            >
              Trust me. This wasn't the first version.
            </motion.p>
          )}
        </AnimatePresence>

        <motion.p
          className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Designing Impactful Solutions through <span className="text-loki-green font-semibold">Code</span> & <span className="text-loki-green font-semibold">Automation</span>.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#origin" className="flex flex-col items-center gap-2 text-loki-gold/50 hover:text-loki-gold transition-colors text-xs uppercase tracking-widest group">
          Explore Nexus
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-loki-green" />
        </a>
      </motion.div>
    </section>
  );
};

const About = () => {
  const timeline = [
    { year: '2023 - 2027', title: 'B.E. Computer Engineering', place: 'Dr. D. Y. Patil Institute of Technology' },
    { year: '2021 - 2023', title: 'HSC Science', place: 'Amber International School' },
    { year: '2021', title: 'SSC', place: 'Universal High School' },
  ];

  return (
    <section id="origin" className="py-24 relative z-10 container mx-auto px-6">
      <SectionTitle title="The Origin" subtitle="Background & Education" />

      <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/5 p-8 rounded-sm backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-loki-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          <p className="text-lg leading-relaxed text-gray-300">
            I am a motivated <span className="text-white font-medium">Software Engineer</span> with a passion for scripting, automation, and full-stack development. Currently pursuing a Bachelor’s in Computer Engineering, I specialize in building impactful solutions using <span className="text-loki-green">Python, C++, and Modern Web Technologies</span>. My approach combines strong problem-solving skills with a drive to optimize and automate complex workflows.
          </p>
        </motion.div>

        <div className="space-y-8 relative border-l border-white/10 pl-8 ml-4 md:ml-0">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-loki-void border border-loki-green shadow-[0_0_10px_rgba(80,200,120,0.5)]" />
              <span className="text-loki-green text-sm font-mono mb-1 block">{item.year}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { name: "Core", skills: ["Python", "C++", "Java", "JavaScript", "SQL"], icon: <Terminal className="w-5 h-5" /> },
    { name: "Frameworks & Libraries", skills: ["React.js", "Next.js", "Bun", "Node.js", "Express.js", "Tkinter"], icon: <Code2 className="w-5 h-5" /> },
    { name: "Databases", skills: ["MySQL", "Firebase"], icon: <Database className="w-5 h-5" /> },
    { name: "Tools & Cloud", skills: ["Google Apps Script", "Git", "REST APIs", "JSON", "Postman", "Linux", "GCP", "VS Code"], icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section id="abilities" className="py-24 relative z-10 bg-loki-void/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Abilities" subtitle="Tech Stack Arsenal" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a] border border-white/5 p-6 hover:border-loki-green/40 hover:shadow-[0_0_30px_rgba(80,200,120,0.1)] hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-loki-gold opacity-70 group-hover:opacity-100 transition-opacity">{cat.icon}</span>
                <h3 className="text-white font-semibold tracking-wide uppercase text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 text-xs font-mono bg-white/5 text-gray-400 group-hover:text-loki-green transition-colors cursor-default border border-transparent hover:border-loki-green/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ProofVault",
      tech: "Next.js • Solidity • Web3 • AI",
      desc: "NFT-based certification platform integrated with AI-powered chatbots for proof verification and secure management.",
      highlight: true
    },
    {
      title: "BeatSync",
      tech: "Next.js • Bun",
      desc: "Real-time music synchronization app enabling seamless playlist sharing and live streaming with optimized UI/UX."
    },
    {
      title: "Bank Management System",
      tech: "Python • MySQL • Tkinter",
      desc: "Comprehensive GUI-based banking system with secure authentication, account handling, and transaction reporting."
    },
    {
      title: "AutomateWithAppsScript",
      tech: "Google Apps Script • JSON",
      desc: "Automation framework for managing event ticketing and registrations. Streamlined workflows via Sheets integration.",
      link: "https://github.com/Kasa1905/AutomateWithAppsScript"
    },
    {
      title: "Advanced Encryption Tool",
      tech: "Python • Cryptography",
      desc: "Custom encryption utility implementing advanced cryptographic algorithms for secure data handling."
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 container mx-auto px-6">
      <SectionTitle title="Things I've Built" subtitle="Selected Works" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 auto-rows-[minmax(0,_1fr)]">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative bg-[#080808] border border-white/5 p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 ${project.highlight ? 'md:col-span-2 bg-gradient-to-br from-[#080808] to-[#0f1f15]' : ''}`}
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-loki-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-bold text-white group-hover:text-loki-gold transition-colors ${project.highlight ? 'text-2xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-loki-green text-xs font-mono mb-4 uppercase tracking-wider opacity-80">{project.tech}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
            </div>

            {project.highlight && (
              <div className="absolute bottom-0 right-0 p-8 opacity-5">
                <Code2 className="w-24 h-24" />
              </div>
            )}

            <div className="w-8 h-1 bg-loki-green/20 group-hover:bg-loki-green group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-loki-gold text-sm font-bold uppercase tracking-widest mb-2">Experience</h4>
            <h2 className="text-3xl font-bold text-white mb-6">Data Manager <span className="text-gray-600">@</span> ACES Club</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Orchestrated automated mailing and ticketing workflows for major events like Acunetix and HackSeries.
              Leveraged <span className="text-loki-green">Google Apps Script</span> and <span className="text-loki-green">JSON</span> to integrate complex datasets, significantly reducing manual overhead and optimizing operational efficiency.
            </p>
            <span className="inline-block px-4 py-1 border border-white/10 rounded-full text-xs text-gray-500 font-mono">2024 — 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="w-16 h-1 bg-loki-gold mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Summon Me.</h2>
        <p className="text-gray-400 text-lg mb-12">
          Open to opportunities where I can learn, grow, and contribute effectively.
          Let's discuss how I can bring value to your next endeavor.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          <a href="mailto:sambekaushik@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-loki-green text-white hover:text-loki-green transition-all group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>sambekaushik@gmail.com</span>
          </a>
          <div className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-gray-300">
            <span>+91 9321621486</span>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <SocialLink href="https://github.com/Kasa1905" icon={<Github className="w-6 h-6" />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-6 h-6" />} />
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5">
    <p>FORGED BY KAUSHIK SAMBE. © 2026.</p>
  </footer>
);

// --- Helpers ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h3 className="text-loki-green/80 text-xs font-bold uppercase tracking-[0.2em] mb-2 pl-1">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
    {icon}
  </a>
)

export default Portfolio;
