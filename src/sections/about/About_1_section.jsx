import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { aboutGoals, about_intro_part_1, about_intro_part_2, centerVariants } from "../../constants";
import styles, { layout } from "../../style";
import { motion } from "framer-motion";

const About_1_section = () => {
	return (
		<motion.section id='about_1' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`${layout.section}`} >
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h1 className={`flex flex-col text-white items-center md:items-start font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]`}>About us</h1>
					<p className={`${styles.paragraph} text-white`}>
						{about_intro_part_1}
					</p>
					<p className={`${styles.paragraph} text-white mt-6`}>{about_intro_part_2}</p>
				</motion.div>

				<motion.div variants={centerVariants} className='flex-1 flex justify-center items-center sm:px-16 px-6'>
					<ul className="md:mt-0 mt-6">
						{aboutGoals.map((item) => (
							<li key={item.key} className='pt-2 flex flex-row items-top text-xl text-white'>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain text-white pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left text-white`}>{item.goal}</p>
							</li>
						))}
					</ul>
				</motion.div>
		</motion.section>
	);
};

export default About_1_section;
