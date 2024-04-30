
import { gallery } from "../../constants/index";

const Products_7_section = () => {
  return (
    <div className="bg-white flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="product_7" className=" flex flex-col  w-[100%] items-center pt-20 pb-20">

                <h1 className="font-bold text-3xl mb-6">Check out our products</h1>

                <p className="text-center mb-10">The manufacturing process produces a foamed plastic filled with air micro-particles. Neoprene is a stretchable material, adapting to the shape of the object. It is waterproof and the right production technology can provide this property when creating various products. Neoprene protects against mechanical damage. It provides thermal protection to reduce the impact of high and low temperatures.</p>

                <div className=" md:columns-4 sm:columns-3 columns-2 w-[100%] gap-[20px]">

                    {gallery.map((item, index) => (
                        <div key={index} className="w-[100%] mb-[10px] rounded-lg break-inside-avoid box-shadow">
                            <img src={item}  className="max-w-[100%]"/>
                        </div>
                    ))}

                    
                </div>

            </section>
        </div>
    </div>
  )
}

export default Products_7_section