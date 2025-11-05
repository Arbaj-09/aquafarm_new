'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        '.scroll-fade-in, .scroll-fade-in-up, .scroll-fade-in-left, .scroll-fade-in-right'
      )
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
