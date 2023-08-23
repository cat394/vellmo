import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const location = useLocation();
  
  const pathsToExclude = ['/about/interior', '/about/shop'];

  useEffect(() => {
    if (!pathsToExclude.includes(location.pathname)) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null; // Reactコンポーネントとしてのエラーを避けるためにnullを返します。
}

export default useScrollToTop;
