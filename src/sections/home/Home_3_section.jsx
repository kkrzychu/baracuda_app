import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { strap_1, strap_3 } from "../../assets";
import styles, { layout } from "../../style";
import { home_sec_3_h, home_sec_3_desc, leftVariants, rightVariants } from "../../constants";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const Home_3_section = () => {
	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} id='home_3' className={layout.sectionReverse}>
			<motion.div variants={rightVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{home_sec_3_h}</h2>

				<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{home_sec_3_desc}</p>

				<Button to={'contact'} text={'Ask us'} styles={"mt-6"} />

			</motion.div>

			<motion.div variants={leftVariants} className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='w-[100%] h-[150px] bg-white flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_1} />
				</div>

				<div className='w-[100%] flex justify-center my-6 items-center'>
					<FontAwesomeIcon icon={faAnglesDown} className='w-[30px] text-white h-[30px]' />
				</div>

				<div className='w-[100%] h-[150px] bg-white flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Home_3_section;
