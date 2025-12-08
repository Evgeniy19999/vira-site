'use client';

import Link from 'next/link';
import { cva } from 'class-variance-authority';
import MobileMenu from './mobile-menu';
import { cn } from '@/lib/utils';

// Общий стиль шапки
const header = cva('w-full relative', {
  variants: {
    intent: {
      hero: ['text-white', 'border-white/15'],
      base: ['text-secondary', 'border-on-surface'],
    },
  },
  defaultVariants: {
    intent: 'base',
  },
});

// Стиль ссылок в меню
const navLink = cva(
  [
    'text-xs',
    'font-medium',
    'uppercase',
    'tracking-[0.16em]',
    'whitespace-nowrap',
    'transition-colors',
  ],
  {
    variants: {
      intent: {
        hero: ['text-sky-100', 'hover:text-sky-300'],
        base: ['text-slate-200', 'hover:text-sky-400'],
      },
    },
    defaultVariants: {
      intent: 'base',
    },
  },
);

// подпункты для "Наши услуги"
const servicesSubLinks = [
  { href: '/krovelnye-raboty', text: 'Кровельные работы' },
  { href: '/demontazh-zdanij', text: 'Демонтаж зданий' },
  { href: '/otdelochnye-raboty', text: 'Отделочные работы' },
  { href: '/zemlyanye-raboty', text: 'Земляные работы' },
  { href: '/fasadnye-raboty', text: 'Фасадные работы' },
  {
    href: '/ustrojstvo-inzhenernykh-sistem',
    text: 'Устройство инженерных систем',
  },
  {
    href: '/montazh-metallicheskih-konstrukcij',
    text: 'Монтаж металлических конструкций',
  },
  {
    href: '/montazh-promyshlennogo-oborudovaniya',
    text: 'Монтаж промышленного оборудования',
  },
  { href: '/elektromontazh-pod-klyuch', text: 'Электромонтаж под ключ' },
  { href: '/stroitelstvo', text: 'Строительство' },
];

function Header({ intent = 'base' }: { intent?: 'hero' | 'base' }) {
  const secondaryLinks = [
    { id: 1, href: '/contacts', text: 'Контакты' },
    { id: 2, href: '/partnery', text: 'Партнеры' },
  ];

  const links = [
    { id: 1, href: '/services', text: 'Наши услуги' },
    { id: 2, href: '/spectekhnika', text: 'Спецтехника' },
    { id: 3, href: '/about', text: 'О компании' },
    { id: 4, href: '/nashi-raboty', text: 'Наши работы' },
  ];

  const otherLinks = links.slice(1);

  // один логотип, используем и сверху, и на мобиле
  const logo = (
    <Link href="/" aria-label="VIRA — на главную">
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-semibold tracking-[0.25em] uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
          ВИРА
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-sky-50 drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]">
          строительная компания
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={cn(
        // фиксируем шапку
        'fixed inset-x-0 top-0 z-40 border-b',
        // всегда прозрачная + размытие, как на главной
        'bg-transparent backdrop-blur-[6px]',
        'fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-[8px]',
        intent === 'hero' ? 'border-b border-white/10' : 'border-b border-transparent',
        header({ intent }),
      )}
    >
      {/* Верхняя полоса: логотип + телефон/мессенджеры (только десктоп) */}
      <div className="hidden lg:flex items-center justify-between h-16 px-6 lg:px-14 2xl:px-36">
        <div className="flex items-center">{logo}</div>

        <div className="flex items-center gap-4 text-header-es font-medium">
          <span className="tracking-[0.16em] uppercase text-sky-100 hover:text-sky-300 transition-colors cursor-pointer">
            +7 (905) 620-90-60
          </span>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-[11px] uppercase text-sky-50 hover:bg-white hover:text-slate-950 transition-colors"
            >
              tg
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-[11px] uppercase text-sky-50 hover:bg-white hover:text-slate-950 transition-colors"
            >
              wa
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-[11px] uppercase text-sky-50 hover:bg-white hover:text-slate-950 transition-colors"
            >
              vk
            </a>
          </div>
        </div>
      </div>

      {/* Нижняя полоса: меню */}
      <div className="flex items-center h-16 px-6 lg:px-14 2xl:px-36">
        {/* Логотип на мобиле */}
        <div className="flex items-center flex-[0_0_auto] lg:hidden">
          {logo}
        </div>

        {/* Меню по центру (десктоп) */}
        <nav className="hidden lg:flex justify-center flex-1 gap-8 relative z-40">
          {/* "НАШИ УСЛУГИ" + выпадающее меню */}
          <div className="relative group flex items-center">
            <Link href="/services" className={navLink({ intent })}>
              Наши услуги
            </Link>

            <div
              className="
                absolute left-1/2 top-full -translate-x-1/2 mt-2
                min-w-[280px] max-w-[420px]
                rounded-2xl bg-sky-950/95 border border-sky-400/40 shadow-xl
                py-3 px-4 flex flex-col gap-1 z-50
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-opacity duration-200
              "
            >
              {servicesSubLinks.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2 rounded-lg text-sm text-slate-100/90 hover:bg-sky-800/80 hover:text-white transition-colors"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Остальные пункты */}
          {otherLinks.map(({ id, href, text }) => (
            <Link key={id} href={href} className={navLink({ intent })}>
              {text}
            </Link>
          ))}
        </nav>

        {/* Контакты / Партнеры справа (десктоп) */}
        <div className="hidden lg:flex items-center gap-6 flex-[0_0_auto]">
          {secondaryLinks.map(({ id, href, text }) => (
            <Link
              key={id}
              href={href}
              className="text-header-es text-inherit uppercase font-medium tracking-[0.16em] hover:opacity-80 transition-opacity"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Бургер на мобиле */}
        <div className="flex lg:hidden flex-1 justify-end items-center">
          <MobileMenu intent={intent} />
        </div>
      </div>
    </header>
  );
}

export default Header;
