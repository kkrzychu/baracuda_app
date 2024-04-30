import styles from "../../style";
import { stats } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from "../../constants/index";

const Home_1_section = () => {
  return (
    <div className="home_section_1_background flex justify-center sm:px-40 px-6">
        <div className="w-[100%] max-w-[1280px] ">

        <section id="home_1" className={`flex flex-col w-[100%] items-center pt-20 pb-20`}>


                <div className={`flex flex-col w-full`}>
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-white ss:leading-[100px] leading-[75px] tracking-wide">
                        HIGH QUALITY <br className="sm:block hidden" />
                        NEOPRENE <br className="sm:block hidden" />
                        PRODUCTS
                    </h1>

                    <h3 className="tracking-wide font-poppins font-semibold ss:text-[18px] text-white mt-10 mb-3">Follow us</h3>

                    <div className="flex flex-row md:mt-0 mt-6">
                        {socialMedia.map((social, index) => (
                            <FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)}/>
                        ))}
                    </div>
                </div>

                <div className={`${styles.flexCenter} flex-row w-full flex-wrap sm:mt-32 mt-6`}>
                    {stats.map((stat) => (
                        <div
                        key={stat.id}
                        className={`flex-1 flex justify-start items-center flex-row m-3`}>
                        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                            {stat.value}
                        </h4>
                        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                            {stat.title}
                        </p>
                        </div>
                    ))}
                </div>
            
            </section>

        </div>
    </div>
  )
}

export default Home_1_section