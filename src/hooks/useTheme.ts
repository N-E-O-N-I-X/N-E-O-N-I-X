import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    
    function applyTheme() {
      const isDark = mq.matches;
      document.documentElement.classList.remove('theme-dark', 'theme-light');
      document.documentElement.classList.add(isDark ? 'theme-dark' : 'theme-light');
    }
    
    applyTheme();
    mq.addEventListener('change', applyTheme);
    
    return () => mq.removeEventListener('change', applyTheme);
  }, []);
}
