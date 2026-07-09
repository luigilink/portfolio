import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "../_components/Section";

export const metadata: Metadata = {
  title: "Legal Notice · Mentions légales — SPJC",
  description: "Legal notice and publishing information for spjc.fr.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

type BlockProps = {
  title: string;
  children: React.ReactNode;
};

const Block = ({ title, children }: BlockProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400">
      {title}
    </h3>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

export default function MentionsLegales() {
  return (
    <main className="relative min-h-screen bg-slate-950 animate-mesh text-slate-50 overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 py-10">
        <Section className="flex flex-col gap-8 max-w-2xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-blue-400 transition-colors w-fit"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to home
          </Link>

          {/* FRENCH */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-caption text-3xl font-bold text-primary">
                Mentions légales
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>

            <Block title="Éditeur">
              <p>
                Ce site personnel (portfolio non commercial) est édité par
                Jean-Cyril Drouhin.
              </p>
              <p>
                Contact :{" "}
                <Link
                  href="https://www.linkedin.com/in/jean-cyril-drouhin/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  via LinkedIn
                </Link>
                .
              </p>
            </Block>

            <Block title="Hébergement">
              <p>
                Microsoft Azure (Microsoft Corporation, One Microsoft Way,
                Redmond, WA 98052, États-Unis). Région d&apos;hébergement :
                France Central.
              </p>
            </Block>

            <Block title="Nom de domaine">
              <p>
                Le domaine spjc.fr est enregistré auprès d&apos;OVH (OVH SAS,
                2 rue Kellermann, 59100 Roubaix, France).
              </p>
            </Block>

            <Block title="Propriété intellectuelle">
              <p>
                Sauf mention contraire, le contenu de ce site est la propriété
                de son éditeur. Le code source est publié sous licence MIT.
              </p>
            </Block>

            <Block title="Données personnelles">
              <p>
                Ce site utilise Azure Application Insights à des fins de mesure
                d&apos;audience, sans cookie de suivi.
              </p>
            </Block>
          </div>

          <hr className="border-white/10" />

          {/* ENGLISH */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="font-caption text-3xl font-bold text-primary">
                Legal Notice
              </h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>

            <Block title="Publisher">
              <p>
                This personal website (non-commercial portfolio) is published by
                Jean-Cyril Drouhin.
              </p>
              <p>
                Contact:{" "}
                <Link
                  href="https://www.linkedin.com/in/jean-cyril-drouhin/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  via LinkedIn
                </Link>
                .
              </p>
            </Block>

            <Block title="Hosting">
              <p>
                Microsoft Azure (Microsoft Corporation, One Microsoft Way,
                Redmond, WA 98052, USA). Hosting region: France Central.
              </p>
            </Block>

            <Block title="Domain name">
              <p>
                The spjc.fr domain is registered with OVH (OVH SAS, 2 rue
                Kellermann, 59100 Roubaix, France).
              </p>
            </Block>

            <Block title="Intellectual property">
              <p>
                Unless otherwise stated, the content of this site belongs to its
                publisher. The source code is released under the MIT license.
              </p>
            </Block>

            <Block title="Personal data">
              <p>
                This site uses Azure Application Insights for audience
                measurement, without tracking cookies.
              </p>
            </Block>
          </div>
        </Section>
      </div>
    </main>
  );
}
