const styles = {

    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] md:w-full w-auto md:text-left text-center",
    paragraph: "font-poppins font-normal text-[18px] leading-[30.8px] md:text-left text-center",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",

    bg_home_1: "background-fixed",
    // bg_home_1: "bg-cover bg-no-repeat bg-center bg-fixed",
    bg_home_2: 'bg-transparent',
    bg_home_3: 'bg-transparent',
    bg_home_4: 'bg-transparent',
    bg_home_5: 'bg-transparent',
    bg_home_6: 'bg-transparent',

    bg_products_1: "bg-cover bg-no-repeat bg-center bg-fixed",
    bg_products_2: 'bg-transparent',
    bg_products_3: 'bg-transparent',
    bg_products_4: 'bg-transparent',
    bg_products_5: 'bg-transparent',
    bg_products_6: 'bg-transparent',
    bg_products_7: 'bg-transparent',
    bg_products_8: 'bg-transparent',

    bg_about_1: 'bg-cover bg-no-repeat bg-center bg-fixed',
    bg_about_2: 'bg-transparent',
    bg_about_3: 'bg-cover bg-no-repeat bg-center bg-fixed',

    bg_contact_1: 'bg-cover bg-no-repeat bg-center bg-fixed',
    bg_contact_2: 'bg-transparent',
}

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row-reverse flex-col ${styles.paddingY}`,

    sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
};

export default styles;