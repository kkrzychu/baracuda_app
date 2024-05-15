import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { logo_3, polandFlag } from "../../assets";
import { layout } from "../../style";
import { footerShortDesc } from '../../constants'

const Contact_2_section = () => {
	return (
		<section id='contact_2' className={layout.section}>
			<div className={`${layout.sectionInfo} md:p-[5rem] p-[2rem]`}>
				<div className='rounded-xl box-shadow'>
					<div className='flex justify-center'>
						<img className='w-full h-full max-h-[500px] max-w-[500px]' src={logo_3} />
					</div>

					<div className='px-6 py-4'>
						<p className='font-poppins font-normal text-[18px] leading-[30.8px]  text-center'>
							{footerShortDesc}
						</p>
					</div>
				</div>
			</div>

			<div className={`${layout.sectionInfo} md:p-[5rem] p-[2rem]`}>
				<div className='rounded-xl box-shadow w-full h-full flex flex-col md:gap-[3rem] gap-[1rem]'>
					<div className='w-[100%] flex flex-row items-center justify-between p-6'>
						<h2 className={`font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[76.8px] leading-[66.8px] w-full text-left`}>You can find us</h2>
						<img src={polandFlag} className='w-[100px]' />
					</div>

					<div className='w-[100%] flex flex-row p-6 items-center'>
						<div className='px-6'>
							<FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
						</div>

						<div className='flex flex-col'>

								<p className="font-poppins font-bold text-[18px] leading-[30.8px] text-left">Budowlanych 33 (p17)</p>


								<p className="font-poppins font-bold text-[18px] leading-[30.8px] text-left">Głogów 67-200</p>


								<p className="font-poppins font-bold text-[18px] leading-[30.8px] text-left">Poland</p>

						</div>
					</div>

					<div className='w-[100%] flex flex-row p-6 items-center'>
						<div className='px-6'>
							<FontAwesomeIcon icon={faEnvelope} className='text-3xl' />
						</div>
						<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>info@baracuda-neo.pl</p>
					</div>
					<div className='w-[100%] flex flex-row p-6 items-center'>
						<div className='px-6 mb-6'>
							<FontAwesomeIcon icon={faPhone} className='text-3xl' />
						</div>
						<p className='font-poppins font-bold text-[18px] leading-[30.8px] text-left'>0048 600 38 23 38</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact_2_section;
