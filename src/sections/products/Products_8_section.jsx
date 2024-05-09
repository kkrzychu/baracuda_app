import { gallery } from "../../constants/index";
import { layout } from "../../style";

const Products_8_section = () => {
	return (
		<section id='product_8' className={`felx flex-col sm:py-16 py-6`}>
			<div className={`${layout.sectionInfo} mb-16 sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-black`}>Check out our products</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-black  mt-5`}>
					The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene
					protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
				</p>
			</div>

			<div className='sm:px-16 px-6 md:columns-4 sm:columns-3 columns-2 w-[100%] gap-[20px]'>
				{gallery.map((item, index) => (
					<div key={index} className='w-[100%] mb-[10px] rounded-lg break-inside-avoid box-shadow'>
						<img src={item} className='max-w-[100%]' />
					</div>
				))}
			</div>
		</section>
	);
};

export default Products_8_section;
