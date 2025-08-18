'use client';

import { useEffect, useState } from 'react';

export const sections = ['about', 'contact'];

export default function StickyNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const navElement = document.getElementById('sticky-nav-container');
    if (navElement) {
      setNavTop(navElement.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= navTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navTop]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for sticky nav height when scrolling
      const navHeight = document.getElementById('sticky-nav-container')?.clientHeight || 0;
      const offsetTop = element.offsetTop - (isSticky ? navHeight : 0);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getButtonClass = (sectionId: string, gradientClass: string) => {
    const baseClass = "flex-1 flex font-serif italic font-light no-underline items-center justify-center text-md md:text-xl text-primary bg-transparent cursor-pointer tracking-tight transition-all duration-300";
    const activeClass = activeSection === sectionId ? gradientClass : `hover:bg-primary/5`;
    const borderClass = sectionId === 'contact' ? '' : 'border-r border-primary';
    
    return `${baseClass} ${activeClass} ${borderClass}`;
  };

  return (
    <div id="sticky-nav-container" className="h-[var(--nav-height,10vh)]">
      <section 
        className={`h-[var(--nav-height,10vh)] ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-50 bg-background' 
            : ''
        }`}
      >
        <nav className="w-full h-full">
          <div className="flex w-full h-full border border-primary">
            <button
              onClick={() => handleScrollToSection('about')}
              className={getButtonClass('about', 'gradient-1')}
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className={getButtonClass('contact', 'gradient-1')}
            >
              Contact
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
}
