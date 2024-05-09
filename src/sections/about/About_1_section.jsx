import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { aboutGoals } from "../../constants/index";
import styles, { layout } from "../../style";

const About_1_section = () => {
	return (
		<section id='about_1' className={`${layout.section} rotate-180`}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h1 className={`flex flex-col text-white items-center md:items-start font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]`}>About us</h1>
					<p className={`${styles.paragraph} text-white`}>
						The first diving suits were produced as early as 1953. Since then, hundreds of thousands have been made. Their high quality, perfectly tailored cut and adaptation to various conditions make our suits enjoy a great reputation worldwide. Guided by the need to maintain high
						quality standards, we have declined to outsource production to Asian countries, despite temptingly low costs.
					</p>
					<p className={`${styles.paragraph} text-white mt-6`}>Our equipment is also appreciated by international authorities, organizations and rescue units - fire departments, police divers, SAR units, coastal guards, water guards and research teams and professional diving organizations.</p>
				</div>

				<div className='flex-1 flex justify-center items-center sm:px-16 px-6'>
					<ul className="md:mt-0 mt-10">
						{aboutGoals.map((item) => (
							<li key={item.key} className='py-3 flex flex-row items-center text-xl text-white'>
								<FontAwesomeIcon icon={faCircle} className={`w-[13px] h-[13px] object-contain text-white pr-4`} />
								<p className={`font-poppins font-normal text-[18px] leading-[30.8px] md:text-left text-white`}>{item.goal}</p>
							</li>
						))}
					</ul>
				</div>
		</section>
	);
};

export default About_1_section;
