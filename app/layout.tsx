import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Anek_Telugu } from "next/font/google";
import { Analytics } from "./_components/Analytics";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const siteUrl = "https://spjc.fr";
const title = "SPJC · SharePoint Guy";
const description =
  "Portfolio of Jean-Cyril Drouhin — SharePoint & M365 specialist and Cloud Solution Architect. Infrastructure as Code with PowerShell DSC, ARM templates and Azure DevOps.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "SharePoint",
    "M365",
    "PowerShell",
    "Azure",
    "Cloud Solution Architect",
    "Infrastructure as Code",
    "DSC",
  ],
  authors: [{ name: "Jean-Cyril Drouhin", url: siteUrl }],
  creator: "Jean-Cyril Drouhin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: title,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@luigilinkwii",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jean-Cyril Drouhin",
  alternateName: "JC",
  url: siteUrl,
  jobTitle: "Cloud Solution Architect",
  worksFor: {
    "@type": "Organization",
    name: "Microsoft",
  },
  knowsAbout: [
    "SharePoint",
    "Microsoft 365",
    "PowerShell",
    "Azure",
    "Infrastructure as Code",
  ],
  sameAs: [
    "https://github.com/luigilink",
    "https://www.linkedin.com/in/jean-cyril-drouhin/",
    "https://twitter.com/luigilinkwii",
    "https://www.instagram.com/luigilinkwii/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
