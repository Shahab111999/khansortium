import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo(0, 0);
    },50)
  }, [location.pathname]);

  return <>{props.children}</>
};

export default ScrollToTop;