import { product_logo_1, diverIcon } from "../../assets";
import styles, { layout } from "../../style";
import { products_intro } from '../../constants'
import Button from "../../components/Button";

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
						{products_intro}
					</p>


					<Button to={'contact'} text={'Contact us'} styles={"mt-6"} />
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
