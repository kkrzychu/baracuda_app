
import About_1_section from '../sections/about/About_1_section'
import About_2_section from '../sections/about/About_2_section'
import About_3_section from '../sections/about/About_3_section'

import { about_section_1, about_section_3 } from '../assets'

import styles from "../style";

const Contact = () => {
  return (
    <>
        <div className={`${styles.bg_about_1} ${styles.paddingX}`} style={{backgroundImage: `url(${about_section_1})`}}><About_1_section /></div>
        <div className={`${styles.bg_about_2} ${styles.paddingX}`}><About_2_section /></div>
        <div className={`${styles.bg_about_3} ${styles.paddingX}`} style={{backgroundImage: `url(${about_section_3})`}}><About_3_section /></div>
    </>
  );
};

export default Contact;
