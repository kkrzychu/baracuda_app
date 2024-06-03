import { strap_3, strap_4 } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { strapBenefits } from "../../constants";
import styles, { layout } from "../../style";

const Products_4_section = () => {
	return (
		<section id='product_4' className={`${layout.sectionReverse}`}>
			<div className='flex flex-col md:w-[65%] w-full justify-center px-10 text-white'>
				<h1 className={`${styles.heading2} mb-6`}>Benefits</h1>

				<ul className='flex flex-col md:items-start items-center'>
					{strapBenefits.map((item, index) => (
						<li key={index} className='mb-6 flex flex-row items-top'>
							<FontAwesomeIcon className='w-[10px] h-[10px] mr-[10px] mt-[10px]' icon={faCircle} />
							<span className={`${styles.paragraph}`}><span className="font-bold tracking-wider">{item.key}</span> - {item.benefit}</span>
						</li>
					))}
				</ul>
			</div>

			<div className='flex flex-row md:w-[35%] w-full p-6 gap-6'>
				{/* <div className='w-[100%] bg-white flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_1} />
					<img className=' h-[100%] object-contain' src={strap_2} />
				</div> */}

				<div className='w-[100%] bg-white flex flex-col rounded box-shadow p-4 '>
					<img className=' h-[100%] object-contain' src={strap_3} />
					<img className=' h-[100%] object-contain' src={strap_4} />
				</div>
			</div>
		</section>
	);
};

export default Products_4_section;
