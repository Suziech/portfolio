import { Link } from "react-scroll";

export default function NavLinks() {
  return (
    <>
      <Link to='main' smooth={true} duration={500}>
        Main
      </Link>
      <Link to='aboutMe' smooth={true} duration={500}>
        About Me
      </Link>
      <Link to='experience' smooth={true} duration={500}>
        Experence
      </Link>
      <Link to='certification' smooth={true} duration={500}>
        Certification
      </Link>
      <Link to='projects' smooth={true} duration={500}>
        Projects
      </Link>
      <Link to='contact' smooth={true} duration={500}>
        Contact
      </Link>
    </>
  );
}
