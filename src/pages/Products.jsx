import Products_1_section from "../sections/products/Products_1_section"
import Products_2_section from "../sections/products/Products_2_section"
import Products_3_section from "../sections/products/Products_3_section"
import Products_4_section from "../sections/products/Products_4_section"
import Products_5_section from "../sections/products/Products_5_section"
import Products_6_section from "../sections/products/Products_6_section"
import Products_7_section from "../sections/products/Products_7_section"

import styles from "../style";


const Products = () => {
  return (
    <>
        <div className={`${styles.bg_products_1} ${styles.paddingX}`}><Products_1_section /></div>
        <div className={`${styles.bg_products_2} ${styles.paddingX}`}><Products_2_section /></div>
        <div className={`${styles.bg_products_3} ${styles.paddingX}`}><Products_3_section /></div>
        <div className={`${styles.bg_products_4} ${styles.paddingX}`}><Products_4_section /></div>
        <div className={`${styles.bg_products_5} ${styles.paddingX}`}><Products_5_section /></div>
        <div className={`${styles.bg_products_6} ${styles.paddingX}`}><Products_6_section /></div>
        <div className={`${styles.bg_products_7} ${styles.paddingX}`}><Products_7_section /></div>
    </>
  )
}

export default Products