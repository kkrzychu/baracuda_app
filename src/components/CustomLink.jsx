import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const CustomLink = ({ to, children, isToggle, onClick }) => {

    const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
		
	}, [])

	return (
		<li onClick={onClick} className={`${isToggle} font-poppins navItems font-normal  ${isActive ? "active" : ""} text-white`}>
			<Link to={to}>{t(`${children}`)}</Link>
			<div className={` ${isActive ? "active" : ""}`}></div>
		</li>
	);
}

export default CustomLink


