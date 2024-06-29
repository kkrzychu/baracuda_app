import { ownerAvatar } from "../../assets";
import styles, { layout } from "../../style";
import { splitStringRegex } from "../../constants";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Products_1_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	const heading_chars_1 = splitStringRegex(t("products_heading_chars_1"));
	const heading_chars_2 = splitStringRegex(t("products_heading_chars_2"));
	const heading_chars_3 = splitStringRegex(t("products_heading_chars_3"));
	const intro_chars = splitStringRegex(t('products_intro'));

	const charVariants = {
		hidden: { opacity: 0 },
		reveal: { opacity: 1 },
	};

	return (
		<>
			<motion.section id='product_1' className={`flex md:flex-row flex-col sm:py-20 py-48 md:mb-20`}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.1, delayChildren: 0.45 }} className='text-center md:text-start md:items-start text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
						{heading_chars_1.map((x, index) => (
							<motion.span key={`h1_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.1, delayChildren: 0 }} className=' md:items-start text-gradient font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
						{heading_chars_2.map((x, index) => (
							<motion.span key={`h2_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.h4 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.03, delayChildren: 0.45 }} className='md:items-start text-white text-center md:text-start mt-6 font-poppins font-semibold ss:text-[36px] text-[26px] ss:leading-[50px] leading-[38px]'>
						{heading_chars_3.map((x, index) => (
							<motion.span key={`h3_${index}`} transition={{ duration: 0.01 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h4>

					<motion.p initial='hidden' animate='reveal' transition={{ staggerChildren: 0.02, delayChildren: 0.45 }} className={`${styles.paragraph} max-w-[470px] md:text-left text-center mt-5 text-white`}>
						{intro_chars.map((x, index) => (
							<motion.span key={`p_intro_${index}`} transition={{ duration: 0.01 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.p>

					<Button to={"contact"} text={"btn_contact_us"} styles={"mt-6"} />
				</div>

				<div className={`flex-1 hidden md:flex  justify-center items-center flex-col sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] max-h-[500px] object-contain' src={ownerAvatar} />
				</div>

				{/* <img className='w-[200px] flex ss:hidden absolute bottom-[-75px] left-[25%]' src={diverIcon} /> */}
			</motion.section>
		</>
	);
};

export default Products_1_section;
