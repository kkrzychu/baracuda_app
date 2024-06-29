import { bands, COLOURS, neo_pack, jacket_1 } from "../../assets";
import { centerVariants } from "../../constants";
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

				<motion.div variants={centerVariants} className={`flex-1 flex relative justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className={`blue__gradient  absolute rounded-xl blur-sm  w-[80%] h-[80%]`}></div>
					<img className='rounded-xl bg-white h-[100%] z-[100] max-h-[450px] object-contain' src={bands} />
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

				<motion.div variants={centerVariants} className={`flex-1 flex relative justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className={`blue__gradient  absolute rounded-xl blur-sm  w-[80%] h-[80%]`}></div>
					<img className='rounded h-[100%] max-h-[450px] z-[100] object-contain' src={COLOURS} />
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

				<motion.div variants={centerVariants} className={`flex-1 flex relative justify-center items-center flex-col  sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className={`blue__gradient  absolute rounded-xl blur-sm  w-[80%] h-[80%]`}></div>
					<img className='rounded-xl h-[100%] max-h-[450px] z-[100] object-contain' src={jacket_1} />
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

				<motion.div variants={centerVariants} className={`flex-1 flex relative justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<div className={`blue__gradient  absolute rounded-xl blur-sm  w-[80%] h-[80%]`}></div>
					<img className='rounded bg-white h-[100%] max-h-[450px] z-[100] object-contain' src={neo_pack} />
				</motion.div>
			</motion.section>
		</>
	);
};

export default Products_6_section;
