import SectionLayout from './SectionLayout';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export default function Contact() {
  const leftContent = (
    <div className="flex flex-col justify-center h-full space-y-8 lg:pr-16">
      <div className="space-y-4">
        <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.07em] leading-[0.8]">
          Get in
          <br />
          <span className="font-serif italic font-light">touch.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          I&apos;m always interested in discussing new opportunities and connecting with fellow engineers. Whether you have a question about my work or just want to say hi, my inbox is <span className="line-through">always</span> open.
        </p>
      </div>
    </div>
  );

  const rightContent = (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md bg-background/60 backdrop-blur-md border-2 border-primary solid-shadow rounded-xl p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
        
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1">Start a Conversation</h3>
          <p className="text-sm font-serif italic text-primary">
            The best way to reach me is via email. I&apos;ll do my best to get back to you promptly!
          </p>
        </div>

        <a href="mailto:me@adolfolh.com" className="block font-sans">
          <Button className="w-full !py-4 sm:!py-6 !h-auto text-base sm:text-lg" size="lg">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            me@adolfolh.com
          </Button>
        </a>

        <div className="flex items-center space-x-4">
          <div className="flex-1 h-px bg-primary/20"></div>
          <span className="text-sm font-serif">or find me on</span>
          <div className="flex-1 h-px bg-primary/20"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://www.linkedin.com/in/adolfolh" target="_blank" rel="noopener noreferrer" className="group">
             <div className="p-4 bg-background border border-primary rounded-lg flex items-center justify-center space-x-3 hover:border-primary transition-all duration-300 solid-shadow hover:-translate-y-1">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="font-semibold font-sans no-underline">LinkedIn</span>
             </div>
          </a>
          <a href="https://github.com/adolfolh" target="_blank" rel="noopener noreferrer" className="group">
             <div className="p-4 bg-background border border-primary rounded-lg flex items-center justify-center space-x-3 hover:border-primary transition-all duration-300 solid-shadow hover:-translate-y-1">
                <Github className="w-5 h-5 text-primary" />
                <span className="font-semibold font-sans no-underline">GitHub</span>
             </div>
          </a>
        </div>

      </div>
    </div>
  );

  return (
    <SectionLayout
      id="contact"
      leftContent={leftContent}
      rightContent={rightContent}
      sectionIndex={3}
      gradientClass="gradient-2"
    />
  );
}
