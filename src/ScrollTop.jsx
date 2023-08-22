import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const { pathname } = useLocation();
  const excludePaths = ['/about/interior', '/about/shop'];

  useEffect(() => {
    if (!excludePaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
