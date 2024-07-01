import { gallery, defaultVariants } from "../../constants";
import { layout } from "../../style";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Products_8_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<section id='product_8' className={`felx flex-col sm:py-16 py-6`}>
			<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, margin: "100px" }} variants={defaultVariants} transition={{
					type: "spring",
					bounce: 0.3,
					duration: 2,
					delay: 0
				}} className={`${layout.sectionInfo} mb-16 sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-white`}>{t('check_products_h')}</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-white  mt-5`}>
					{t('check_products_desc')}
				</p>
			</motion.div>

			<div  className='sm:px-16 px-6 md:columns-4 sm:columns-3 columns-2 w-[100%] gap-[20px]'>
				{gallery.map((item, index) => (
					// <div key={`galery_${index}`} className='w-[100%] mb-[10px] rounded-lg bg-white break-inside-avoid box-shadow'>
					// 	<img src={item} className='max-w-[100%]' />
					// </div>
					<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, margin: "100px" }} variants={defaultVariants} transition={{
						type: "spring",
						bounce: 0.3,
						duration: 2,
						delay:  (index % 2 !== 0) ? (index % 2 - 0.5) : 0 
					}} key={`galery_${index}`} className={`w-full mb-[10px] break-inside-avoid box-shadow p-4 product-container`}>
						<img className='w-full object-contain product-image' src={item} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Products_8_section;
