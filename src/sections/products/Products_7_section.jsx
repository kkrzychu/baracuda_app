import { allProductsFromNeopren, centerVariants } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { layout } from "../../style";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Products_7_section = () => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])


	return (
		<motion.section id='product_7' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.1 }} className={`flex flex-col sm:py-16 py-6`}>
			<motion.div variants={centerVariants} className={`${layout.sectionInfo}  sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-white`}>{t('product_what_manufature_h')}</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-white  mt-5`}>{t('product_what_manufature_desc')}</p>
			</motion.div>

			<motion.div variants={centerVariants} className='flex flex-1 flex-row md:mt-[6rem] mt-16 flex-wrap sm:px-16 px-6'>
				<div className='flex flex-wrap gap-x-20 justify-center w-full md:w-[85%]'>
					{allProductsFromNeopren.map((item, index) => (
						<div key={`allProducts_${index}`} className='flex flex-row w-[400px] md:mr-6 mr-0 mb-10'>
							<div className='bg-indigo-600 rounded-lg flex items-center justify-center w-[40px] h-[40px] p-3'>
								<FontAwesomeIcon icon={faCube} className={` object-contain text-white`} />
							</div>

							<div className='flex flex-col pl-6'>
								<h4 className='font-poppins font-semibold text-[22px] text-white'>{t(`${item.title}`)}</h4>

								<p className='font-poppins font-normal text-[15px] text-white'>{t(`${item.desc}`)}</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Products_7_section;
