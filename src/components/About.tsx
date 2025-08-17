"use client";

import SectionLayout from './SectionLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Globe, 
  Calendar, 
  ChevronRight, 
  Clock,
  Coffee
} from "lucide-react";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    type: "work" as const,
    title: "Senior Data Engineer",
    company: "Allianz",
    date: "May 2025 - Present",
    location: "London, UK",
    description: "Leading the design and implementation of scalable data pipelines and MLOps infrastructure. Focusing on automating machine learning workflows and deploying models to production.",
    achievements: [
      "Led the migration of a monolithic data pipeline to a microservices-based architecture, improving scalability and reducing costs by 30%.",
      "Designed and implemented a CI/CD pipeline for machine learning models, reducing deployment time from weeks to days.",
      "Mentored junior engineers and established best practices for data engineering and MLOps.",
    ],
    highlights: ["Azure", "Databricks", "Kubernetes", "Docker", "Python", "PySpark", "MLOps"],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    type: "work" as const,
    title: "Data Engineer",
    company: "Allianz",
    date: "August 2023 - June 2025",
    location: "London, UK",
    description: "Developed and maintained data pipelines for processing large volumes of data. Worked with stakeholders to gather requirements and deliver data-driven solutions.",
    achievements: [
      "Built and maintained ETL pipelines that processed over 1TB of data daily.",
      "Developed a real-time data streaming solution using Kafka and Spark.",
      "Collaborated with data scientists to deploy machine learning models to production.",
    ],
    highlights: ["Azure", "Databricks", "SQL", "Python", "PySpark", "DevOps"],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    type: "work" as const,
    title: "Graduate Data Engineer",
    company: "Allianz",
    date: "January 2023 - August 2023",
    location: "London, UK",
    description: "Gained hands-on experience in data engineering and cloud technologies. Contributed to the development of data pipelines and learned best practices for software development.",
    achievements: [
      "Contributed to the development of a new data warehousing solution.",
      "Gained proficiency in Azure, Databricks, and other cloud technologies.",
      "Completed the Microsoft Azure Fundamentals (AZ-900) certification.",
    ],
    highlights: ["Azure", "Databricks", "SQL", "Python", "PyTest"],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    type: "education" as const,
    title: "Computer Science BSc",
    institution: "University of Nottingham",
    date: "2019 - 2022",
    location: "Nottingham, UK",
    description: "First Class Honours (1:1). Specialized in data science and machine learning. Completed a final year project on building a predictive model for stock market trends.",
    achievements: [
      "First Class Honours (1:1)",
      "Final year project on stock market prediction",
      "Member of the Computer Science Society"
    ],
    highlights: ["Data Science", "Machine Learning", "Algorithms"],
    icon: <GraduationCap className="w-6 h-6" />
  }
];

