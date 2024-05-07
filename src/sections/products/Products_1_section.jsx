import { product_logo_1, diverIcon } from "../../assets";
import styles, { layout } from "../../style";

const Products_1_section = () => {
	return (
		<>
			<section id='products_1' className={`${layout.section} relative md:mb-20`}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h1 className='flex flex-col items-center md:items-start font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
						See Our <br /> <span className='text-gradient'>Products</span>
					</h1>

					<h4 className='flex flex-col items-center md:items-start text-center md:text-start mt-6 font-poppins font-semibold ss:text-[36px] text-[26px] ss:leading-[50px] leading-[38px]'>or match the offer to yourself</h4>

					<p className={`${styles.paragraph} max-w-[470px] md:text-left text-center mt-5`}>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					</p>

					<button type='button' className='bg-indigo-600 my-14 hover:bg-blue-700 text-white font-poppins font-medium text-[18px] py-4 px-6 rounded'>
						Contact us
					</button>
				</div>

				<div className={`flex-1 hidden md:flex justify-center items-center flex-col sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] max-h-[500px] object-contain' src={product_logo_1} />
				</div>

                <img className='w-[200px] flex ss:hidden absolute bottom-[-75px] left-[25%]' src={diverIcon} />

			</section>

			
		</>
	);
};

export default Products_1_section;
