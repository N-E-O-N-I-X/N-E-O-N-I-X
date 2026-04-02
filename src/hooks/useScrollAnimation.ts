import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(itemsCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemsCount).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const container = containerRef.current;
    if (container) {
      const items = container.querySelectorAll('[data-index]');
      items.forEach(item => observer.observe(item));
    }

    return () => {
      if (container) {
        const items = container.querySelectorAll('[data-index]');
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, [itemsCount]);

  return { containerRef, visibleItems };
}
