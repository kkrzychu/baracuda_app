import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { strap_1, strap_3 } from "../../assets";
import styles, { layout } from "../../style";

const Home_3_section = () => {
	return (
		<section id='home_3' className={layout.sectionReverse}>
			<div className={`${layout.sectionInfo} md:items-start xl:px-0 sm:px-16 px-6 `}>

				<h2 className={`${styles.heading2} text-black`}>Send your logo to us</h2>

				<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

				<button type='button' className='bg-indigo-600 mt-6  hover:bg-blue-700 text-white font-poppins font-medium text-[18px] py-4 px-6 rounded'>Ask us</button>
			
      </div>

			<div className={`flex-1 flex justify-center items-start flex-col md:items-start xl:px-0 sm:px-16 px-6 md:mt-0 mt-6`}>
				
        <div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_1} />
				</div>

				<div className='w-[100%] flex justify-center my-6 items-center'>
					<FontAwesomeIcon icon={faAnglesDown} className='w-[30px] h-[30px]' />
				</div>

				<div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
				</div>

			</div>
		</section>
	);
};

export default Home_3_section;
