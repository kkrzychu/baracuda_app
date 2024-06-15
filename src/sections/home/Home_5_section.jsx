import { landingSewing } from "../../assets";
import styles, { layout } from "../../style";
import { centerVariants } from "../../constants";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Home_5_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} id='home_5' className={`flex md:flex-row flex-col sm:py-10 py-6  bg-black/30 backdrop-blur-sm`}>

			<motion.div variants={centerVariants} className={`hidden md:flex w-80  sm:px-16 px-6 relative `}>
				<img src={landingSewing} className='w-full xl:h-[550px] md:h-[500px] h-[550px] absolute rounded-xl top-[-100px] left-[10%]' />
			</motion.div>

			<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>{t('home_sec_5_h')}</h2>

				<p className={`${styles.paragraph} text-white mt-5`}>
					{t('home_sec_5_desc')}
				</p>

				<Button to={'about'} text={'btn_more'} styles={"mt-6"} />
			</motion.div>

		</motion.section>
	);
};

export default Home_5_section;
