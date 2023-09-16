import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Articles from "./Components/Articles";
import ParticleComponent from "./ParticleComponent";

export default function Home() {
  return (
    <main >
      <Main />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
      <ParticleComponent />
    </main>
  )
}
