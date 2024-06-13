import { gallery, centerVariants } from "../../constants";
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
		<motion.section id='product_8' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={`felx flex-col sm:py-16 py-6`}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} mb-16 sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-white`}>{t('check_products_h')}</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-white  mt-5`}>
					{t('check_products_desc')}
				</p>
			</motion.div>

			<motion.div variants={centerVariants} className='sm:px-16 px-6 md:columns-4 sm:columns-3 columns-2 w-[100%] gap-[20px]'>
				{gallery.map((item, index) => (
					<div key={`galery_${index}`} className='w-[100%] mb-[10px] rounded-lg bg-white break-inside-avoid box-shadow'>
						<img src={item} className='max-w-[100%]' />
					</div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default Products_8_section;
