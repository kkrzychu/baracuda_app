
import { navLinks } from "../constants"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    
    <nav className="w-full flex py-6 justify-between items-center navbar">

        <h1 className="text-white font-bold w-[124px] h-[32px]">LOGO</h1>
        
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li className={`font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? "mr-0" : 'mr-10'} text-white`} key={nav.id}>
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
            ))}
        </ul>
    </nav>

  )
}

export default Navbar