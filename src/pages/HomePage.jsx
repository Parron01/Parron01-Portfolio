import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Projects from "../components/MyProjects/Projects";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default HomePage;