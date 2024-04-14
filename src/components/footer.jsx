

import styles from "../style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from "../constants/index";


const Footer = () => (
    
  <section className={`${styles.flexCenter} sm:px-40 px-6`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 UP4Q. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
            <FontAwesomeIcon key={social.id} icon={social.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)}/>
        ))}
      </div>
    </div>
  </section>
);

export default Footer