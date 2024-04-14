
import Logo_3  from '../../assets/logo_3.jpg';
import PolandFlag  from '../../assets/polandFlag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact_2_section = () => {
  return (
    <div className="bg-slate-100">
      <div className="sm:px-40 px-6">

        <section id="contact_2" className={`flex flex-row justify-center items-center w-[100%] gap-x-28 sm:py-24 py-6 max-h-196`}>

        <div className="w-[35%] min-w-[370px] max-w-[470px] rounded overflow-hidden shadow-lg bg-white h-[550px]">
            <div className='h-[65%]'>
              <img className="w-full h-[100%]" src={Logo_3} />
            </div>
            <div className='h-[35%]'>
              <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div> 
            </div>
        </div>

        <div className="w-[35%]  min-w-[370px] max-w-[470px] rounded overflow-hidden shadow-lg bg-white h-[550px] p-6 flex flex-col gap-3">

          <div className='w-[100%] flex flex-row items-center justify-between p-6'>
            <h1 className='font-bold text-xl'>You can find us</h1>
            <img src={PolandFlag} className='w-[100px]'/>
          </div>

          <div className='w-[100%] flex flex-row p-6 items-center'>

            <div className='pr-6'><FontAwesomeIcon icon={faLocationDot} className='text-3xl'/></div>

            <div className='flex flex-col'>
              <div className='font-bold'><p>Budowlanych 33 (p17)</p></div>
              <div className='font-bold'><p>Głogów 67-200</p></div>
              <div className='font-bold'><p>Poland</p></div>
            </div>

          </div>

          <div className='w-[100%] flex flex-row p-6 items-center'>

            <div className='pr-6'><FontAwesomeIcon icon={faEnvelope} className='text-3xl' /></div>
            <p className='font-bold'>info@baracuda-neo.pl</p>

          </div>
          <div className='w-[100%] flex flex-row p-6 items-center'>

            <div className='pr-6'><FontAwesomeIcon icon={faPhone} className='text-3xl' /></div>
            <p className='font-bold'>0048 600 38 23 38</p>

          </div>
            
        </div>

        </section>

      </div>
    </div>
  )
}

export default Contact_2_section