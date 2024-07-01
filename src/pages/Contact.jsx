import Contact_1_section from "../sections/contact/Contact_1_section";
import Contact_2_section from "../sections/contact/Contact_2_section";
import { motion } from "framer-motion";
import styles from "../style";
import { bg_diver} from "../assets";

const Contact = () => {
	return (
		// <motion.div initial="initial"
		// animate="in"
		// exit="out"
		// variants={pageVariants}
		// transition={pageTransition} className="w-full">
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} className="w-full">

			<div className={`${styles.bg_contact_1} ${styles.flexCenter} w-full`} style={{ backgroundImage: `url(${bg_diver})` }}>
				<div className={`${styles.boxWidth}`}>
					<Contact_1_section />
				</div>
			</div>

			<div className={`${styles.bg_contact_2} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Contact_2_section />
				</div>
			</div>

		</motion.div>
	);
};

export default Contact;
