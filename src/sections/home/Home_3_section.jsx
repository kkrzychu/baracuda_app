
import { strap_logo_bg } from "../../assets";
import styles, { layout } from "../../style";
import { centerVariants } from "../../constants";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Home_3_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} id='home_3' className={layout.sectionReverse}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{t('home_sec_3_h')}</h2>

				<p className={`${styles.paragraph} text-white mt-5`}>{t('home_sec_3_desc')}</p>

				<Button to={'contact'} text={'btn_ask_us'} styles={"mt-6"} />

			</motion.div>

			<motion.div variants={centerVariants} className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='self-center box-shadow p-4 product-container'>
					<img className=' h-[100%] object-contain product-image' src={strap_logo_bg} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Home_3_section;
