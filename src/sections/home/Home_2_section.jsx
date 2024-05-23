import { strap_1, strap_2, strap_3, strap_4 } from "../../assets";
import { home_sec_2_h, home_sec_2_desc, leftVariants, rightVariants } from "../../constants";
import { motion } from "framer-motion";
import styles, { layout } from "../../style";
import Button from "../../components/Button";



const Home_2_section = () => {
	
	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} id='home_2' className={layout.section}>
			<motion.div variants={leftVariants} className={`${layout.sectionInfo} md:items-start xl:px-0 sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-black`}>{home_sec_2_h}</h2>

				<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>{home_sec_2_desc}</p>

				<Button to={"products"} text={"View products"} styles={"mt-6"} />
			</motion.div>

			<motion.div variants={rightVariants} className={`flex-1 flex justify-center items-start flex-row md:items-start xl:px-0 sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='flex flex-1 h-full flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_1} />
					<img className=' h-[100%] object-contain' src={strap_2} />
				</div>

				<div className='flex flex-1 h-full flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
					<img className=' h-[100%] object-contain' src={strap_4} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Home_2_section;
