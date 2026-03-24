'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}

const Counter = ({ from = 0, to, duration = 2, className }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString('fr-FR');
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef} className={className}>{from.toLocaleString('fr-FR')}</span>;
};

export default Counter;
