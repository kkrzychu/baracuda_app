import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [location]);
  return (
    // eslint-disable-next-line react/prop-types
    <>{props.children}</>
  )
}

export default ScrollToTop