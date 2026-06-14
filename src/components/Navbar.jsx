import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-us', 'services', 'solutions', 'industries', 'contact-us'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section top is near or above the viewport top
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact Us', id: 'contact-us' }
  ];

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    if (linkId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-50 flex justify-center px-4 lg:px-8 transition-all duration-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ top: scrolled ? '20px' : '36px' }}
      >
        <div 
          className={`w-full max-w-5xl mx-auto rounded-full transition-all duration-700 flex items-center justify-between px-4 lg:px-6 py-2 lg:py-3 ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-sm' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-3 pl-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#af60ff] to-[#7f22fe] flex items-center justify-center text-white shadow-inner">
              <Zap className="w-4 h-4" fill="currentColor" />
            </div>
            <span className={`font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? 'text-slate-950' : 'text-white'}`}>
              ZIP FOUNDRY
            </span>
          </div>

          {/* Desktop Links with Animated Pill Hover/Active */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;
              
              return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-5 py-2.5 text-[11px] font-extrabold tracking-widest uppercase transition-colors duration-300 z-10 ${
                  isActive || isHovered
                    ? (scrolled ? 'text-[#af60ff]' : 'text-white') 
                    : (scrolled ? 'text-slate-500' : 'text-slate-300')
                }`}
              >
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${scrolled ? 'bg-slate-100' : 'bg-white/10'}`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {link.name}
              </a>
            )})}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center pr-1">
            <button 
              className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-slate-950 bg-slate-100 hover:bg-slate-200' : 'text-white bg-white/10 hover:bg-white/20'}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-8 flex flex-col"
          >
            <nav className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleNavClick(e, link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-4xl font-black tracking-tighter uppercase ${activeSection === link.id ? 'text-[#af60ff]' : 'text-slate-900'}`} 
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
