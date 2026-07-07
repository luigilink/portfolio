import { Card } from "@/components/ui/card";
import { getTopProjects, type Project } from "@/lib/github";
import {
  Boxes,
  Braces,
  Code,
  FileCode,
  Globe,
  Star,
  Terminal,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import CAGIPLogo from "../images/CAGIP.png";
import MSLogo from "../images/Microsoft.jpg";
import { Section } from "./Section";

// --- TYPES ---

type WorkProps = {
  image: StaticImageData;
  title: string;
  role: string;
  date: string;
};

// --- DATA ---

const ProjectIcon = ({ language }: { language: string | null }) => {
  switch (language) {
    case "PowerShell":
      return <Terminal size={20} />;
    case "HCL":
      return <Boxes size={20} />;
    case "Python":
      return <FileCode size={20} />;
    case "TypeScript":
    case "JavaScript":
      return <Braces size={20} />;
    case "HTML":
      return <Globe size={20} />;
    default:
      return <Code size={20} />;
  }
};

const WORKS: WorkProps[] = [
  {
    image: MSLogo,
    title: "Microsoft",
    role: "Cloud Solution Architect",
    date: "Feb 2025 - Present",
  },
  {
    image: CAGIPLogo,
    title: "CAGIP",
    role: "Infrastructure Engineer",
    date: "May 2021 - Jan 2025",
  },
  {
    image: MSLogo,
    title: "Microsoft",
    role: "Support Mission Critical Customer Lead M365 | SharePoint PFE",
    date: "Nov 2011 - Apr 2021",
  },
];

// --- SUB-COMPONENTS ---

const SideProject = (props: Project) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="group flex items-center gap-4 hover:bg-white/5 transition-all p-2 rounded-xl border border-transparent hover:border-white/10"
    >
      <span className="bg-accent/30 text-accent-foreground p-3 rounded-lg group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all duration-300">
        <ProjectIcon language={props.language} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold group-hover:text-blue-400 transition-colors truncate">
            {props.name}
          </p>
          {props.stars > 0 && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/70 bg-white/5 px-1.5 py-0.5 rounded shrink-0">
              <Star size={10} className="fill-current" />
              {props.stars}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-snug">
          {props.description}
        </p>
        {props.language && (
          <p className="text-[10px] font-mono text-muted-foreground/50 mt-0.5">
            {props.language}
          </p>
        )}
      </div>
    </Link>
  );
};

const Work = (props: WorkProps) => {
  return (
    <div className="flex items-start gap-4 group">
      <Image
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-lg group-hover:scale-105 transition-transform"
      />
      <div className="flex flex-col">
        <p className="text-base font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground italic leading-tight mb-1">{props.role}</p>
        <p className="text-[10px] font-mono text-muted-foreground/60 bg-white/5 w-fit px-2 py-0.5 rounded">
          {props.date}
        </p>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

export const Status = async () => {
  const projects = await getTopProjects();

  return (
    <Section className="flex max-md:flex-col items-stretch gap-4">
      {/* SIDE PROJECTS CARD */}
      <div className="flex-3 w-full">
        <Card className="flex p-6 flex-col gap-4 bg-glass-gradient border-white/5 shadow-glass backdrop-blur-xs">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Latest Projects</p>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <SideProject key={project.name} {...project} />
            ))}
          </div>
        </Card>
      </div>

      {/* WORK & LINKS CARD */}
      <div className="flex-2 w-full">
        <Card className="flex p-6 flex-col gap-4 bg-glass-gradient border-white/5 shadow-glass backdrop-blur-xs">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Work</p>
          <div className="flex flex-col gap-6 flex-1">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>

          <hr className="border-white/10 my-1.5" />

          <div className="flex flex-col gap-2">
            {/* LinkedIn */}
            <Link
              className="inline-flex items-center gap-4 hover:bg-white/5 transition-all p-2 rounded-lg text-sm font-mono group"
              href="https://www.linkedin.com/in/jean-cyril-drouhin/"
              target="_blank"
            >
              <LinkedinIcon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="group-hover:translate-x-1 transition-transform">View More on LinkedIn</span>
            </Link>
          </div>
        </Card>
      </div>
    </Section>
  );
};
