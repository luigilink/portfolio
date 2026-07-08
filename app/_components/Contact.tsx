import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { Section } from "./Section";

const LINKEDIN_URL = "https://www.linkedin.com/in/jean-cyril-drouhin/";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center gap-6 text-center py-4">
      <div className="flex flex-col gap-3">
        <h2 className="font-caption text-3xl md:text-4xl font-bold text-primary">
          Let&apos;s work together
        </h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Interested in SharePoint, PowerShell DSC, M365 or Azure architecture?
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Feel free to reach out and connect.
        </p>
      </div>
      <Link
        href={LINKEDIN_URL}
        target="_blank"
        className={cn(
          buttonVariants({ size: "lg" }),
          "gap-2 group bg-blue-600 text-white hover:bg-blue-500"
        )}
      >
        <LinkedinIcon
          size={18}
          className="group-hover:scale-110 transition-transform"
        />
        Connect on LinkedIn
      </Link>
    </Section>
  );
};
