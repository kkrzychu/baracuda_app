import Contact_1_section from "../sections/contact/Contact_1_section";
import Contact_2_section from "../sections/contact/Contact_2_section";

import styles from "../style";

const Contact = () => {
	return (
		<>
			<div className={`${styles.bg_contact_1} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Contact_1_section />
				</div>
			</div>
			<div className={`${styles.bg_contact_2} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Contact_2_section />
				</div>
			</div>
		</>
	);
};

export default Contact;
