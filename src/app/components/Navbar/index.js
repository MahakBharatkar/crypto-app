import styles from "./styles.module.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      offset: -50,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_item}>
      <ScrollLink
            to="section1"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onClick={() => scrollToSection('section1')}
          >
            Homepage
          </ScrollLink>
        </div>
      <div className={styles.menu_item}>
      <ScrollLink
            to="section2"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onClick={() => scrollToSection('section2')}
          >
            Cryptoconverter
          </ScrollLink>
        </div>
    </div>
  );
};

export default Navbar;
