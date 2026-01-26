import Image, { StaticImageData } from "next/image";
import AzureLogo from "../images/Azure.svg";
import Microsoft365Logo from "../images/Microsoft365.svg";
import PowerShellLogo from "../images/Powershell.svg";
import { Section } from "./Section";

type SkillProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

const SKILLS: SkillProps[] = [
  {
    image: Microsoft365Logo,
    title: "M365",
    description:
      "I love working with SharePoint, OneDrive, and Power Platform to enhance collaboration, streamline workflows, and boost productivity within organizations.",
  },
  {
    image: AzureLogo,
    title: "Azure",
    description:
      "I enjoy working with Azure infrastructure, especially Azure Resource Manager and Azure Automation, to architect scalable, secure, and modern cloud solutions.",
  },
  {
    image: PowerShellLogo,
    title: "PowerShell",
    description:
      "Automating tasks with PowerShell scripts, including CI/CD pipelines, brings efficiency and consistency to IT operations, driving smoother deployments and streamlined processes.",
  },
];

const Skill = (props: SkillProps) => {
  return (
    <div className="group relative flex flex-col gap-3 flex-1 p-6 rounded-2xl border border-white/5 bg-glass-gradient shadow-glass backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
      
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
          <Image
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
            src={props.image}
            alt={props.title}
          />
        </div>
        <h3 className="text-xl font-bold tracking-tight">{props.title}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {props.description}
      </p>
    </div>
  );
};

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-caption text-3xl font-bold text-primary">
          Core Expertise
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {SKILLS.map((skill, index) => (
          <Skill
            key={index}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </Section>
  );
};
