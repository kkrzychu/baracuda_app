import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { strap_1, strap_3 } from "../../assets";
import styles, { layout } from "../../style";
import { home_sec_4_h, home_sec_4_desc } from "../../constants";

const Home_4_section = () => {
	return (
		<section id='home_4' className={`${layout.section} md:mb-20`}>

				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>{home_sec_4_h}</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>{home_sec_4_desc}</p>
				</div>

				<div className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
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

export default Home_4_section;
