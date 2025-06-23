import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      const id = pathname.substring(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToSection;