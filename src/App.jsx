import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import styles from "./style";

import { useState, useEffect } from "react";

const App = () => {
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;

		if (offset > 1) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter} ${isSticky ? "stickyNav" : ""}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-primary  ${styles.flexStart} flex-col w-full`}>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<Footer />
			</div>
		</div>
	);
};

export default App;
