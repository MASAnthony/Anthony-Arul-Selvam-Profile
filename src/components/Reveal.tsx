import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'w-fit' | 'w-full';
  delay?: number;
  fullHeight?: boolean;
}

export const Reveal = ({ children, width = 'w-fit', delay = 0, fullHeight = false }: RevealProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only animate once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`${width} ${fullHeight ? 'h-full' : ''} relative`}>
      <div
        style={{
          transitionDuration: '1000ms',
          transitionDelay: `${delay}ms`,
        }}
        className={`transform transition-all duration-1000 ease-out ${fullHeight ? 'h-full' : ''} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
