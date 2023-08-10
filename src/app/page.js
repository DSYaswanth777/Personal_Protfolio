import Header from "@/components/Header";
import Hero_Section from "@/components/Hero_Section";
import Personal_Info from "@/components/Personal_Info";
import Projects_Section from "@/components/Projects_Section";
import Skils_Section from "@/components/Skils_Section";

export default function Home() {
  return (
    // <h1 className="text-center text-6xl font-bold pt-80" >Yaswanth's Personal Protfolio</h1>
    <div>
      <Header />
      <Hero_Section />
      <Skils_Section/>
      <Personal_Info />
      <Projects_Section/>
    </div>
  );
}
