import styles from "../../style";
import { socialMedia } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ownerAvatar } from "../../assets";
import Stats from "../../components/Stats";
import { home_intro } from '../../constants'

const Home_1_section = () => {
	return (
		<>
			<section id='home_1' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
				<div className={`flex-1 flex items-center md:items-start justify-center flex-col xl:px-0 sm:px-16 px-6 `}>
					<h1 className='flex flex-col items-center md:items-start font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						High Quality <br /> <span className='text-gradient'>Neoprene</span>
					</h1>

					<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Products.</h1>

					<p className={`${styles.paragraph} max-w-[470px] text-dimWhite md:text-left text-center mt-5`}>{home_intro}</p>

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
