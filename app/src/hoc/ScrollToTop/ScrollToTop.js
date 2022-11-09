import { useEffect } from "react";
import { useLocation} from "react-router";

export const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    if(location.search.includes('page')) return
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
  }, [location]);

  return <>{props.children}</>
};
