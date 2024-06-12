import { centerVariants, products_strap_versions_desc } from "../../constants";
import styles from "../../style";
import { motion } from "framer-motion";

const Products_5_section = () => {
	return (
		<motion.section id='product_5' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`flex flex-col justify-center items-center ${styles.paddingY} md:mb-20 mb-10`}>
			<motion.div variants={centerVariants} className='flex flex-col w-full text-white justify-center items-center p-6'>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-center text-white`}>Two strap versions</h2>

				<p className='w-full md:w-[80%] text-white text-center font-poppins font-normal text-[18px] leading-[30.8px] mb-10'>{products_strap_versions_desc}</p>
			</motion.div>

			<motion.div variants={centerVariants} className='flex md:flex-row flex-col md:justify-around md:gap-0 gap-10 items-center w-[100%]'>
				<div className='flex flex-col bg-white rounded md:w-[35%] w-[80%] h-[400px]'></div>
				<div className='flex flex-col bg-white rounded md:w-[35%] w-[80%] h-[400px]'></div>
			</motion.div>
		</motion.section>
	);
};

export default Products_5_section;
