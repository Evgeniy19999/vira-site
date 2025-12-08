import Link from 'next/link';

function Footer() {
  const navLinks = [
    { id: 1, href: '/', text: 'Главная' },
    { id: 2, href: '/services', text: 'Наши услуги' },
    { id: 3, href: '/spectekhnika', text: 'Спецтехника' },
    { id: 4, href: '/about', text: 'О компании' },
    { id: 5, href: '/nashi-raboty', text: 'Наши работы' },
    { id: 6, href: '/partnery', text: 'Партнеры' },
    { id: 7, href: '/contacts', text: 'Контакты' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 bg-sky-950 text-white">
      {/* Верхняя часть футера */}
      <div className="px-6 py-12 flex justify-center">
        <div className="w-full max-w-maxContainerWidth grid gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Контакты
            </h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                Тел.:{' '}
                <span className="font-semibold">+7 (905) 620-90-60</span>
              </p>
              <p>
                E-mail:{' '}
                <a
                  href="mailto:vira-novomoskovsk@mail.ru"
                  className="underline underline-offset-4 hover:text-sky-300"
                >
                  vira-novomoskovsk@mail.ru
                </a>
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-white/60">
                Мы в мессенджерах
              </span>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="Telegram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-semibold hover:bg-white hover:text-sky-900 transition-colors"
                >
                  TG
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-semibold hover:bg-white hover:text-sky-900 transition-colors"
                >
                  WA
                </a>
                <a
                  href="#"
                  aria-label="VK"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-semibold hover:bg-white hover:text-sky-900 transition-colors"
                >
                  VK
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-white/80">
              {navLinks.map(({ id, href, text }) => (
                <Link
                  key={id}
                  href={href}
                  className="hover:text-sky-300 transition-colors"
                >
                  {text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Бренд / О компании */}
          <div className="flex flex-col items-start md:items-end gap-4 text-right">
            <div className="text-left md:text-right">
              <p className="text-2xl font-bold tracking-[0.25em] uppercase">
                ВИРА
              </p>
              <p className="text-xs mt-1 uppercase tracking-[0.35em] text-white/70">
                Строительная компания
              </p>
            </div>
            <p className="max-w-sm text-sm text-white/75 text-left md:text-right">
              Строим промышленные и коммерческие объекты под ключ: от идеи
              и проектирования до ввода в эксплуатацию. Соблюдаем сроки,
              бюджет и требования безопасности.
            </p>
          </div>
        </div>
      </div>

      {/* Нижняя полоска */}
      <div className="px-6 py-4 text-center text-xs text-white/60">
        © {year} ВИРА. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
