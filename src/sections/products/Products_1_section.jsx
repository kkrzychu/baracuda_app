

import { product_logo_1, diverIcon } from '../../assets'

const Products_1_section = () => {
  return (
    <div className="flex justify-center sm:px-40 px-6 relative">
        <div className="w-[100%] max-w-[1280px]">
            <section id="products_1" className=" flex flex-row justify-center relative w-[100%]  py-28">

                <div className="flex flex-col w-[100%] ">

                    <div className='flex flex-row items-center'>
                        <h1 className=" text-[72px] font-bold mb-6">See our products</h1>

                    </div>

                    <h4 className=" text-[32px] font-bold mb-2">or match the offer to yourself</h4>

                    <p className="mb-10">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>

                    <button className='bg-indigo-600 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact us</button>

                </div>

                <div className="flex flex-col w-[100%] max-h-[500px]">
                    <img className='rounded h-[100%] max-h-[500px] object-contain' src={product_logo_1} />
                </div>

                

            </section>

            
        </div>

        <img className='w-[25%] absolute bottom-[-30%] left-0' src={diverIcon} />

    </div>
  )
}

export default Products_1_section