
import { navLinks } from "../constants"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


const Navbar = () => {

  return (
    
    <nav className={`w-full flex py-[20px] justify-between items-center `}>

        <h1 className="text-white font-bold w-[124px] h-[32px] ">UP4Q</h1>
        
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (

                <CustomLink to={`/${nav.id}`} lineindex={index} ullength={navLinks.length} key={nav.id} >{nav.title}</CustomLink>

            ))}
        </ul>
    </nav>

  )
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={`${props.lineindex === props.ullength - 1 ? "mr-0" : 'mr-10'} font-poppins navItems font-normal text-[16px] ${isActive ? "active" : ""} text-white`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar