import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default HomePage;