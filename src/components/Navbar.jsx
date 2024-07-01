import { navLinks } from "../constants";
import { useState } from "react";
import { close, menu, main_logo } from "../assets";
import CustomLink from "./CustomLink";


const Navbar = () => {
	
	const [toggle, setToggle] = useState(false);



	return (
		<nav className={`w-full flex  justify-between items-center `}>
			{/* LOGO IN THE FUTURE */}
			<img src={main_logo} alt='up4q' className='w-[124px]' />
			{/* <h1 className='text-white font-bold w-[124px] h-[32px] '>UP4Q</h1> */}

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<CustomLink to={`/${nav.id}`} key={`long_${nav.id}`} isToggle={index === navLinks.length - 1 ? "mr-0" : "mr-10"}>
						{nav.title}
					</CustomLink>
				))}
			</ul>

			<div className='sm:hidden z-10 flex flex-1 justify-end items-center '>
				<img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />

				<div className={`${toggle ? "flex" : "hidden"} z-100 p-6 bg-nav-toogle-color fixed top-16 right-0 w-full rounded-xl sidebar`}>
					<ul className='list-none flex flex-col justify-center gap-10 items-center flex-1'>
						{navLinks.map((nav, index) => (
							<CustomLink to={`/${nav.id}`} key={`short_${nav.id}`} onClick={() => setToggle((prev) => !prev)} isToggle={index === navLinks.length ? "m-0 text-[1rem]" : "mb-4 text-[2rem]"}>
								{nav.title}
							</CustomLink>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};


export default Navbar;
