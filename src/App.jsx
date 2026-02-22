import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Cpu, ChevronDown, ArrowRight } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import SectionSeparator from './components/SectionSeparator';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showGreenGlow, setShowGreenGlow] = useState(false);

  // Console easter egg
  useEffect(() => {
    try {
      console.log("%cYou weren't supposed to look here.", "color: #50C878; font-size: 14px; font-weight: bold;");
      console.log("%cSince you did... welcome.", "color: #888; font-size: 12px;");
      setTimeout(() => {
        console.log("%c✓ Bonus points for curiosity.", "color: #50C878; font-size: 12px; font-style: italic;");
      }, 500);
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
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Experience />
      <SectionSeparator />
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-loki-void/80 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Links on left */}
        <ul className="hidden md:flex space-x-10">
          {['Origin', 'Abilities', 'Projects', 'Contact'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="link-underline text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Logo on right */}
        <span
          className={`text-2xl font-bold tracking-tight text-loki-green cursor-pointer transition-all duration-300 hover:scale-105 ${triggerLogoSpin ? 'animate-spin' : ''}`}
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
          title="Keep hovering... if you're patient enough"
          style={{
            filter: triggerLogoSpin ? 'drop-shadow(0 0 8px rgba(80, 200, 120, 0.8))' : 'none'
          }}
        >
          KS<span className="text-loki-gold">.</span>
        </span>
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

      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }

      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 3000);

      if (newCount >= 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
        return 0;
      }

      return newCount;
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 z-10" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Cinematic Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Massive Headline */}
        <motion.h1
          className="font-bold tracking-tight text-white mb-16 cursor-pointer select-none"
          style={{
            lineHeight: 1.1,
            letterSpacing: '-0.035em'
          }}
          initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleNameClick}
        >
          <div style={{ fontSize: 'clamp(4.5rem, 11vw, 9.5rem)', lineHeight: 1.05 }}>
            Kaushik Sambe<span className="text-loki-gold">.</span>
          </div>
          <div 
            style={{ 
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', 
              marginTop: 'clamp(1rem, 2.5vh, 1.5rem)',
              lineHeight: 1.2
            }} 
            className="text-gray-400 font-medium"
          >
            I solve problems others don't see.
          </div>
        </motion.h1>

        {/* Easter egg message */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-loki-green/70 text-sm italic font-light mb-6"
            >
              Trust me. This wasn't the first version.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Subheading */}
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-gray-300 font-normal leading-relaxed"
            style={{
              fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
              lineHeight: 1.6
            }}
          >
            Data Manager & Engineer building impactful solutions through automation and modern tech.
          </p>

          <p 
            className="text-gray-500 leading-relaxed max-w-2xl" 
            style={{ 
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', 
              lineHeight: 1.7 
            }}
          >
            Specializing in <span className="text-loki-green font-medium">Python</span>, <span className="text-loki-green font-medium">React</span>, and <span className="text-loki-green font-medium">Google Apps Script</span> to streamline workflows and create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-20 flex items-center gap-3 text-gray-500 text-sm uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
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
    <section id="origin" className="relative z-10 container mx-auto px-6" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="The Origin" subtitle="Background & Education" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium bg-white/5 border border-white/5 p-10 backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-loki-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
          <p 
            className="text-gray-300 leading-relaxed" 
            style={{ 
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', 
              lineHeight: 1.75 
            }}
          >
            I am a motivated <span className="text-white font-semibold">Software Engineer</span> with a passion for scripting, automation, and full-stack development. Currently pursuing a Bachelor's in Computer Engineering, I specialize in building impactful solutions using <span className="text-loki-green font-medium">Python, C++, and Modern Web Technologies</span>. My approach combines strong problem-solving skills with a drive to optimize and automate complex workflows.
          </p>
        </motion.div>

        <div className="space-y-10 relative border-l-2 border-white/10 pl-10 ml-4 md:ml-0">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute -left-[45px] top-1 w-5 h-5 rounded-full bg-loki-void border-2 border-loki-green shadow-[0_0_12px_rgba(80,200,120,0.6)] group-hover:shadow-[0_0_20px_rgba(80,200,120,0.8)] transition-shadow duration-300" />
              <span className="text-loki-green text-sm font-mono mb-2 block tracking-wider">{item.year}</span>
              <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
              <p className="text-gray-500 text-base">{item.place}</p>
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
    <section id="abilities" className="relative z-10 bg-loki-void/30" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Abilities" subtitle="Tech Stack Arsenal" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="card-premium bg-[#0a0a0a] border border-white/5 p-8 hover:border-loki-green/40 hover:shadow-[0_0_35px_rgba(80,200,120,0.15)] hover:scale-[1.03] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-loki-gold opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{cat.icon}</span>
                <h3 className="text-white font-semibold tracking-wide uppercase text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-xs font-mono bg-white/5 text-gray-400 group-hover:text-loki-green group-hover:bg-loki-green/10 transition-all duration-300 cursor-default border border-transparent hover:border-loki-green/30">
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
      highlight: true,
      link: "https://github.com/Kasa1905"
    },
    {
      title: "BeatSync",
      tech: "Next.js • Bun",
      desc: "Real-time music synchronization app enabling seamless playlist sharing and live streaming with optimized UI/UX.",
      link: "https://github.com/Kasa1905"
    },
    {
      title: "Bank Management System",
      tech: "Python • MySQL • Tkinter",
      desc: "Comprehensive GUI-based banking system with secure authentication, account handling, and transaction reporting.",
      link: "https://github.com/Kasa1905"
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
      desc: "Custom encryption utility implementing advanced cryptographic algorithms for secure data handling.",
      link: "https://github.com/Kasa1905"
    }
  ];

  return (
    <section id="projects" className="relative z-10 container mx-auto px-6" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      <SectionTitle title="Things I've Built" subtitle="Selected Works" />

      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: idx * 0.12,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`card-premium group relative bg-[#0a0a0a] border border-white/8 p-12 flex flex-col justify-between 
              hover:border-loki-green/40 hover:shadow-[0_0_40px_rgba(80,200,120,0.2),0_20px_60px_rgba(0,0,0,0.5)] 
              transition-all duration-300 overflow-hidden rounded-lg
              ${project.highlight ? 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#0d1912] border-white/10' : ''}`}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-loki-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Green glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-loki-green/0 via-loki-green/0 to-loki-green/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <h3
                  className={`font-bold text-white group-hover:text-loki-green transition-colors duration-300 leading-tight tracking-tight
                    ${project.highlight ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Tech stack */}
              <p className="text-loki-green/80 text-xs font-mono mb-8 uppercase tracking-widest letter-spacing">
                {project.tech}
              </p>

              {/* Description */}
              <p className={`text-gray-400 leading-relaxed mb-10 ${project.highlight ? 'text-lg' : 'text-base'}`}>
                {project.desc}
              </p>

              {/* GitHub Link */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="btn-premium inline-flex items-center gap-3 px-7 py-3.5 bg-white/5 border border-white/15 rounded-md
                    hover:border-loki-green/50 hover:bg-loki-green/15 text-gray-300 hover:text-loki-green 
                    transition-all duration-300 group/btn"
                >
                  <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span className="font-medium">View on GitHub</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </div>

            {/* Decorative icon for highlighted project */}
            {project.highlight && (
              <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                <Code2 className="w-32 h-32" />
              </div>
            )}

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-loki-green/30 group-hover:w-full group-hover:bg-loki-green transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="relative z-10 bg-white/[0.02]" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium bg-white/5 border border-white/5 p-12 backdrop-blur-sm group hover:border-loki-green/20 hover:shadow-[0_0_40px_rgba(80,200,120,0.1)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h4 
                className="text-loki-gold font-bold uppercase tracking-widest mb-3"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
              >
                Experience
              </h4>
              <h2 
                className="font-bold text-white mb-6 tracking-tight" 
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                Data Manager <span className="text-gray-600">@</span> ACES Club
              </h2>
              <p 
                className="text-gray-400 mb-8 leading-relaxed" 
                style={{ 
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', 
                  lineHeight: 1.75 
                }}
              >
                Orchestrated automated mailing and ticketing workflows for major events like Acunetix and HackSeries.
                Leveraged <span className="text-loki-green font-medium">Google Apps Script</span> and <span className="text-loki-green font-medium">JSON</span> to integrate complex datasets, significantly reducing manual overhead and optimizing operational efficiency.
              </p>
              <span 
                className="inline-block px-5 py-2 border border-white/10 rounded-full text-gray-500 font-mono hover:border-loki-green/30 transition-colors duration-300"
                style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
              >
                2024 — 2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 container mx-auto px-6 text-center" style={{ paddingTop: 'clamp(8rem, 15vh, 12rem)', paddingBottom: 'clamp(8rem, 15vh, 12rem)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto"
      >
        <div className="w-20 h-1 bg-loki-gold mx-auto mb-10" />
        <h2 
          className="font-bold text-white mb-10 tracking-tight" 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            letterSpacing: '-0.02em', 
            lineHeight: 1.1 
          }}
        >
          Summon Me.
        </h2>
        <p 
          className="text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto" 
          style={{ 
            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', 
            lineHeight: 1.7 
          }}
        >
          Open to opportunities where I can learn, grow, and contribute effectively.
          Let's discuss how I can bring value to your next endeavor.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <motion.a 
            href="mailto:sambekaushik@gmail.com" 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="btn-premium flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 hover:border-loki-green hover:bg-loki-green/10 text-white hover:text-loki-green transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">sambekaushik@gmail.com</span>
          </motion.a>
          <div className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-gray-300">
            <span className="font-medium">+91 9321621486</span>
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
  <div className="mb-14">
    <h3 
      className="text-loki-green/80 font-bold uppercase tracking-[0.2em] mb-3 pl-1"
      style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
    >
      {subtitle}
    </h3>
    <h2 
      className="font-bold text-white tracking-tight"
      style={{ 
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em'
      }}
    >
      {title}
    </h2>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
    className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
  >
    {icon}
  </motion.a>
)

export default Portfolio;
