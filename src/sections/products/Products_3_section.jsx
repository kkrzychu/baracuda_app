
import DiversStrp from '../../assets/diversStrap.jpg'
import Strap_1 from '../../assets/strap_1.png'
import Strap_2 from '../../assets/strap_2.png'
import Strap_3 from '../../assets/strap_3.png'
import Strap_4 from '../../assets/strap_4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { strapBenefits } from '../../constants/index'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// STRAP
const Products_3_section = () => {
  return (
    <div className="bg-white flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="product_3_1" className=" flex flex-row  w-[100%]  pt-28 pb-20">

                <div className="flex flex-col w-[100%] p-6">
                    <h1 className="font-bold text-[50px]">STRAP</h1>

                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>
                    <p className='mt-6'>
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>

                </div>

                <div className="flex flex-col w-[100%] p-6">
                    <img className='rounded h-[100%] object-contain' src={DiversStrp} />
                </div>

            </section>

            <section id="product_3_2" className=" flex flex-row  w-[100%]  pt-6 pb-20">

                <div className="flex flex-row w-[65%] p-6 gap-6">

                    <div className='w-[100%]  flex flex-col rounded box-shadow p-4 '>
                        <img className=' h-[100%] object-contain' src={Strap_1} />
                        <img className=' h-[100%] object-contain' src={Strap_2} />
                    </div>

                    <div className='w-[100%]  flex flex-col rounded box-shadow p-4 '>
                        <img className=' h-[100%] object-contain' src={Strap_3} />
                        <img className=' h-[100%] object-contain' src={Strap_4} />
                    </div>



                </div>

                <div className="flex flex-col w-[35%] justify-center p-14">
                    <h1 className="font-bold text-[30px] mb-6">Benefits</h1>

                    <ul className=''>
                        {strapBenefits.map((item, index) => (
                            <li key={index} className='mb-6 flex flex-row items-center'><FontAwesomeIcon className='w-[10px] h-[10px] mr-[10px]' icon={faCircle} />{item.benefit}</li>
                        ))}
                    </ul>

                </div>

            </section>
        </div>
    </div>
  )
}

export default Products_3_section