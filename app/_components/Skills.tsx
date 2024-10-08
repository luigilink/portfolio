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
    title: "Microsoft 365",
    description:
      " I love working with SharePoint, OneDrive, and Power Platform to enhance collaboration, streamline workflows, and boost productivity within organizations.",
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
    <div className="flex flex-col gap-2 flex-1">
      <div className="inline-flex items-center">
        <Image
          className="w-10 h-10"
          src={props.image}
          alt={props.title}
        ></Image>
        <h3 className="text-2xl font-caption pl-3">{props.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground font-sans text-justify">
        {props.description}
      </p>
    </div>
  );
};

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2 className="font-caption text-4xl scroll-m-20 first:mt-0">
        I love working on
      </h2>
      <div className="flex max-md:flex-col gap-4">
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
