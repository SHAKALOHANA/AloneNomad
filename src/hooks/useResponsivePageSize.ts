import { useState, useEffect } from 'react';

export function useResponsivePageSize() {
  const [pageSize, setPageSize] = useState(8); // 기본값(데스크톱)

  useEffect(() => {
    function checkSize() {
      const width = window.innerWidth;
      if (width < 768) {
        // 모바일 기준
        setPageSize(4);
      } else if (width < 1024) {
        // 태블릿 기준
        setPageSize(9);
      } else {
        // 그 외(데스크톱)
        setPageSize(8);
      }
    }

    checkSize(); // 초기 실행
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return pageSize;
}
