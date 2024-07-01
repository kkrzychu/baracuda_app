import Home_1_section from "../sections/home/Home_1_section";
import Home_2_section from "../sections/home/Home_2_section";
import Home_3_section from "../sections/home/Home_3_section";
import Home_4_section from "../sections/home/Home_4_section";
import Home_5_section from "../sections/home/Home_5_section";
import Home_6_section from "../sections/home/Home_6_section";
import Home_2_cards_section from "../sections/home/Home_2_cards_section";
import Home_4_develop_section from "../sections/home/Home_4_develop_section";


import { home_section_1 } from "../assets";
import { motion } from "framer-motion";
import styles from "../style";

const Home = () => {
	return (
		
		// <motion.div initial="initial"
		// animate="in"
		// exit="out"
		// variants={pageVariants}
		// transition={pageTransition} className="w-full">
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} className="w-full">
			<div className={`${styles.bg_home_1} ${styles.flexCenter} w-full`} style={{ backgroundImage: `url(${home_section_1})` }}>
				<div className={`${styles.boxWidth}`}>
					<Home_1_section />
				</div>
			</div>
			<div className={`${styles.bg_home_2} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_2_cards_section />
				</div>
			</div>
			<div className={`${styles.bg_home_2} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_2_section />
				</div>
			</div>
			<div className={`${styles.bg_home_3} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_3_section />
				</div>
			</div>
			<div className={`${styles.bg_home_4} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_4_section />
				</div>
			</div>
			<div className={`${styles.bg_home_4} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_4_develop_section />
				</div>
			</div>
			<div className={`${styles.bg_home_5} ${styles.flexCenter} w-full`}>
				<div className={`xl:max-w-[1280px]  w-[95%] rounded-xl`}>
					<Home_5_section />
				</div>
			</div>
			<div className={`${styles.bg_home_6} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_6_section />
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
