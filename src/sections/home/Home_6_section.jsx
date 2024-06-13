

import Button from "../../components/Button";
import { centerVariants } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Home_6_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<motion.section initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} id='home_6' className={`flex flex-row justify-center items-center py-28`}>
			<motion.div variants={centerVariants} className='w-[80%] xl:w-[60%] flex flex-col items-center justify-center'>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-white text-center`}>{t('home_sec_6_h')}</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-white md:max-w-[60%] max-w-[470px] my-10`}>{t('home_sec_6_desc')}</p>

				<Button to={'contact'} text={'btn_ask_us'} styles={"mt-6"} />
			</motion.div>
		</motion.section>
	);
};

export default Home_6_section;
