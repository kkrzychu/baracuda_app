
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faUsers, faHands } from '@fortawesome/free-solid-svg-icons';

import { surfer, handmade, fitting } from '../../assets'


const Products_2_section = () => {
  return (
    <div className="flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

            <section id="product_2" className=" flex flex-row  justify-between items-center w-[100%]  py-28">

                <div className="flex flex-col  bg-white rounded w-[30%] h-[100%] p-6">
                    <div className="flex flex-row w-[100%] items-center p-2 justify-center">
                        <FontAwesomeIcon icon={faMedal} className='text-[25px]' />
                        <h1 className='text-[25px] font-bold ml-[10px]'>High quality material</h1>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <img className="h-[100%] w-[100%] object-contain rounded" src={surfer} />
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded w-[30%]  h-[100%] p-6">
                    <div className="flex flex-row w-[100%] items-center p-2 justify-center">
                        <FontAwesomeIcon icon={faHands} className='text-[25px]' />
                        <h1 className='text-[25px] font-bold ml-[10px]'>Handmade</h1>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <img className="h-[100%] w-[100%] object-contain rounded" src={handmade} />
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded w-[30%]  h-[100%] p-6">
                    <div className="flex flex-row w-[100%] items-center p-2 justify-center">
                        <FontAwesomeIcon icon={faUsers} className='text-[25px]' />
                        <h1 className='text-[25px] font-bold ml-[10px]'>Fitted to you</h1>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    </div>

                    <div className="flex flex-row w-[100%] items-center p-2">
                        <img className="h-[100%] w-[100%] object-contain rounded" src={fitting} />
                    </div>
                </div>

            </section>
        </div>
    </div>
  )
}

export default Products_2_section