import react from "react"
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./skills_components/Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function HomePage(){
    return (<>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
    )
}
