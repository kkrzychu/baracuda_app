import { bands, COLOURS, neo_pack } from "../../assets";
import styles, { layout } from "../../style";

const Products_6_section = () => {
	return (
		<>
			{/* BANDS */}
			<section id='product_6_1' className={layout.section}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>BANDS</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
						there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
					</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
					</p>
				</div>

				<div className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] object-contain' src={bands} />
				</div>
			</section>

			{/* WETSUIT */}
			<section id='product_6_2' className={layout.sectionReverse}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>WETSUIT</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
						there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
					</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
					</p>
				</div>

				<div className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] object-contain' src={COLOURS} />
				</div>
			</section>

			{/* KIT */}
			<section id='product_6_3' className={layout.section}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>ORDER A KIT</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
						there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
					</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
					</p>
				</div>

				<div className={`flex-1 flex justify-center items-start flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] object-contain' src={neo_pack} />
				</div>
			</section>
		</>
	);
};

export default Products_6_section;
