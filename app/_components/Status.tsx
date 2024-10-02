import { Card } from "@/components/ui/card";
import {
  CloudSun,
  HardDriveDownload,
  LucideIcon,
  LucideServer,
  ShieldCheck,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Section } from "./Section";
import CAGIPLogo from "./assets/CAGIP.png";
import MSLogo from "./assets/Microsoft.png";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full">
        <Card className="flex p-4 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side Project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact Me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: LucideServer,
    title: "SPSWakeUp",
    description:
      "SPSWakeUp is a PowerShell script tool to warm up all site collection in your SharePoint environment.",
    url: "https://github.com/luigilink",
  },
  {
    Logo: ShieldCheck,
    title: "SPSTrust",
    description:
      "SPSTrust is a PowerShell script tool to configure trust Farm in your SharePoint environment.",
    url: "https://github.com/luigilink",
  },
  {
    Logo: HardDriveDownload,
    title: "SPSUpdate",
    description:
      "SPSUpdate is a PowerShell script tool to install cumulative updates in your SharePoint environment.",
    url: "https://github.com/luigilink",
  },
  {
    Logo: CloudSun,
    title: "SPSWeather",
    description:
      "SPSWeather is a PowerShell script tool to have a status of your SharePoint environment.",
    url: "https://github.com/luigilink",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: CAGIPLogo,
    title: "CAGIP",
    role: "Infrastructure Engineer Expert",
    date: "May 2021 - Present",
  },
  {
    image: MSLogo,
    title: "Microsoft",
    role: "Support Mission Critical Customer Lead M365",
    date: "Nov 2017 - Apr 2021",
  },
  {
    image: MSLogo,
    title: "Microsoft",
    role: "SharePoint Premier Field Engineer",
    date: "Nov 2011 - Nov 2017",
  },
];

type WorkProps = {
  image: StaticImageData;
  title: string;
  role: string;
  date: string;
};

const Work = (props: WorkProps) => {
  return (
    <div className="inline-flex items-center gap-4 p-1 rounded">
      <Image
        src={props.image}
        alt={props.title}
        className="w-11 h-11 object-contain rounded-md"
      ></Image>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
        <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
      {/*       <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div> */}
    </div>
  );
};
