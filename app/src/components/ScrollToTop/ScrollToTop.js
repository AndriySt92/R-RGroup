import { useEffect } from "react";
import { useLocation} from "react-router";
import { useNavigate } from "react-router-dom";

export const ScrollToTop = (props) => {
  const location = useLocation();
  const navigation = useNavigate()
  console.log(window.location.href)

  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
  }, [location]);

  return <>{props.children}</>
};
