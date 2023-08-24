import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  
  const pathsToExclude = ['/about', '/about/interior', '/about/shop'];

  useEffect(() => {
    if (!pathsToExclude.includes(location.pathname)) {
      const timerId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
  
      return () => clearTimeout(timerId);
    }
  }, [location]);
  
  return null;
}