import { Link } from "react-scroll";

export default function NavLinks() {
  return (
    <>
      <Link to='main' smooth={true} duration={500} className='cursor-pointer'>
        Main
      </Link>
      <Link
        to='aboutMe'
        smooth={true}
        duration={500}
        className='cursor-pointer'>
        About Me
      </Link>
      <Link
        to='experience'
        smooth={true}
        duration={500}
        className='cursor-pointer'>
        Experence
      </Link>
      <Link
        to='certification'
        smooth={true}
        duration={500}
        className='cursor-pointer'>
        Certification
      </Link>
      <Link
        to='projects'
        smooth={true}
        duration={500}
        className='cursor-pointer'>
        Projects
      </Link>
      <Link
        to='contact'
        smooth={true}
        duration={500}
        className='cursor-pointer'>
        Contact
      </Link>
    </>
  );
}
