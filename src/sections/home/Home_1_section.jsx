import styles from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { head_strap } from "../../assets";
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
	const full_main_header = splitStringRegex(t("home_main_heading_chars"));

	const charVariants = {
		hidden: { opacity: 0 },
		reveal: { opacity: 1 },
	};

	return (
		<>
			<section id='home_1' className={`flex md:flex-row flex-col sm:pt-16 pt-6 sm:pb-6 pb-6`}>
				<div className={`flex-1 flex items-center md:items-start justify-center flex-col xl:px-0 sm:px-16 px-6 `}>

					<motion.h1 initial='hidden' animate='reveal' transition={{ staggerChildren: 0.04 }} className='text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{full_main_header.map((x, index) => (
							<motion.span key={`h3_${index}`} transition={{ duration: 0.1 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.h1>

					<motion.p initial='hidden' animate='reveal' transition={{ staggerChildren: 0.02, delayChildren: 1 }} className={`${styles.paragraph}  text-white md:text-left text-center mt-5`}>
						{introChars.map((x, index) => (
							<motion.span key={`h_p_${index}`} transition={{ duration: 0.5 }} variants={charVariants}>
								{x}
							</motion.span>
						))}
					</motion.p>

					<div className='flex flex-row mt-6'>
						{socialMedia.map((social, index) => (
							<FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
							// <FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)} />
						))}
					</div>
				</div>

				<div className={`flex-1 flex items-center justify-center xl:p-4 md:p-8 p-4 md:justify-end  md:my-0 my-10 relative`}>
					<img src={head_strap} alt='mainStrap' className='object-contain product-image max-h-[350px] sm:max-h-[400px] md:max-h-[500px] relative z-[5]' />
				</div>
			</section>
			<Stats />
		</>
	);
};

export default Home_1_section;
