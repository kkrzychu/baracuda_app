import { strap_1, strap_2, strap_3, strap_4 } from "../../assets";
import styles, { layout } from "../../style";

const Home_2_section = () => {
	return (
		<section id='home_2' className={layout.section}>
			<div className={`${layout.sectionInfo} md:items-start xl:px-0 sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-black`}>Strap - our flagship product</h2>

				<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

				<button type='button' className='bg-indigo-600 mt-6  hover:bg-blue-700 text-white font-poppins font-medium text-[18px] py-4 px-6 rounded'>
					View products
				</button>
			</div>

			<div className={`flex-1 flex justify-center items-start flex-row md:items-start xl:px-0 sm:px-16 px-6 md:mt-0 mt-6`}>
				<div className='flex flex-1 h-full flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_1} />
					<img className=' h-[100%] object-contain' src={strap_2} />
				</div>

				<div className='flex flex-1 h-full flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
					<img className=' h-[100%] object-contain' src={strap_4} />
				</div>
			</div>
		</section>
	);
};

export default Home_2_section;
