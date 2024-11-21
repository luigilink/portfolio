import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">SPJC</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/luigilink"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground"></GithubIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jean-cyril-drouhin/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground"></LinkedinIcon>
          </Link>
          <Link
            href="https://twitter.com/luigilinkwii"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={16} className="text-foreground"></TwitterIcon>
          </Link>
          <Link
            href="https://www.instagram.com/luigilinkwii/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <InstagramIcon
              size={16}
              className="text-foreground"
            ></InstagramIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
