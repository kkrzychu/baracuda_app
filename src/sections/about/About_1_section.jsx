import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { aboutGoals, leftVariants, rightVariants } from "../../constants";
import styles, { layout } from "../../style";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const About_1_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [])

	return (
		<section id='about_1'  className={`flex md:flex-row flex-col sm:pt-16 pt-6 sm:pb-36 pb-6`} >
				<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} variants={leftVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h1 className={`flex flex-col text-white items-center md:items-start font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]`}>{t('about_1_title')}</h1>
					<p className={`${styles.paragraph} text-white`}>
						{t('about_intro_part_1')}
					</p>
					<p className={`${styles.paragraph} text-white mt-6`}>{t('about_intro_part_2')}</p>
				</motion.div>

				<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} variants={rightVariants} className='flex-1 flex justify-center items-center sm:px-16 px-6'>
					<ul className="md:mt-0 mt-6">
						{aboutGoals.map((item) => (
							<li key={item.key} className='pt-2 flex flex-row items-top text-xl text-white'>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain text-white pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left text-white`}>{t(`${item.key}`)}</p>
							</li>
						))}
					</ul>
				</motion.div>
		</section>
	);
};

export default About_1_section;
