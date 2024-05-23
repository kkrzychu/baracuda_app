import styles from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ownerAvatar } from "../../assets";
import Stats from "../../components/Stats";
import { home_intro, splitStringRegex, socialMedia } from "../../constants";
import { motion } from "framer-motion";

const Home_1_section = () => {
	const introChars = splitStringRegex(home_intro);
	const heading_chars_1 = splitStringRegex('High Quality');
	const heading_chars_2 = splitStringRegex('Neoprene');
	const heading_chars_3 = splitStringRegex('Products.');

	const charVariants = {
		hidden: { opacity: 0 },
		reveal: { opacity: 1 },
	};

	return (
		<>
			<section id='home_1' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
				<div className={`flex-1 flex items-center md:items-start justify-center flex-col xl:px-0 sm:px-16 px-6 `}>
					<motion.h1 initial="hidden" animate="reveal"  transition={{ staggerChildren: 0.15, delayChildren: .5 }} className='text-white text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_1.map((x, index) => (
							<motion.span key={index} transition={{ duration: 0.5}} variants={ charVariants } >
								{x}
							</motion.span>
						))} 
					</motion.h1>

					<motion.h1 initial="hidden" animate="reveal" transition={{ staggerChildren: 0.2 }} className='text-gradient text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_2.map((x, index) => (
							<motion.span key={index} transition={{ duration: 0.5, }} variants={ charVariants } >
								{x}
							</motion.span>
						))} 
					</motion.h1>

					<motion.h1 initial="hidden" animate="reveal" transition={{ staggerChildren: 0.2, delayChildren: .5 }} className='text-white text-center md:text-left font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						{heading_chars_3.map((x, index) => (
							<motion.span key={index} transition={{ duration: 0.5}} variants={ charVariants } >
								{x}
							</motion.span>
						))} 
					</motion.h1>

					<motion.p initial="hidden" animate="reveal" transition={{ staggerChildren: .02, delayChildren: 1 }} className={`${styles.paragraph} max-w-[470px] text-white md:text-left text-center mt-5`}>
						{introChars.map((x, index) => (
							<motion.span key={index} transition={{ duration: 0.5}} variants={ charVariants }>
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

