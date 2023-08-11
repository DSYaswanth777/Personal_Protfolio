import Header from "@/components/header";
import Hero_Section from "@/components/hero_Section";
import Personal_Info from "@/components/personal_Info";
import Projects_Section from "@/components/projects_Section";
import Skils_Section from "@/components/skils_Section";
import Contactme_Section from "@/components/contactme_section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    // <h1 className="text-center text-6xl font-bold pt-80" >Yaswanth's Personal Protfolio</h1>
    <div>
      <Header />
      <Hero_Section />
      <Skils_Section/>
      <Personal_Info />
      <Projects_Section/>
      <Contactme_Section/>
      <Footer/>
    </div>
  );
}
