import { bands, neo_pack, wetsuit_color } from "../../assets";
import { centerVariants, jackets_gallery } from "../../constants";
import styles, { layout } from "../../style";
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Products_6_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])



	return (
		<>
			{/* BANDS */}
			<motion.section id='product_6_1' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={layout.section}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('products_bands_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_bands_desc')}
					</p>

				</motion.div>

				<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className={`self-center  box-shadow p-4 product-container `}>
						<img className=' h-[100%] z-[100] object-contain product-image' src={bands} />
					</div>
				</motion.div>
			</motion.section>

			{/* WETSUIT */}
			<motion.section id='product_6_2' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={layout.sectionReverse}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('products_wetsuit_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_wetsuit_desc')}
					</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_wetsuit_2_desc')}
					</p>
				</motion.div>

				<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>

					<div className={`self-center  box-shadow p-4 product-container `}>
						<img className=' h-[100%] z-[100] object-contain product-image' src={wetsuit_color} />
					</div>
				</motion.div>
			</motion.section>

			{/* JACKETS */}
			<motion.section id='product_6_3' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={layout.section}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('products_jacket_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_jackets_desc')}
					</p>

				</motion.div>

				<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-center flex-row  sm:px-16 px-6 md:mt-0 mt-6`}>
					

					<div className="w-full h-full max-w-[600px] flex justify-center items-center ">
						<div className="scroll-container h-full flex overflow-x-scroll scroll-snap-x p-4 gap-10">
							{jackets_gallery.map((item, index) => (

								<div key={index} className={`self-center w-[350px] box-shadow p-4 product-container scroll-item flex-shrink-0  scroll-snap-center`}>
									<img className='h-[100%] z-[1] object-contain product-image' src={item} />
								</div>
							))}
						</div>
					</div>

				</motion.div>
			</motion.section>

			{/* KIT */}
			<motion.section id='product_6_4' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={layout.sectionReverse}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('products_kit_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_kit_desc')}
					</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{t('products_kit_2_desc')}
					</p>
				</motion.div>

				<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>

					<div className={`self-center  box-shadow p-4 product-container `}>
						<img className=' h-[100%] z-[100] object-contain product-image' src={neo_pack} />
					</div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default Products_6_section;
