import { gallery, check_products } from "../../constants";
import { layout } from "../../style";

const Products_8_section = () => {
	return (
		<section id='product_8' className={`felx flex-col sm:py-16 py-6`}>
			<div className={`${layout.sectionInfo} mb-16 sm:px-16 px-6 `}>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-center text-black`}>Check out our products</h2>

				<p className={`font-poppins font-normal text-[18px] leading-[30.8px] text-center text-black  mt-5`}>
					{check_products}
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
