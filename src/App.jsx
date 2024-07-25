import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import styles from "./style";

import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

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
	}, []);

	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter} bg-primary ${isSticky ? "stickyNav" : ""}`}>
				<div className={`${styles.boxWidth} bg-nav-color`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-black-gradient  ${styles.flexStart} flex-col w-full`}>
				<AnimatePresence mode="wait">
					<ScrollToTop>
						<Routes>
							<Route index path='/' element={<Home />} />
							<Route path='/products' element={<Products />} />
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
					</ScrollToTop>
					<Footer />
				</AnimatePresence>
			</div>
		</div>
	);
};

export default App;
