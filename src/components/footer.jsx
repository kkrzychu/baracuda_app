import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia, footerLinks } from "../constants/index";
import Logo from "../assets/logo_3.jpg";
import { footerShortDesc } from '../constants'

const Footer = () => (
	<div className={`${styles.flexCenter} w-full`}>
		<div className={`${styles.boxWidth} border-t-[1px] border-t-[#3F3E45]`}>
			<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
				<div className={`${styles.flexStart} md:flex-row flex-col items-center mb-8 w-full sm:px-16 px-6`}>
					<div className='flex-[1] flex flex-col justify-start items-center md:mr-10 mr-0'>
						<img src={Logo} alt='hoobank' className='w-[266px] h-[72.14px] object-contain' />
						<p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>{footerShortDesc}</p>
					</div>

					<div className='flex-[1.5] w-full flex flex-row justify-center gap-20 flex-wrap md:mt-0 mt-10'>
						{footerLinks.map((footerlink) => (
							<div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
								<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerlink.title}</h4>
								<ul className='list-none mt-4'>
									{footerlink.links.map((link, index) => (
										<li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
											{link.name}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-6 border-t-[1px] border-t-[#3F3E45] sm:px-16 px-6'>
					<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Copyright Ⓒ 2024 UP4Q. All Rights Reserved.</p>

					<div className='flex flex-row md:mt-0 mt-6'>
						{socialMedia.map((social, index) => (
							<FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)} />
						))}
					</div>
				</div>
			</section>
		</div>
	</div>
);

export default Footer;
