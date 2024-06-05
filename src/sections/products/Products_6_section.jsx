import { bands, COLOURS, neo_pack, jacket_1 } from "../../assets";
import { products_bands_desc, products_wetsuit_desc, products_wetsuit_2_desc, products_jackets_desc, products_kit_desc, products_kit_2_desc } from "../../constants";
import styles, { layout } from "../../style";

const Products_6_section = () => {
	return (
		<>
			{/* BANDS */}
			<section id='product_6_1' className={layout.section}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>BANDS</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_bands_desc}
					</p>

				</div>

				<div className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded-xl bg-white h-[100%] max-h-[450px] object-contain' src={bands} />
				</div>
			</section>

			{/* WETSUIT */}
			<section id='product_6_2' className={layout.sectionReverse}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>WETSUIT</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_wetsuit_desc}
					</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_wetsuit_2_desc}
					</p>
				</div>

				<div className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] max-h-[450px] object-contain' src={COLOURS} />
				</div>
			</section>

			{/* JACKETS */}
			<section id='product_6_3' className={layout.section}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>JACKETS</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_jackets_desc}
					</p>

				</div>

				<div className={`flex-1 flex justify-center items-center flex-col  sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded-xl h-[100%] max-h-[450px] object-contain' src={jacket_1} />
				</div>
			</section>

			{/* KIT */}
			<section id='product_6_4' className={layout.sectionReverse}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>ORDER A KIT</h2>

					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_kit_desc}
					</p>
					<p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
						{products_kit_2_desc}
					</p>
				</div>

				<div className={`flex-1 flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded bg-white h-[100%] max-h-[450px] object-contain' src={neo_pack} />
				</div>
			</section>
		</>
	);
};

export default Products_6_section;
