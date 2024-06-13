import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ to, text, styles }) => {

    const { t, i18n } = useTranslation();
	
	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, [])

	return (

        <Link to={`/${to}`} className={`${styles} customButton`}>
            <span className="first">{t(`${text}`)}</span>
            <span className="second"></span>
            <span className="third">{t(`${text}`)}</span>
            
        </Link>
	);
};

export default Button;
   