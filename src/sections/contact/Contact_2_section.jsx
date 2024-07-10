import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { poland_flag, ukFlag } from "../../assets";
import { layout } from "../../style";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { defaultVariants, leftVariants } from "../../constants";
import { motion } from "framer-motion";
import UseWindowSize from "../../components/UseWindowSize";

const Contact_2_section = () => {

	const { t, i18n } = useTranslation();
	const { width } = UseWindowSize();

	console.log(width)
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	const transtionParams = {
		type: "spring",
		bounce: 0.3,
		duration: 2,
		delay: (width > 1060) ? 0.3 : 0 
	}

	return (
		<section  id='contact_2' className={layout.section}>
			<div className={`${layout.sectionInfo} md:p-[5rem] p-[2rem] text-white`}>
				<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, margin: '100px'}} variants={leftVariants} className='rounded-xl box-shadow w-full bg-[#00000082] h-full flex flex-col md:gap-[3rem] gap-[1rem]'>
					<div className='w-[100%] flex flex-row items-center justify-between p-6'>
						<h2 className={`font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[76.8px] leading-[66.8px] w-full text-left`}>{t('contact_office')}</h2>
						<img src={ukFlag} className='w-[100px]' />
					</div>

					<div className='w-[100%] flex flex-row py-6 px-0 md:px-6 items-center'>
						<div className='px-6'>
							<FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
						</div>

						<div className='flex flex-col'>
							<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>590 KINGSTON ROAD</p>

							<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>LONDON SW20 8DN</p>

							<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>{t('contact_uk')}</p>
						</div>
					</div>

				</motion.div>
			</div>

			<div className={`${layout.sectionInfo} md:p-[5rem] p-[2rem] text-white`}>
				<motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, margin: '100px' }} transition={transtionParams} variants={defaultVariants} className='rounded-xl box-shadow bg-[#00000082] w-full h-full flex flex-col md:gap-[3rem] gap-[1rem]'>
					<div className='w-[100%] flex flex-row items-center justify-between p-6'>
						<h2 className={`font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[76.8px] leading-[66.8px] w-full text-left`}>{t('contact_production')}</h2>
						<img src={poland_flag} className='w-[100px]' />
					</div>

					<div className='w-[100%] flex flex-row py-6 px-0 md:px-6 items-center'>
						<div className='px-6'>
							<FontAwesomeIcon icon={faEnvelope} className='text-3xl' />
						</div>
						<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>info@baracuda-neo.pl</p>
					</div>
					<div className='w-[100%] flex flex-row py-6 px-0 md:px-6 mb-6 items-center'>
						<div className='px-6 '>
							<FontAwesomeIcon icon={faPhone} className='text-3xl' />
						</div>
						<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>0048 600 38 23 38</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact_2_section;
