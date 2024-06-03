import { diversStrap } from "../../assets";
import styles, { layout } from "../../style";
import { products_strap_1_desc, products_strap_2_desc } from "../../constants";

// STRAP
const Products_3_section = () => {
	return (
		<section id='product_3' className={`${layout.section} `}>
			<div className='flex flex-col w-[100%] text-white p-6'>
				<h2 className={`${styles.heading2} `}>STRAP</h2>

				<p className={`${styles.paragraph}`}>
					{products_strap_1_desc}
				</p>
				<p className={`${styles.paragraph} mt-6`}>
					{products_strap_2_desc}
				</p>
			</div>

			<div className='flex flex-col w-[100%] p-6'>
				<img className='rounded h-[100%] object-contain' src={diversStrap} />
			</div>
		</section>
	);
};

export default Products_3_section;
