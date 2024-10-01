import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Spacing size="md"></Spacing>
      <Hero></Hero>
    </main>
  );
}
