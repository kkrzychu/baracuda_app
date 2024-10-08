import Products_1_section from "../sections/products/Products_1_section";
// import Products_2_section from "../sections/products/Products_2_section";
import Products_3_section from "../sections/products/Products_3_section";
import Products_4_section from "../sections/products/Products_4_section";
import Products_5_section from "../sections/products/Products_5_section";
import Products_6_section from "../sections/products/Products_6_section";
import Products_7_section from "../sections/products/Products_7_section";
import Products_8_section from "../sections/products/Products_8_section";
import { motion } from "framer-motion";
import styles from "../style";
import { bf_tail } from "../assets";

const Products = () => {


	return (

		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} className="w-full">
			<div className={`${styles.bg_products_1} ${styles.flexCenter} h-screen w-full`} style={{ backgroundImage: `url(${bf_tail})` }}>
				<div className={`${styles.boxWidth}`}>
					<Products_1_section />
				</div>
			</div>
			<div className={`${styles.bg_products_3} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Products_3_section />
				</div>
			</div>
			<div className={`${styles.bg_products_4} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
				<Products_5_section />
				</div>
			</div>
			<div className={`${styles.bg_products_5} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Products_4_section />
				</div>
			</div>
			<div className={`${styles.bg_products_6} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Products_6_section />
				</div>
			</div>
			<div className={`${styles.bg_products_7} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Products_7_section />
				</div>
			</div>
			<div className={`${styles.bg_products_8} ${styles.flexCenter} w-full`}>
				<div className={`${styles.boxWidth}`}>
					<Products_8_section />
				</div>
			</div>
		</motion.div>
	);
};

export default Products;
