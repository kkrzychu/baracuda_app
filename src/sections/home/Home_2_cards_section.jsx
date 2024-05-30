import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { layout } from "../../style";
import { productIntro } from "../../constants";

const Products_2_cards_section = () => {
    return (
		<section id='product_2' className={`${layout.section} items-center md:gap-0 gap-8 justify-around sm:mt-0 my-10`}>
			{productIntro.map((intro, index) => (

				<div key={index} className='flex flex-col bg-scroll bg-cover bg-no-repeat bg-center text-white rounded-xl md:w-[30%] w-[85%] min-w-[300px] md:h-[550px]  p-6' style={{ backgroundImage: `url("${intro.img}")`}}>
					
					<div className="flex flex-col backdrop-blur-sm bg-black/30 rounded-xl">
						<div className='flex flex-row w-[100%] items-center p-2 justify-center'>
							<FontAwesomeIcon icon={intro.icon} className='text-[25px]' />
							<h1 className='text-[23px] font-bold ml-[10px]'>{intro.title}</h1>
						</div>

						<div className='flex flex-row w-[100%] items-center p-2'>
							<p className={`font-poppins font-normal text-[16px] leading-[30px] text-center`}>{intro.description}</p>
						</div>
					</div>


				</div>

			))}

		</section>
	);
}

export default Products_2_cards_section