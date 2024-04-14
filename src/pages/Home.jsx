import styles from "../style";
import { stats } from "../constants";

const Home = () => {
  return (
    <section id="home_1" className={`flex flex-col sm:py-24 py-6 items-center home_section_1_background w-[100%]`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-40 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-white ss:leading-[100px] leading-[75px] tracking-wide">
            HIGH QUALITY <br className="sm:block hidden" />
            NEOPRENE <br className="sm:block hidden" />
            PRODUCTS
          </h1>
        </div>

        <div className={`${styles.flexCenter} flex-row flex-wrap sm:mt-32 mt-6 xl:px- sm:px-40 px-6`}>
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
      </div>
    </section>
  );
};

export default Home;
