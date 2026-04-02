import { useEffect } from 'react';

export function useScrollbar() {
  useEffect(() => {
    const scrollbarTrack = document.createElement('div');
    scrollbarTrack.className = 'scrollbar-overlay';
    
    const scrollbarThumb = document.createElement('div');
    scrollbarThumb.className = 'scrollbar-thumb';
    
    scrollbarTrack.appendChild(scrollbarThumb);
    document.body.appendChild(scrollbarTrack);

    let hideTimer: number;
    let isDragging = false;

    const updateScrollbar = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const trackHeight = scrollbarTrack.clientHeight;
      
      const thumbHeight = Math.max(
        (window.innerHeight / document.documentElement.scrollHeight) * trackHeight,
        40 
      );
    
      const thumbTop = scrollPercentage * (trackHeight - thumbHeight);

      scrollbarThumb.style.height = `${thumbHeight}px`;
      scrollbarThumb.style.top = `${thumbTop}px`;
    };

    const showScrollbar = () => {
      scrollbarTrack.classList.add('is-visible');
      clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        if (!isDragging) {
          scrollbarTrack.classList.remove('is-visible');
        }
      }, 700);
    };

    const handleTrackClick = (e: MouseEvent) => {
      if (e.target === scrollbarTrack) {
        const trackRect = scrollbarTrack.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        const trackHeight = scrollbarTrack.clientHeight;
        const scrollPercentage = clickY / trackHeight;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        window.scrollTo({
          top: scrollPercentage * maxScroll,
          behavior: 'smooth'
        });
      }
    };

    let startY = 0;
    let startScrollTop = 0;

    const handleThumbMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = window.scrollY;
      scrollbarTrack.classList.add('is-visible');
      document.body.style.userSelect = 'none';
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = e.clientY - startY;
      const trackHeight = scrollbarTrack.clientHeight;
      const thumbHeight = parseFloat(scrollbarThumb.style.height);
      const maxThumbTop = trackHeight - thumbHeight;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      const scrollDelta = (deltaY / maxThumbTop) * maxScroll;
      
      window.scrollTo(0, startScrollTop + scrollDelta);
      
      requestAnimationFrame(updateScrollbar);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.userSelect = ''; 
        showScrollbar();
      }
    };

    // События
    const handleScroll = () => {
      if (!isDragging) { 
        updateScrollbar();
      }
      showScrollbar();
    };

    const handleResize = () => {
      updateScrollbar();
      showScrollbar();
    };

    scrollbarTrack.addEventListener('click', handleTrackClick);
    scrollbarThumb.addEventListener('mousedown', handleThumbMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    updateScrollbar();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      scrollbarTrack.removeEventListener('click', handleTrackClick);
      scrollbarThumb.removeEventListener('mousedown', handleThumbMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(hideTimer);
      document.body.style.userSelect = '';
      scrollbarTrack.remove();
    };
  }, []);
}
