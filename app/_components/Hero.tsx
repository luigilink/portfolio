"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SelfPortraitImg from "./assets/selfportrait.jpg";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Hi I&apos;m JC !
        </h2>
        <h2 className="font-caption text-4xl">
          <Typewriter
            words={[
              "A SharePoint Guy",
              "SharePoint Developer",
              "PowerShell Developer",
              "DevOps Engineer",
              "Passionate Geek",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="font-mono text-2ml">
          I have an extensive background in SharePoint, with skills in
          Infrastructure and development. I also contribute to open source
          projects on Github around M365 and PowerShell DSC. I&apos;ve also been
          playing a lot with Azure, especially around Azure Resource Manager
          templates, Azure DevOps Pipelines and DSC deployment.
        </p>
      </div>
      <div className="flex-[2]">
        <Image
          className="w-full h-auto max-w-xs rounded-full"
          src={SelfPortraitImg}
          alt="SharePoint Guy Picture"
        ></Image>
      </div>
    </Section>
  );
};
