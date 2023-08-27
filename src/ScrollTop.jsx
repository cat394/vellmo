import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ excludePaths = [] }) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 特定のパスの遷移時にスクロールリセットを無効化
    if (!excludePaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname, excludePaths]);

  return null;
}

export default ScrollToTop;
