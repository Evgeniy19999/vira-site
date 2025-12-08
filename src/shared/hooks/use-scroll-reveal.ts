'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // стартовое состояние – спрятано
    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // элемент вошёл в зону видимости – плавно показываем
            target.classList.add('reveal--visible');
          } else {
            // вышел – снова прячем (чтобы анимация повторялась)
            target.classList.remove('reveal--visible');
          }
        });
      },
      {
        threshold: 0.2,      // 20% элемента в зоне – уже считаем, что видно
        rootMargin: '0px 0px -10% 0px', // чуть раньше скрываем при уходе вверх
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
