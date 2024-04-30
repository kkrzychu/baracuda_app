
import { allProductsFromNeopren } from '../../constants/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Products_6_section = () => {
  return (
    <div className="bg-black flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="product_6" className=" flex flex-col  w-[100%] items-center pt-20 pb-20">

                <h1 className="font-bold text-3xl text-white mb-6">What we manufacture from neoprene</h1>

                <p className="text-white text-center mb-10">The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.</p>

                <div className="flex flex-row justify-around mt-[6rem] flex-wrap">


                    {allProductsFromNeopren.map((item, index) => (
                        <div key={index} className='flex flex-row w-[400px] mr-6 mb-10'>

                            <div className='bg-indigo-600 rounded-lg flex items-center justify-center w-[40px] h-[40px] p-3'>
                                <FontAwesomeIcon  icon={faCube} className={` object-contain text-white`} />
                            </div>

                            <div className='flex flex-col pl-6'>
                                <h4 className='font-bold text-white text-xl mb-1'>{item.title}</h4>

                                <p className='text-white'>{item.desc}</p>
                            </div>

                        </div>
                    ))}


                </div>

            </section>
        </div>
    </div>
  )
}

export default Products_6_section