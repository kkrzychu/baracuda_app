

import EuropeFlag from '../../assets/europeFlag.png'
import Straps from '../../assets/straps.png'
import Neopren from '../../assets/neopren.png'
import Sewing from '../../assets/sewing.jpg'

const About_2_section = () => {
  return (
    <div className="bg-white flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="about_2_1" className=" flex flex-row justify-center items-center w-[100%]  pt-20">

              <div className="w-[100%] flex flex-col px-20">

                <h1 className='font-bold text-3xl mb-6'>Neoprene - amazing material</h1>

                <p className='mb-6'>A practical and useful material with exceptional and unique properties, provided it is original.</p>
                <p className='mb-6'>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.</p>
                <p className='mb-6'>The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.</p>

              </div>

              <div className="w-[100%] flex flex-col">

                <div className="w-[100%] relative z-30 flex flex-row justify-end items-center"><div   className="bg-white w-[50%]"><img className='rounded' src={EuropeFlag} /></div></div>
                <div className="w-[100%] relative z-20 top-[-30px] right-[-30px] flex flex-row justify-start items-center"><div className="bg-white w-[50%]"><img className='rounded' src={Straps} /></div></div>
                <div className="w-[100%] relative z-10 top-[-100px] flex flex-row justify-end items-center"><div   className="bg-white w-[50%]"><img className='rounded' src={Neopren} /></div></div>

              </div>

            </section>

            <section id="about_2_2" className=" flex flex-row justify-center items center w-[100%] pb-20">

              <div className="w-[100%] flex flex-col max-h-[500px]">

                <img className='rounded h-[100%] object-contain' src={Sewing} />

              </div>


              <div className="w-[100%] flex flex-col px-20">

                <h1 className='font-bold text-3xl mb-6'>Handmade products</h1>

                <p className='mb-6'>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.The manufacturing process produces a foamed plastic filled with air micro-particles.</p>
                <p className='mb-6'>The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.</p>
                <p className='mb-6'>Only 100% original European neoprene guarantees all the advantages.Products of Asian origin do not meet these tasks.The manufacturing process produces a foamed plastic filled with air micro-particles.</p>

              </div>

            </section>

        </div>
    </div>
  )
}

export default About_2_section 
