
import styles from "../../style";


const Products_5_section = () => {
	return (
		<section id='product_5' className={`flex flex-col justify-center items-center ${styles.paddingY} md:mb-20 mb-10`}>
			<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-white`}>Two strap versions</h2>

			<p className='w-[80%] text-white text-center font-poppins font-normal text-[18px] leading-[30.8px] mb-10'>
				The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene
				protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
			</p>

			<div className='flex md:flex-row flex-col md:justify-around md:gap-0 gap-10 items-center w-[100%]'>
				<div className='flex flex-col bg-white rounded md:w-[35%] w-[80%] h-[400px]'></div>
				<div className='flex flex-col bg-white rounded md:w-[35%] w-[80%] h-[400px]'></div>
			</div>
		</section>
	);
};

export default Products_5_section;
