
import Contact_1_section from '../sections/contact/Contact_1_section'
import Contact_2_section from '../sections/contact/Contact_2_section'

import styles from "../style";

const Contact = () => {
  return (
    <>
        <div className={`${styles.bg_contact_1} ${styles.paddingX}`}><Contact_1_section /></div>
        <div className={`${styles.bg_contact_2} ${styles.paddingX}`}><Contact_2_section /></div>
    </>
  );
};

export default Contact;
