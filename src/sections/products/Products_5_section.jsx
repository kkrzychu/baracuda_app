import { centerVariants } from "../../constants";
import styles from "../../style";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { straps_in_row, straps_prod } from "../../assets";

const Products_5_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])


	return (
		<motion.section id='product_5' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`flex flex-col justify-center items-center ${styles.paddingY} md:mb-20 mb-10`}>
			<motion.div variants={centerVariants} className='flex flex-col w-full text-white justify-center items-center p-6'>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-center text-white`}>{t('products_strap_versions_h')}</h2>

				<p className='w-full md:w-[80%] text-white text-center font-poppins font-normal text-[18px] leading-[30.8px] mb-10'>{t('products_strap_versions_desc')}</p>
			</motion.div>

			<motion.div variants={centerVariants} className='flex md:flex-row flex-col md:justify-around gap-10 items-center w-[100%] p-6'>

				<div className={`self-center box-shadow p-4 product-container`}>
					<img className='h-[100%] z-[1] object-contain product-image' src={straps_prod} />
				</div>

				<div className={`self-center box-shadow p-4 product-container`}>
					<img className='h-[100%] z-[1] object-contain product-image' src={straps_in_row} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Products_5_section;
