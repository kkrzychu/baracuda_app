import { allProductsFromNeopren } from "../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

import styles, { layout } from "../../style";

const Products_7_section = () => {
	return (
		<section id='product_7' className={`flex flex-col sm:py-16 py-6`}>
			<div className={`${layout.sectionInfo}  sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-white`}>What we manufacture from neoprene</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-white  mt-5`}>
					The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene
					protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
				</p>
			</div>

			<div className='flex flex-1 flex-row justify-around md:mt-[6rem] mt-16 flex-wrap sm:px-16 px-6'>
				{allProductsFromNeopren.map((item, index) => (
					<div key={index} className='flex flex-row w-[400px] md:mr-6 mr-0 mb-10'>
						<div className='bg-indigo-600 rounded-lg flex items-center justify-center w-[40px] h-[40px] p-3'>
							<FontAwesomeIcon icon={faCube} className={` object-contain text-white`} />
						</div>

						<div className='flex flex-col pl-6'>
							<h4 className='font-poppins font-semibold text-[22px] text-white'>{item.title}</h4>

							<p className='font-poppins font-normal text-[15px] text-white'>{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products_7_section;
