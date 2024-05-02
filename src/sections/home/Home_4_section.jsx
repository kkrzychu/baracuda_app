import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { strap_1, strap_3 } from "../../assets";

const Home_4_section = () => {
  return (
    <section id='home_2_3' className={`flex flex-col w-[100%] items-center pt-10 pb-36`}>
			<div className='flex flex-row w-full items-center'>
				<div className='flex flex-col w-[100%]'>
					<h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full'>We create all our products by hand</h1>

					<p className='font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
				</div>

				<div className='flex flex-col w-[100%] p-6'>
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
			</div>
		</section>
  )
}

export default Home_4_section