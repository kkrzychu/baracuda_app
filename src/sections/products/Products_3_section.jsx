import { diversStrap } from "../../assets";
import styles, { layout } from "../../style";
import { centerVariants } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

// STRAP
const Products_3_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<motion.section id='product_3' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={`${layout.section} `}>
			<motion.div variants={centerVariants} className='flex flex-col w-[100%] text-white p-6'>
				
				<h2 className={`${styles.heading2} `}>STRAP</h2>

				<p className={`${styles.paragraph} `}>
					{t('products_strap_1_desc')}
					<br /><br />
					{t('products_strap_2_desc')}
				</p>

			</motion.div>

			<motion.div variants={centerVariants} className='flex flex-col w-[100%] p-6'>
				<div className={`w-full h-full flex box-shadow p-4 `}>
					<img className='w-full z-[100] self-center  rounded-xl object-contain' src={diversStrap} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Products_3_section;
