import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const location = useLocation();

  const pathsToExclude = ['/about/interior', '/about/shop']; // この配列にスクロールを保持したいパスを追加

  useEffect(() => {
    if (!pathsToExclude.includes(location.pathname)) {
      window.scrollTo(0, 0);
    }
  }, [location]);
}

export default useScrollToTop;