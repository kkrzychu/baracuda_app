import { europeFlag, straps, neopren, sewing } from "../../assets";
import styles, { layout } from "../../style";

const About_2_section = () => {
	return (
		<>
			<section id='about_2_1' className={layout.section}>
				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>Neoprene - amazing material</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>A practical and useful material with exceptional and unique properties, provided it is original.</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products.
						Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
					</p>
				</div>

				<div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 mt-20'>
					<div className='w-[100%] relative z-30 flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded' src={europeFlag} />
						</div>
					</div>
					<div className='w-[100%] relative z-20 top-[-30px] right-[-30px] flex flex-row justify-start items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded' src={straps} />
						</div>
					</div>
					<div className='w-[100%] relative z-10 top-[-100px] flex flex-row justify-end items-center'>
						<div className='bg-white w-[50%]'>
							<img className='rounded' src={neopren} />
						</div>
					</div>
				</div>
			</section>

			<section id='about_2_2' className={layout.sectionReverse}>
				

				<div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-black`}>Handmade products</h2>

					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.The manufacturing process produces a foamed plastic filled with air micro-particles.</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
						The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products.
						Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
					</p>
					<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.The manufacturing process produces a foamed plastic filled with air micro-particles.</p>
				</div>

        <div className='flex-1 flex flex-col items-center justify-center sm:px-16 px-6 md:my-0 my-10'>
					<img className='rounded h-[100%] md:max-h-[550px] max-h-[450px] object-contain' src={sewing} />
				</div>
			</section>
		</>
	);
};

export default About_2_section;
