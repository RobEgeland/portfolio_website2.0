import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main >
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
