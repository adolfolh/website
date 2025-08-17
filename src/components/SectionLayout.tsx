import { ReactNode } from 'react';
import { sections } from './StickyNav';

interface SectionLayoutProps {
  id: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
  sectionIndex: number; // 0-based index to determine alternating layout
  gradientClass: string; // The gradient class for the smaller section
  className?: string;
}

export default function SectionLayout({ 
  id, 
  leftContent, 
  rightContent, 
  sectionIndex,
  gradientClass,
  className = ""
}: SectionLayoutProps) {
  const sectionCount = sections.length;

  const widthClasses: { [key: number]: { large: string; small: string } } = {
    2: { large: 'lg:w-1/2', small: 'lg:w-1/2' },
    3: { large: 'lg:w-2/3', small: 'lg:w-1/3' },
    4: { large: 'lg:w-3/4', small: 'lg:w-1/4' },
  };

  const { large, small } = widthClasses[sectionCount] || widthClasses[2]; // Default to 50/50

  const isLargeOnLeft = sectionIndex % 2 === 0;

  const leftSectionClass = isLargeOnLeft ? large : small;
  const rightSectionClass = isLargeOnLeft ? small : large;

  const leftGradientClass = !isLargeOnLeft ? `${gradientClass} animate-gradient-flow` : '';
  const rightGradientClass = isLargeOnLeft ? `${gradientClass} animate-gradient-flow` : '';

  return (
    <section id={id} className={`${className} border-l border-r border-b border-primary`}>
      <div className="min-h-[90vh] flex flex-col lg:flex-row">
        {/* First content area */}
        <div 
          className={`w-full px-6 md:px-12 py-12 md:py-16 flex flex-col lg:border-r lg:border-primary ${leftSectionClass} ${leftGradientClass}`}
        >
          {leftContent}
        </div>
        
        {/* Horizontal divider line - visible on mobile */}
        <div className="block lg:hidden h-px bg-primary"></div>
        
        {/* Second content area */}
        <div 
          className={`w-full px-6 md:px-12 py-12 md:py-16 flex flex-col ${rightSectionClass} ${rightGradientClass}`}
        >
          {rightContent}
        </div>
      </div>
    </section>
  );
} 