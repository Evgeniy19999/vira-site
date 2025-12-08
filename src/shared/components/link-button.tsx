import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type LinkButtonProps = {
  url: string;
  children: React.ReactNode;
  variant?: 'default' | 'light';
};

function LinkButton({ url, children, variant = 'default' }: LinkButtonProps) {
  // базовые стили — БЕЗ hover:after:h-full
  const base =
    'relative flex justify-between py-2 font-medium uppercase hover:px-3 ' +
    "after:z-0 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:content-[''] " +
    'after:transition-all after:duration-300 after:ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] ' +
    'transition-all duration-300 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]';

  const variants = {
    // тёмный — как раньше, с заливкой при ховере
    default:
      'text-header-vs text-on-surface after:bg-on-surface hover:text-white hover:after:h-full',

    // светлый — белый текст и подчёркивание, БЕЗ заливки
    light:
      'text-white after:bg-white hover:text-white hover:after:bg-white hover:after:h-[1px]',
  } as const;

  return (
    <Link href={url} className={`${base} ${variants[variant]}`}>
      <span className="z-10">{children}</span>
      <ArrowRight className="z-10" size={16} absoluteStrokeWidth />
    </Link>
  );
}

export default LinkButton;