export default function About() {
  const [activeItem, setActiveItem] = useState<(typeof timelineData)[number] | null>(null);
  const [coffeeCount, setCoffeeCount] = useState(823);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    let coffeeTimer2: ReturnType<typeof setInterval> | undefined;
    let slowCoffeeTimeout: ReturnType<typeof setTimeout> | undefined;

    const coffeeTimer1 = setInterval(() => {
      setCoffeeCount(prevCount => prevCount + 1);
    }, 2000);

    const coffeeTimeout = setTimeout(() => {
      if (coffeeTimer1) clearInterval(coffeeTimer1);
      coffeeTimer2 = setInterval(() => {
        setCoffeeCount(prevCount => prevCount + 1);
      }, 5000);

      slowCoffeeTimeout = setTimeout(() => {
        if (coffeeTimer2) clearInterval(coffeeTimer2);
      }, 20000);
    }, 10000);

    const timezoneTimer = setInterval(() => {
      const londonTime = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(londonTime);
    }, 1000);

    return () => {
      if (coffeeTimer1) clearInterval(coffeeTimer1);
      if (coffeeTimer2) clearInterval(coffeeTimer2);
      if (coffeeTimeout) clearTimeout(coffeeTimeout);
      if (slowCoffeeTimeout) clearTimeout(slowCoffeeTimeout);
      clearInterval(timezoneTimer);
    };
  }, []);

  const startDate = new Date('2023-01-23');
  const today = new Date();
  const daysOfExperience = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const yearsOfExperience = Math.round((daysOfExperience / 365) * 100) / 100;

  const stats = [
    { label: "Years of Experience", value: `${yearsOfExperience}`, icon: Calendar },
    { label: "Cups of Coffee", value: `${coffeeCount}+`, icon: Coffee },
    { label: "Languages Spoken", value: "3", icon: Globe },
    { label: "My Timezone (UK)", value: currentTime, icon: Clock }
  ];

  const skills = [
    { name: "Python", },
    { name: "SQL", },
    { name: "PySpark", },
    { name: "Docker", },
    { name: "Kubernetes", },
    { name: "Azure", },
    { name: "Databricks", },
    { name: "DevOps", },
    { name: "CI/CD", },
    { name: "PyTest", },
    { name: "Shell Scripting", },
    { name: "MLOps", },
  ];

  const leftContent = (
    <div className="relative flex flex-col h-full">
      {/* Main Content */}
      <div className="relative z-10 flex-1 space-y-8 lg:space-y-12">
        {/* Header Section */}
        <div className="space-y-10 lg:space-y-16">
          <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.07em] leading-[0.8]">
            I&apos;m Adolfo
            <br />
            <span className="font-serif italic font-light">López Herrera.</span>
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-background/60 backdrop-blur-md border border-primary/20 rounded-xl">
            <Avatar className="w-16 h-16 border-2 border-primary solid-shadow flex-shrink-0">
              <AvatarImage src="/images/profile.png" alt="ALH" className="object-cover" />
              <AvatarFallback className="text-lg font-bold">ALH</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-black mb-2">Data & MLOps Engineer</h2>
              <div className="flex flex-wrap gap-2 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/20">
                  <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="font-medium">London, UK</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/20">
                  <Globe className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="font-medium">From Spain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            I&apos;m a Data and MLOps Engineer passionate about building <span className="font-bold text-primary underline decoration-primary/30 underline-offset-4 font-serif italic">robust and scalable data platforms</span>. I thrive on bridging the gap between data engineering and machine learning, creating automated systems that turn raw data into production-ready models.
          </p>
          <p className="text-sm leading-relaxed font-serif italic">
            My expertise lies in designing and implementing MLOps infrastructure, CI/CD pipelines, and scalable data processing solutions using technologies like <span className="font-bold text-primary">Docker</span>, <span className="font-bold text-primary">Kubernetes</span>, <span className="font-bold text-primary">Azure</span>, and <span className="font-bold text-primary">Databricks</span>. I am always looking to learn and grow in the ever-evolving field of data and AI.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill.name} variant="outline">{skill.name}</Badge>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group text-center p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-3 h-3 text-primary" />
                    </div>
                    <div className="text-lg font-black text-primary">{stat.value}</div>
                    <div className="text-xs text-center leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className="relative h-full">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-10 text-right">
          <h2 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.07em] leading-[0.8]">
            My Career
            <br />
            <span className="font-serif italic font-light">journey.</span>
          </h2>
        </div>
        
        {/* Timeline Container - now adapts to content */}
        <div className="flex-1 relative min-h-0">
          {/* Timeline line - adapts to container height */}
          <div className="absolute right-5 sm:right-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-10 pr-12 sm:pr-24 lg:pr-0 pb-8">
            {timelineData.map((item, index) => {
              const isRightSide = index % 2 === 0;
              return (
              <div key={index} className={cn("relative group lg:w-1/2", isRightSide ? "lg:ml-auto lg:pl-10" : "lg:pr-10")}>
                {/* Timeline node - centered with the line */}
                <div className={cn(
                  "absolute top-4 flex items-center justify-center z-10",
                  "-right-[43px] sm:-right-[75px]", // Default for smaller screens
                  "lg:left-auto lg:right-auto",    // Reset for large screens
                  isRightSide ? "lg:left-0 lg:-translate-x-1/2" : "lg:right-0 lg:translate-x-1/2"
                )}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background text-primary flex items-center justify-center solid-shadow border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                
                {/* Compact timeline card */}
                <div 
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "bg-background backdrop-blur-md border border-primary solid-shadow hover:border-primary/40 transition-all duration-300 cursor-pointer rounded-xl p-3 sm:p-4 text-right group-hover:transform group-hover:-translate-y-1",
                    isRightSide ? "lg:text-left" : "lg:text-right"
                  )}
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-xs font-mono text-primary animate-fade-in">{item.date}</div>
                    <h3 className="text-base sm:text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-serif italic text-primary">
                      {item.type === 'work' ? item.company : item.institution}
                    </p>
                    <div className={cn("flex items-center justify-end gap-1 text-xs", isRightSide ? "lg:justify-start" : "lg:justify-end")}>
                      <MapPin className="w-3 h-3" />
                      {item.location}
                      <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>

      <Drawer open={activeItem !== null} onOpenChange={(open) => !open && setActiveItem(null)}>
        <DrawerContent className="bg-background/95 backdrop-blur-md border-primary/20 text-foreground">
          {activeItem && (
            <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 w-full">
              <DrawerHeader className="relative p-0 mb-4 sm:mb-6 text-left">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background text-primary flex items-center justify-center solid-shadow border-2 border-primary flex-shrink-0 mt-1">
                      {activeItem.icon}
                    </div>
                    <div className="text-left">
                      <DrawerTitle className="text-xl sm:text-2xl font-bold">{activeItem.title}</DrawerTitle>
                      <DrawerDescription className="text-sm font-serif italic text-primary">
                        {activeItem.type === 'work' ? activeItem.company : activeItem.institution}
                      </DrawerDescription>
                      <p className="text-xs mt-1">{activeItem.date} • {activeItem.location}</p>
                    </div>
                  </div>
                </div>
              </DrawerHeader>
              
              <p className="text-base leading-relaxed mb-4 sm:mb-6">{activeItem.description}</p>
              
              <div className="mb-4 sm:mb-6">
                <h5 className="text-base font-semibold mb-2 sm:mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {activeItem.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {activeItem.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="minimal">{highlight}</Badge>
                ))}
              </div>

              <DrawerFooter className="p-0 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/10">
                <p className="text-xs text-center">
                  Further details available upon request.
                </p>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );

  return (
    <SectionLayout
      id="about"
      leftContent={leftContent}
      rightContent={rightContent}
      sectionIndex={0}
      gradientClass="gradient-sunset"
      className=""
    />
  );
}
