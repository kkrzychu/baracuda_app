import Products_1_section from "../sections/products/Products_1_section"
import Products_2_section from "../sections/products/Products_2_section"
import Products_3_section from "../sections/products/Products_3_section"
import Footer from '../components/footer'


const Products = () => {
  return (
    <>
        <Products_1_section />
        <Products_2_section />
        <Products_3_section />
        <Footer />
    </>
  )
}

export default Products