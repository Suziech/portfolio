import Main from "@/containers/Main";
import AboutMe from "@/containers/AboutMe";
import Experience from "@/containers/Experience";
import Certification from "@/containers/Certification";
import Projects from "@/containers/Projects";
import Contact from "@/containers/Contact";
export default async function Page() {
  return (
    <>
      <Main />
      <AboutMe />
      <Experience />
      <Certification />
      <Projects />
      <Contact />
    </>
  );
}
