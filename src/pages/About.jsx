import About_1_section from "../sections/about/About_1_section";
import About_2_section from "../sections/about/About_2_section";
import About_3_section from "../sections/about/About_3_section";

import { about_section_1, about_section_3 } from "../assets";
import { motion } from "framer-motion";
import styles from "../style";

const About = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} className="w-full">
			<div className={`${styles.bg_about_1} ${styles.flexCenter}  w-full`} style={{ backgroundImage: `url(${about_section_1})` }}>
				<div className={`${styles.boxWidth}`}>
					<About_1_section />
				</div>
			</div>
			<div className={`${styles.bg_about_2} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<About_2_section />
				</div>
			</div>
			<div className={`${styles.bg_about_3} ${styles.flexCenter} w-full`} style={{ backgroundImage: `url(${about_section_3})` }}>
				<div className={`${styles.boxWidth}`}>
					<About_3_section />
				</div>
			</div>
		</motion.div>
	);
};

export default About;
