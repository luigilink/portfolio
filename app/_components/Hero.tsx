"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SelfPortraitImg from "../images/selfportrait.jpg";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-8 py-10">
      <div className="flex-3 flex flex-col gap-4">
        <h1 className="font-caption font-bold text-6xl text-primary tracking-tight">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            JC
          </span>
        </h1>
        
        <div className="h-12">
          <h2 className="font-caption text-3xl md:text-4xl text-foreground/90 italic">
            <Typewriter
              words={[
                "A SharePoint Guy",
                "Cloud Solution Architect",
                "PowerShell Wizard",
                "DevOps Engineer",
                "Passionate Geek",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>
        <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
          With a deep-rooted background in <span className="text-primary font-semibold">SharePoint</span>, I operate at the intersection of Infrastructure and Development. 
          As a M365 specialist, I design scalable and secure Cloud architectures on Azure. I specialize in turning complex infrastructures into code (IaC) using <span className="text-blue-400 font-bold">PowerShell DSC</span>, ARM Templates, and <span className="text-blue-400 font-bold">Azure DevOps pipelines</span> to drive operational excellence.
        </p>
      </div>

      <div className="flex-2 relative group">
        <div className="absolute inset-0 border border-white/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
        <div className="relative">
          <Image
            className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/20 shadow-lg"
            src={SelfPortraitImg}
            alt="Jean-Cyril Drouhin - SharePoint Guy"
            priority
          />
        </div>
      </div>
    </Section>
  );
};