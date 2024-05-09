import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { logo_3, polandFlag } from "../../assets";
import { layout } from "../../style";

const Contact_2_section = () => {
	return (
		<section id='contact_2' className={layout.section}>
			<div className={layout.sectionInfo}>
				<div className='h-[65%]'>
					<img className='w-full h-[100%]' src={logo_3} />
				</div>
				<div className='h-[35%]'>
					<div className='px-6 py-4'>
						<p className='text-gray-700 text-base'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
			</div>

			<div className={layout.sectionInfo}>
				<div className='w-[100%] flex flex-row items-center justify-between p-6'>
					<h1 className='font-bold text-xl'>You can find us</h1>
					<img src={polandFlag} className='w-[100px]' />
				</div>

				<div className='w-[100%] flex flex-row p-6 items-center'>
					<div className='pr-6'>
						<FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
					</div>

					<div className='flex flex-col'>
						<div className='font-bold'>
							<p>Budowlanych 33 (p17)</p>
						</div>
						<div className='font-bold'>
							<p>Głogów 67-200</p>
						</div>
						<div className='font-bold'>
							<p>Poland</p>
						</div>
					</div>
				</div>

				<div className='w-[100%] flex flex-row p-6 items-center'>
					<div className='pr-6'>
						<FontAwesomeIcon icon={faEnvelope} className='text-3xl' />
					</div>
					<p className='font-bold'>info@baracuda-neo.pl</p>
				</div>
				<div className='w-[100%] flex flex-row p-6 items-center'>
					<div className='pr-6'>
						<FontAwesomeIcon icon={faPhone} className='text-3xl' />
					</div>
					<p className='font-bold'>0048 600 38 23 38</p>
				</div>
			</div>

			{/* <div className='w-[35%] min-w-[370px] max-w-[470px] rounded overflow-hidden shadow-lg bg-white h-[550px]'>
				<div className='h-[65%]'>
					<img className='w-full h-[100%]' src={logo_3} />
				</div>
				<div className='h-[35%]'>
					<div className='px-6 py-4'>
						<p className='text-gray-700 text-base'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
			</div>

			<div className='w-[35%]  min-w-[370px] max-w-[470px] rounded overflow-hidden shadow-lg bg-white h-[550px] p-6 flex flex-col gap-3'></div> */}
		</section>
	);
};

export default Contact_2_section;
