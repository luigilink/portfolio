import { Certifications } from "./_components/Certifications";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 animate-mesh text-slate-50 overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4">
        <Header />
        <Hero />
        <Status />
        <Spacing size="sm" />
        <Skills />
        <Spacing size="sm" />
        <Certifications />
        <Spacing size="sm" />
      </div>
    </main>
  );
}
