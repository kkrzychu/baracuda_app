import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FooterLink = ({ to, children, isToggle }) => {

	const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
		
	}, [])

	return (
        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite link-hover cursor-pointer ${isToggle} `}>
            <Link to={to}>{t(`${children}`)}</Link>
        </li>
	);
}

export default FooterLink