
import styles from "../../style";

const Home_6_section = () => {
	return (
		<section id='home_6' className={`flex flex-row justify-center items-center py-28`}>
			<div className='w-[80%] xl:w-[60%] flex flex-col items-center justify-center'>
				<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto text-black text-center`}>Dont wait to ask for an offer</h2>

				<p className={`${styles.paragraph} text-black max-w-[470px] my-10`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>

				<button className='bg-indigo-600 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ask us</button>
			</div>
		</section>
	);
};

export default Home_6_section;
