import { girl_1} from "../../assets";
import { home_sec_2_h, home_sec_2_desc, centerVariants } from "../../constants";
import { motion } from "framer-motion";
import styles, { layout } from "../../style";
import Button from "../../components/Button";



const Home_2_section = () => {
	
	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true}} id='home_2' className={layout.section}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start xl:px-0 sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{home_sec_2_h}</h2>

				<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{home_sec_2_desc}</p>

				<Button to={"products"} text={"View products"} styles={"mt-6"} />
			</motion.div>

			<motion.div variants={centerVariants} className={`flex-1 flex gap-[10px] justify-center items-start flex-row md:items-start xl:px-0 sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='flex flex-1 h-full bg-transparent flex-col rounded-xl box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={girl_1} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Home_2_section;
