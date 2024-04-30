import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import { strap_1, strap_2, strap_3, strap_4 } from '../../assets'


const Home_2_section = () => {
  return (
    <div className="flex justify-center sm:px-40 px-6">
      <div className="w-[100%] max-w-[1280px] ">

        <section id="home_2_1" className={`flex flex-col w-[100%] items-center pt-28 pb-10`}>

          <div className="flex flex-row w-full">

            <div className="flex flex-col w-[100%]">
              <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">Strap - our flagship product</h1>
            
              <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            
              <button className='bg-indigo-600 mt-6 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View products</button>

            </div>


            <div className="flex flex-row w-[100%] p-6 gap-6">

              <div className='w-[100%]  flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_1} />
                  <img className=' h-[100%] object-contain' src={strap_2} />
              </div>

              <div className='w-[100%]  flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_3} />
                  <img className=' h-[100%] object-contain' src={strap_4} />
              </div>

            </div>

          </div>

        </section>

        <section id="home_2_2" className={`flex flex-col w-[100%] items-center pt-10 pb-10`}>

          <div className="flex flex-row w-full items-center">

            <div className="flex flex-col w-[100%] p-6">

              <div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_1} />
              </div>

              <div className='w-[100%] flex justify-center my-6 items-center'>
                <FontAwesomeIcon icon={faAnglesDown} className='w-[30px] h-[30px]' />
              </div>

              <div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_3} />
              </div>

            </div>

            <div className="flex flex-col w-[100%]">
              <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">Send your logo to us</h1>
            
              <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            
              <button className='bg-indigo-600 mt-6 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ask us</button>

            </div>

          </div>

        </section>

        <section id="home_2_3" className={`flex flex-col w-[100%] items-center pt-10 pb-36`}>

          <div className="flex flex-row w-full items-center">

            <div className="flex flex-col w-[100%]">
              <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">We create all our products by hand</h1>
            
              <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            
            </div>

            <div className="flex flex-col w-[100%] p-6">

              <div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_1} />
              </div>

              <div className='w-[100%] flex justify-center my-6 items-center'>
                <FontAwesomeIcon icon={faAnglesDown} className='w-[30px] h-[30px]' />
              </div>

              <div className='w-[100%] h-[150px] flex flex-col rounded box-shadow p-4 '>
                  <img className=' h-[100%] object-contain' src={strap_3} />
              </div>

            </div>

          </div>

        </section>


      </div>
    </div>
  )
}

export default Home_2_section