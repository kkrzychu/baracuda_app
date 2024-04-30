

import { bands, COLOURS, neo_pack } from '../../assets'

const Products_5_section = () => {
  return (
    <div className="flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            {/* BANDS */}
            <section id="product_5" className=" flex flex-row  w-[100%]  pt-28 pb-10">

                <div className="flex flex-col w-[100%] p-6">
                    <h1 className="font-bold text-[50px]">BANDS</h1>

                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>
                    <p className='mt-6'>
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>

                </div>

                <div className="flex flex-col w-[100%] p-6">
                    <img className='rounded h-[100%] object-contain' src={bands} />
                </div>

            </section>

            {/* WETSUIT */}
            <section id="product_5" className=" flex flex-row  w-[100%]  pt-10 pb-10">

                <div className="flex flex-col w-[100%] max-h-[500px] p-6">
                    <img className='rounded h-[100%] object-contain' src={COLOURS} />
                </div>

                <div className="flex flex-col w-[100%] p-6">
                    <h1 className="font-bold text-[50px]">WETSUIT</h1>

                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>
                    <p className='mt-6'>
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>

                </div>

            </section>

            {/* KIT */}
            <section id="product_5" className=" flex flex-row  w-[100%]  pt-10 pb-20">

                <div className="flex flex-col w-[100%] p-6">
                    <h1 className="font-bold text-[50px]">ORDER A KIT</h1>

                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>
                    <p className='mt-6'>
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>

                </div>

                <div className="flex flex-col w-[100%] p-6">
                    <img className='rounded h-[100%] object-contain' src={neo_pack} />
                </div>

            </section>
        </div>
    </div>
  )
}

export default Products_5_section