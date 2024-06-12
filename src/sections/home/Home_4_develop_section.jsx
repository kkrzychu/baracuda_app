import { developing } from "../../assets";
import styles, { layout } from "../../style";
import { home_sec_4_dev_h, home_sec_4_dev_desc, centerVariants } from "../../constants";
import { motion } from "framer-motion";

const Home_4_develop_section = () => {

    return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} id='home_3' className={`${layout.sectionReverse}  md:mb-20`}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{home_sec_4_dev_h}</h2>

				<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{home_sec_4_dev_desc}</p>

			</motion.div>

			<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='w-full h-full  flex flex-col  box-shadow '>
					<img className='w-full h-full object-cover rounded-xl' src={developing} />
				</div>
			</motion.div>
		</motion.section>
	);
}

export default Home_4_develop_section