import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  Brain,
  Cloud,
  Database,
  Code,
  GitBranch,
  Cpu,
  BarChart3,
  Shield,
  Rocket,
  Target,
  Layers,
  Activity,
  Workflow,
  Container,
  Network,
  Lightbulb,
  ExternalLink,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

export default function Hero() {

  const interests = [
    {
      name: "PyTorch & TensorFlow",
      icon: Brain,
      reason: "Deep learning frameworks for production ML systems"
    },
    {
      name: "Apache Kafka",
      icon: Activity,
      reason: "Real-time data streaming at massive scale"
    },
    {
      name: "Kubernetes Orchestration",
      icon: Cloud,
      reason: "Container orchestration for ML workloads"
    },
    {
      name: "Data Lake Architecture",
      icon: Database,
      reason: "Designing petabyte-scale storage solutions"
    },
    {
      name: "Model Versioning",
      icon: GitBranch,
      reason: "MLOps practices for reproducible ML"
    },
    {
      name: "GPU Computing",
      icon: Cpu,
      reason: "Accelerated computing for ML training"
    },
    {
      name: "A/B Testing Platforms",
      icon: BarChart3,
      reason: "Statistical experimentation at scale"
    },
    {
      name: "Zero-Trust Security",
      icon: Shield,
      reason: "Modern security for distributed systems"
    },
    {
      name: "Performance Engineering",
      icon: Rocket,
      reason: "Optimizing systems for sub-second response"
    },
    {
      name: "Feature Engineering",
      icon: Target,
      reason: "Crafting signals that drive model accuracy"
    },
    {
      name: "Microservices Design",
      icon: Layers,
      reason: "Building maintainable distributed systems"
    },
    {
      name: "Stream Processing",
      icon: Workflow,
      reason: "Real-time analytics on data in motion"
    },
    {
      name: "Docker & Containers",
      icon: Container,
      reason: "Portable deployments across environments"
    },
    {
      name: "Graph Databases",
      icon: Network,
      reason: "Modeling complex relationships in data"
    },
    {
      name: "AutoML Research",
      icon: Lightbulb,
      reason: "Automated machine learning innovations"
    },
    {
      name: "CI/CD Pipelines",
      icon: Code,
      reason: "Automated testing and deployment"
    }
  ];

  return (
    <section className="flex-grow border border-primary border-b-0 w-full gradient-1 py-8 md:py-16 flex flex-col overflow-hidden relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      {/* Main hero content - two column layout */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12">
        {/* Left side - Hero content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Hero title */}
          <div>
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.07em] leading-[0.8]">
              Building data
              <br/>
              infrastructure.
            </h1>
          </div>
          
          {/* Hero subtitle */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl lg:text-3xl font-serif font-extralight italic">
              I build and automate the infrastructure that powers intelligent applications, turning models into <span className="not-italic underline decoration-primary underline-offset-4">production-ready</span> systems.
            </h2>
          </div>

          {/* CTA section */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/Resume.txt" target="_blank" className="font-sans">
                <ExternalLink className="w-4 h-4 mr-1" />
                See Resume
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="#contact" className="font-sans">
                <Mail className="w-4 h-4 mr-1" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        
          {/* Right side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
              <div className="border-4 border-primary solid-shadow rounded-t-full rounded-b-full aspect-[4/5] sm:aspect-[2/3] overflow-hidden max-w-[120px] sm:max-w-[240px] md:max-w-[280px]">
                <Image src="/images/hero.jpg" alt="Profile photo" width={280} height={420} />
              </div>
              <Badge variant="outline" className="bg-background text-primary italic !px-4 !py-1.5 sm:!px-6 sm!py-2 font-light absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8 sm:-right-8 sm:translate-x-0 sm:left-auto whitespace-nowrap text-base sm:text-xl font-serif border-2 border-primary solid-shadow">
                Adolfo López Herrera
              </Badge>
            </div>
          </div>
      </div>

      {/* Current Interests Section - Full width */}
      <div className="mt-auto pt-8 lg:pt-12 pb-4 w-full overflow-hidden">
        <TooltipProvider>
          <div className="flex gap-4 animate-marquee">
            {/* Duplicate interests array for seamless loop */}
            {[...interests, ...interests, ...interests, ...interests].map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Tooltip key={`${interest.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <div className="flex-shrink-0 gap-1">
                      <Badge 
                        variant={"outline"}
                        className="whitespace-nowrap"
                      >
                        <IconComponent className="w-3 h-3 mr-2" />
                        <span className="font-medium">{interest.name}</span>
                      </Badge>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs bg-popover text-popover-foreground border-border">
                    <p className="text-sm">{interest.reason}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
