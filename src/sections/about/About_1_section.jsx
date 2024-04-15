
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { aboutGoals } from "../../constants/index";

const About_1_section = () => {
  return (
    <div className="abot_section_1 flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] about_section_1_content">

            <section id="about_1" className=" flex flex-row justify-center items-center w-[100%]  py-20 px-16">

                <div className="w-[100%] h-[100%] rounded backdrop-blur flex flex-row items-center justify-between text-white gap-3">

                    <div className="flex flex-col p-4 w-[50%]">
                        <h1 className="text-4xl  pb-6 font-bold" >About us</h1>
                        <p className="pb-6 text-xl">The first diving suits were produced as early as 1953. Since then, hundreds of thousands have been made. Their high quality,
                           perfectly tailored cut and adaptation to various conditions make our suits enjoy a great reputation worldwide.
                           Guided by the need to maintain high quality standards, we have declined to outsource production to Asian countries, despite temptingly low costs.
                        </p>
                        <p className="pb-6 text-xl">
                            Our equipment is also appreciated by international authorities, organizations and rescue units - fire departments, police divers, SAR units, coastal guards, water guards and research teams and professional diving organizations.  
                        </p>
                    </div>


                    <div className="p-4 w-[50%] h-[100%]">
                        <ul>
                            {aboutGoals.map((item) => (
                                <li key={item.key} className='py-3 flex flex-row items-center text-xl'><FontAwesomeIcon  icon={faCircle} className={`w-[13px] h-[13px] object-contain text-white pr-4`} />{item.goal}</li>
                            ))}
                        </ul>
                    </div>
 
                </div>

            </section>

        </div>
    </div>
  ) 
}

export default About_1_section

