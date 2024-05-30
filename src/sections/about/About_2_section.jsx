import { europeFlag, straps, neopren, sewing, neoprene_structure } from "../../assets";
import { about_neopren_1, about_neopren_2, about_neopren_where_use, about_neopren_solutions, about_handmade_1, about_handmade_2 } from "../../constants";
import styles, { layout } from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const About_2_section = () => {
	return (
		<>
			<section id='about_2_1' className={`flex md:flex-row flex-col sm:pt-16 pt-6`}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>Neoprene - amazing material</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{about_neopren_1}</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{about_neopren_2}</p>
				</div>

				<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 mt-20'>
					<div className='w-[100%] relative z-30 flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={europeFlag} />
						</div>
					</div>
					<div className='w-[100%] relative z-20 top-[-30px] right-[-30px] flex flex-row justify-start items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={straps} />
						</div>
					</div>
					<div className='w-[100%] relative z-10 top-[-100px] flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded-xl' src={neopren} />
						</div>
					</div>
				</div>
			</section>

			<section id='about_2_1_1' className={`flex md:flex-row-reverse flex-col`}>
				<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6'>
					<h4 className={`font-poppins font-semibold xs:text-[24px] text-[20px] xs:leading-[38px] leading-[33px] md:w-full w-auto md:text-left text-center text-white`}>Versatility of neoprene solutions at your request:</h4>

					<ul className='md:mt-0 mt-6'>
						{about_neopren_solutions.map((item, index) => (
							<li key={index} className='pt-2 flex flex-row text-white items-top text-xl '>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left`}>{item}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 md:my-0 my-10'>
						<img className='rounded-xl h-[100%] md:max-h-[550px] max-h-[450px] object-contain' src={neoprene_structure} />
					</div>
				</div>
			</section>

			<section id='about_2_1_1' className={`flex md:flex-row flex-col py-6`}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h4 className={`font-poppins font-semibold xs:text-[24px] text-[20px] xs:leading-[38px] leading-[33px] md:w-full w-auto md:text-left text-center text-white`}>Neoprene is used in various fields:</h4>

					<ul className='md:mt-0 mt-6'>
						{about_neopren_where_use.map((item, index) => (
							<li key={index} className='pt-2 flex flex-row text-white items-top text-xl'>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain pr-4 pt-2`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left`}>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section id='about_2_2' className={layout.sectionReverse}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>Handmade products</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{about_handmade_1}</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>{about_handmade_2}</p>
				</div>

				<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 md:my-0 my-10'>
					<img className='rounded-xl h-[100%] md:max-h-[550px] max-h-[450px] object-contain' src={sewing} />
				</div>
			</section>
		</>
	);
};

export default About_2_section;
