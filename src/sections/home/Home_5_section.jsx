import { landingSewing } from "../../assets";
import styles, { layout } from "../../style";

const Home_5_section = () => {
	return (
		<section id='home_5' className={`${layout.section} md:max-h-[500px]`}>

			<div className={`hidden md:flex w-80  sm:px-16 px-6 relative `}>
				<img src={landingSewing} className='w-full xl:h-[550px] md:h-[500px] h-[550px] absolute rounded-xl top-[-100px] left-[10%]' />
			</div>

			<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
				<h2 className={`${styles.heading2} text-white`}>A company with experience</h2>

				<p className={`${styles.paragraph} text-white mt-5`}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>

				<button type='button' className='bg-indigo-600 mt-6 hover:bg-blue-700 text-white font-poppins font-medium text-[18px] py-4 px-6 rounded'>More</button>
			</div>

		</section>
	);
};

export default Home_5_section;
