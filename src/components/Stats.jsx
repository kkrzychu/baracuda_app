import { stats } from "../constants";
import styles from "../style";
import AnimatedNumbers from "react-animated-numbers";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Stats = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 xl:px-0 sm:px-16 px-6`}>
			{stats.map((stat) => (
				<div key={stat.id} className={`flex-1 flex md:justify-start justify-center items-center flex-row m-3`}>
					<h4 className='flex w-[40%] flex-row justify-end font-poppins z-6 font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
						<AnimatedNumbers
							includeComma
							animateToNumber={parseInt(stat.value)}
							locale='en-US'
							transitions={(index) => ({
								type: "ease-out", 
								duration: index + 0.3,
							})}
						/>
						{stat.postfix}
					</h4>
					<p className='flex w-[60%] font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{t(`${stat.title}`)}</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
