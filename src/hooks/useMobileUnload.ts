import { useEffect, useState, RefObject } from 'react';

/**
 * Hook to detect mobile screen width (<= 768px) and monitor container visibility.
 * When on mobile and scrolled out of view (past rootMargin threshold), `isUnloaded` returns `true`,
 * allowing heavy D3 visual components to unload DOM nodes and stop simulations to conserve memory.
 */
export function useMobileUnload<T extends HTMLElement = HTMLDivElement>(
  containerRef: RefObject<T | null>,
  enabled: boolean = true
) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!enabled || !isMobile || !containerRef.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '150px 0px 150px 0px',
        threshold: 0,
      }
    );

    const el = containerRef.current;
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [enabled, isMobile, containerRef]);

  return {
    isMobile,
    isVisible,
    isUnloaded: isMobile && !isVisible && enabled,
    reload: () => setIsVisible(true),
  };
}
