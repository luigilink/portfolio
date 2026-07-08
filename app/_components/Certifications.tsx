import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

type CertificationProps = {
  title: string;
  issuer: string;
};

const TRANSCRIPT_URL =
  "https://learn.microsoft.com/en-us/users/jcdrouhin/transcript";

const CERTIFICATIONS: CertificationProps[] = [
  {
    title: "Implementing Microsoft Azure Infrastructure Solutions",
    issuer: "Microsoft Specialist",
  },
  {
    title: "Microsoft Certified Professional",
    issuer: "Microsoft",
  },
  {
    title: "SharePoint Administrator 2010",
    issuer: "Microsoft Certified IT Professional",
  },
  {
    title: "SharePoint 2010, Configuration",
    issuer: "Microsoft Certified Technology Specialist",
  },
];

const Certification = (props: CertificationProps) => {
  return (
    <div className="group relative flex flex-col gap-3 flex-1 p-6 rounded-2xl border border-white/5 bg-glass-gradient shadow-glass backdrop-blur-xs transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

      <div className="flex items-start gap-3">
        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors shrink-0">
          <Award
            size={24}
            className="text-blue-400 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70">
            {props.issuer}
          </p>
          <h3 className="text-base font-semibold leading-snug">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export const Certifications = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="flex items-end justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="font-caption text-3xl font-bold text-primary">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>
        <Link
          href={TRANSCRIPT_URL}
          target="_blank"
          aria-label="View full transcript on Microsoft Learn"
          className="group inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-blue-400 transition-colors"
        >
          View transcript
          <ExternalLink
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {CERTIFICATIONS.map((cert) => (
          <Certification key={cert.title} {...cert} />
        ))}
      </div>
    </Section>
  );
};
