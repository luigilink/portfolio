import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-8 py-6">
      <Section className="flex max-md:flex-col items-center justify-between gap-2 text-xs text-muted-foreground/70 font-mono">
        <p>© {year} Jean-Cyril Drouhin</p>
        <Link
          href="/mentions-legales"
          className="hover:text-blue-400 transition-colors"
        >
          Legal notice · Mentions légales
        </Link>
      </Section>
    </footer>
  );
};
