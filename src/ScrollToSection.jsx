import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We only want to scroll if there's a path other than the root.
    if (pathname !== '/') {
      // Get the ID from the pathname (e.g., "/contact" -> "contact")
      const id = pathname.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Wait a fraction of a second to ensure the element has been rendered.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        // If we are at the root, scroll to the top.
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]); // This effect runs every time the URL path changes

  return null; // This component does not render anything
};

export default ScrollToSection;