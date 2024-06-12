// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { straps } from "../../assets";
import styles, { layout } from "../../style";
import { home_sec_4_h, home_sec_4_desc, centerVariants } from "../../constants";
import { motion } from "framer-motion";

const Home_4_section = () => {
	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} id='home_4' className={`${layout.section}`}>

				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{home_sec_4_h}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{home_sec_4_desc}</p>
				</motion.div>

				<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className='w-full h-full flex flex-col  bg-white rounded-xl box-shadow p-4 '>
						<img className=' h-[100%] object-contain' src={straps} />
					</div>

					{/* <div className='w-[100%] flex justify-center my-6 items-center'>
						<FontAwesomeIcon icon={faAnglesDown} className='w-[30px] h-[30px] text-white' />
					</div>

					<div className='w-[100%] h-[150px] flex flex-col bg-white rounded box-shadow p-4 '>
						<img className=' h-[100%] object-contain' src={strap_3} />
					</div> */}
				</motion.div>

		</motion.section>
	);
};

export default Home_4_section;
