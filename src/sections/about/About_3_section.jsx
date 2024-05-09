import { ownerAvatar } from "../../assets";
import styles, { layout } from "../../style";

const About_3_section = () => {
	return (
		<section id='about_3' className={layout.sectionReverse}>

        <div className={`${layout.sectionInfo} md:items-start sm:px-16 px-6 `}>
					<h2 className={`${styles.heading2} text-white`}>Company Owner</h2>

					<p className={`${styles.paragraph} text-white mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor vitae felis non eleifend. Pellentesque metus libero, placerat vel varius sodales, sollicitudin ut turpis. Fusce id leo condimentum, elementum ante vel, faucibus odio. Morbi condimentum lacinia libero.
							Maecenas laoreet convallis urna in egestas. In id diam bibendum, efficitur massa et, convallis neque.
            </p>
					<p className={`${styles.paragraph} text-white mt-5`}>
          The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products.
							Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.
              </p>
				</div>

				<div className={`flex flex justify-center items-center flex-col md:items-start sm:px-16 px-6 md:mt-0 mt-6`}>
					<img className='rounded h-[100%] max-h-[450px] object-contain' src={ownerAvatar} />
				</div>

		</section>
	);
};

export default About_3_section;
