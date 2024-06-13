import { strap_3, strap_4 } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { centerVariants, strapBenefits } from "../../constants";
import styles, { layout } from "../../style";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Products_4_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (
		<motion.section id='product_4'  initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.3 }} className={`${layout.sectionReverse}`}>
			<motion.div variants={centerVariants} className='flex flex-col md:w-[65%] w-full justify-center px-10 sm:px-16 px-6 text-white'>
				<h1 className={`${styles.heading2} mb-6`}>{t('products_strap_benefits_h')}</h1>

				<ul className='flex flex-col md:items-start items-center'>
					{strapBenefits.map((item, index) => (
						<li key={`benefits_${index}`} className='mb-6 flex flex-row items-top'>
							<FontAwesomeIcon className='w-[10px] h-[10px] mr-[10px] mt-[10px]' icon={faCircle} />
							<span className={`${styles.paragraph}`}><span className="font-bold tracking-wider">{t(`${item.key}`)}</span> - {t(`${item.benefit}`)}</span>
						</li>
					))}
				</ul>
			</motion.div>

			<motion.div variants={centerVariants} className='flex flex-row md:w-[35%] w-full sm:px-16 px-6 gap-6'>

				<div className='w-[100%] bg-white flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
					<img className=' h-[100%] object-contain' src={strap_4} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Products_4_section;
