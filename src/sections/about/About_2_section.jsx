import { europeFlag, straps, neopren, sewing, neoprene_structure } from "../../assets";
import { about_neopren_where_use, about_neopren_solutions, centerVariants } from "../../constants";
import styles, { layout } from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const About_2_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<>
			<motion.section id='about_2_1_1' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`flex md:flex-row flex-col sm:pt-16 pt-6`}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('about_neopren_2_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{t('about_neopren_1')}</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{t('about_neopren_2')}</p>
				</motion.div>

				<motion.div variants={centerVariants} className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 mt-20'>
					<div className='w-[100%] relative z-30 flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={europeFlag} />
						</div>
					</div>
					<div className='w-[100%] relative z-20 top-[-30px] right-[-30px] flex flex-row justify-start items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={straps} />
						</div>
					</div>
					<div className='w-[100%] relative z-10 top-[-100px] flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={neopren} />
						</div>
					</div>
				</motion.div>
			</motion.section>

			<motion.section id='about_2_1_2' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`flex md:flex-row-reverse flex-col`}>
				<motion.div variants={centerVariants} className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6'>
					<h4 className={`font-poppins font-semibold xs:text-[24px] text-[20px] xs:leading-[38px] leading-[33px] md:w-full w-auto md:text-left text-center text-white`}>{t('about_solutions_h')}</h4>

					<ul className='md:mt-0 mt-6'>
						{about_neopren_solutions.map((item, index) => (
							<li key={`about_1_${index}`} className='pt-2 flex flex-row text-white items-top text-xl '>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left`}>{t(`${item.key}`)}</p>
							</li>
						))}
					</ul>
				</motion.div>

				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 md:my-0 my-10'>
						<img className='rounded-xl h-[100%] md:max-h-[550px] max-h-[450px] object-contain' src={neoprene_structure} />
					</div>
				</motion.div>
			</motion.section>

			<motion.section id='about_2_1_3' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={`flex md:flex-row flex-col py-6`}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h4 className={`font-poppins font-semibold xs:text-[24px] text-[20px] xs:leading-[38px] leading-[33px] md:w-full w-auto md:text-left text-center text-white`}>{t('about_used_for_h')}</h4>

					<ul className='md:mt-0 mt-6'>
						{about_neopren_where_use.map((item, index) => (
							<li key={`about_2_${index}`} className='pt-2 flex flex-row text-white items-top text-xl'>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left`}>{t(`${item.key}`)}</p>
							</li>
						))}
					</ul>
				</motion.div>
			</motion.section>

			<motion.section id='about_2_2' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.2 }} className={layout.sectionReverse}>
				<motion.div variants={centerVariants} className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>{t('about_handmade_h')}</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{t('about_handmade_1')}</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{t('about_handmade_2')}</p>
				</motion.div>

				<motion.div variants={centerVariants} className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 md:my-0 my-10'>
					<img className='rounded-xl h-[100%] md:max-h-[550px] max-h-[450px] object-contain' src={sewing} />
				</motion.div>
			</motion.section>
		</>
	);
};

export default About_2_section;
