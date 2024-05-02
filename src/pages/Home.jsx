import Home_1_section from "../sections/home/Home_1_section";
import Home_2_section from "../sections/home/Home_2_section";
import Home_3_section from "../sections/home/Home_3_section";
import Home_4_section from "../sections/home/Home_4_section";
import Home_5_section from "../sections/home/Home_5_section";
import Home_6_section from "../sections/home/Home_6_section";

import { home_section_1 } from "../assets";

import styles from "../style";

const Home = () => {
	return (
		<>
			<div className={`${styles.bg_home_1} ${styles.flexCenter} w-full`} style={{ backgroundImage: `url(${home_section_1})` }}>
				<div className={`${styles.boxWidth}`}>
					<Home_1_section />
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
      <div className={`${styles.bg_home_5} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_5_section />
				</div>
			</div>
      <div className={`${styles.bg_home_6} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Home_6_section />
				</div>
			</div>
		</>
	);
};

export default Home;
