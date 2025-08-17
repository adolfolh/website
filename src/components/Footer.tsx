import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: "GitHub", href: "https://github.com/adolfolh", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adolfolh/", icon: Linkedin },
  { name: "Email", href: "mailto:me@adolfolh.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="w-full gradient-purple-dream py-16 sm:py-20 px-6 sm:px-12 border-b border-l border-r border-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black text-4xl sm:text-5xl md:text-6xl tracking-[-0.07em] leading-[0.8]">
          Let&apos;s Create
          <br />
          <span className="font-serif italic font-light">Together.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Have a project in mind or just want to chat? I&apos;d love to hear from you.
        </p>
        
        <div className="flex justify-center gap-4 mt-8 sm:mt-10">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/60 backdrop-blur-md text-primary flex items-center justify-center solid-shadow border-2 border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 border-t border-primary/20 pt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Adolfo López Herrera. All rights reserved.
          </p>
          <p className="text-xs mt-2 font-serif italic">
            Designed with 🎨 and coded with ❤️ in London.
          </p>
        </div>
      </div>
    </footer>
  );
}
