import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({children}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector('body');
    body.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>{children}</>
  );
}

export default ScrollToTop;