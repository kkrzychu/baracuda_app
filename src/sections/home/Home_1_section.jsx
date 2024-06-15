import styles from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ownerAvatar } from "../../assets";
import Stats from "../../components/Stats";
import { splitStringRegex, socialMedia } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Home_1_section = () => {
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
	}, []);

	const introChars = splitStringRegex(t("home_intro"));
	const heading_chars_1 = splitStringRegex(t("home_heading_chars_1"));
	const heading_chars_2 = splitStringRegex(t("home_heading_chars_2"));
	const heading_chars_3 = splitStringRegex(t("home_heading_chars_3"));

	const charVariants = {
		hidden: { opacity: 0 },
		reveal: { opacity: 1 },
	};

	return (
		<>
			<section id='home_1' className={`flex md:flex-row flex-col sm:pt-16 pt-6 sm:pb-6 pb-6`}>
				<div className={`flex-1 flex items-center md:items-start justify-center flex-col xl:px-0 sm:px-16 px-6 `}>
					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.15, delayChildren: 0.5 }} className='text-white text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_1.map((x, index) => (
							<motion.span key={`h1_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.2 }} className='text-gradient text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_2.map((x, index) => (
							<motion.span key={`h2_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.2, delayChildren: 0.5 }} className='text-white text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_3.map((x, index) => (
							<motion.span key={`h3_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.p initial='hidden' animate='reveal' transition={{ staggerChildren: 0.02, delayChildren: 1 }} className={`${styles.paragraph} max-w-[470px] text-white md:text-left text-center mt-5`}>
						{introChars.map((x, index) => (
							<motion.span key={`h_p_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.p>

					<div className='flex flex-row mt-6'>
						{socialMedia.map((social, index) => (
							<FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)} />
						))}
					</div>
				</div>

				<div className={`flex-1 flex items-center justify-center md:justify-end  md:my-0 my-10 relative`}>
					<img src={ownerAvatar} alt='mainStrap' className='w-[100%] h-[100%] object-contain max-h-[350px] sm:max-h-[400px] md:max-h-[500px] xl:px-0 sm:px-16 px-6 relative z-[5]' />
				</div>
			</section>
			<Stats />
		</>
	);
};

export default Home_1_section;
