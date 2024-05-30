import { diversStrap } from "../../assets";
import styles, { layout } from "../../style";
// STRAP
const Products_3_section = () => {
	return (
		<section id='product_3' className={`${layout.section} `}>
			<div className='flex flex-col w-[100%] text-white p-6'>
				<h2 className={`${styles.heading2} `}>STRAP</h2>

				<p className={`${styles.paragraph}`}>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
					isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
				</p>
				<p className={`${styles.paragraph} mt-6`}>
					It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
				</p>
			</div>

			<div className='flex flex-col w-[100%] p-6'>
				<img className='rounded h-[100%] object-contain' src={diversStrap} />
			</div>
		</section>
	);
};

export default Products_3_section;
