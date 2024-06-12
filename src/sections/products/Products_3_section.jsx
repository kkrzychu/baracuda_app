import { diversStrap } from "../../assets";
import styles, { layout } from "../../style";
import { products_strap_1_desc, products_strap_2_desc, centerVariants } from "../../constants";
import { motion } from "framer-motion";


// STRAP
const Products_3_section = () => {
	return (
		<motion.section id='product_3' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={`${layout.section} `}>
			<motion.div variants={centerVariants} className='flex flex-col w-[100%] text-white p-6'>
				<h2 className={`${styles.heading2} `}>STRAP</h2>

				<p className={`${styles.paragraph}`}>
					{products_strap_1_desc}
					<br /><br />
					{products_strap_2_desc}
				</p>

			</motion.div>

			<motion.div variants={centerVariants} className='flex flex-col w-[100%] p-6'>
				<img className='rounded h-[100%] object-contain' src={diversStrap} />
			</motion.div>
		</motion.section>
	);
};

export default Products_3_section;
