import { girl_1} from "../../assets";
import {  centerVariants } from "../../constants";
import { motion } from "framer-motion";
import styles, { layout } from "../../style";
import Button from "../../components/Button";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";



const Home_2_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])
	
	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true}} id='home_2' className={layout.section}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start xl:px-0 sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{t('home_sec_2_h')}</h2>

				<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{t('home_sec_2_desc')}</p>

				<Button to={"products"} text={"btn_view_products"} styles={"mt-6"} />
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
