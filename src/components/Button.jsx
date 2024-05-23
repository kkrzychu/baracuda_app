import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Button = ({ to, text, styles }) => {
	return (
		// <button type='button' className={`${styles} bg-indigo-600 text-white font-poppins font-medium text-[18px] py-3 px-6 rounded-xl`}>
		// 	{text}
		// </button>
        // <Link to={`/${to}`} className={`${styles} bg-indigo-600 text-white font-poppins font-medium text-[18px] py-2 px-6 rounded-xl`}>
        <Link to={`/${to}`} className={`${styles} customButton`}>
            <span className="first">{text}</span>
            <span className="second"></span>
            <span className="third">{text}</span>
            
        </Link>
	);
};

export default Button;
   