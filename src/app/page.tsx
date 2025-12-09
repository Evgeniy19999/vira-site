'use client';

import Link from 'next/link';
import Header from '../shared/components/header';
import { useScrollReveal } from '../shared/hooks/use-scroll-reveal';

export default function Home() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const aboutRef = useScrollReveal<HTMLDivElement>();
  const servicesRef = useScrollReveal<HTMLDivElement>();

  const homeServices = [
    {
      id: 1,
      title: 'Кровельные работы',
      description:
        'Надёжные кровельные решения под ключ: подбор материалов, монтаж, гидро- и теплоизоляция, контроль качества и сроков.',
      href: '/krovelnye-raboty',
      image: '/krovelnye-raboty.png',
    },
    {
      id: 2,
      title: 'Демонтаж зданий',
      description:
        'Инженерная подготовка, спецтехника, сортировка отходов и юридическое сопровождение. Безопасный демонтаж в сжатые сроки.',
      href: '/demontazh-zdanij',
      image: '/demontazh.png',
    },
    {
      id: 3,
      title: 'Отделочные работы',
      description:
        'Фасады и интерьер под ключ: выравнивание, облицовка, декоративные покрытия, премиальное качество отделки.',
      href: '/otdelochnye-raboty',
      image: '/otdelochnye-raboty.png',
    },
    {
      id: 4,
      title: 'Земляные работы',
      description:
        'Обследование грунта, котлованы, траншеи, планировка участков. Собственная техника и прозрачная смета.',
      href: '/zemlyanye-raboty',
      image: '/zemlyanye-raboty.png',
    },
    {
      id: 5,
      title: 'Фасадные работы',
      description:
        'Утепление, облицовка и реставрация фасадов. Энергоэффективность, современный внешний вид и защита здания.',
      href: '/fasadnye-raboty',
      image: '/fasadnye-raboty.png',
    },
  ];

  return (
    <>
      <main className="bg-slate-950 text-white">
        {/* HERO – верхний экран с большим фоном "rezka" */}
        <section
          ref={heroRef}
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/rezka.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Header intent="hero" />
          {/* затемняющий градиент поверх фотографии */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-4 pb-24 md:pt-12">
            <p className="text-sm md:text-base uppercase tracking-[0.25em] text-sky-300 mb-4">
              ВИРА — строительная компания
            </p>

            <h1 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Надёжные строительные решения
              <br />
              <span className="font-bold">
                для промышленных и коммерческих объектов
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-slate-100/90">
              Полный цикл работ: монтаж металлоконструкций, инженерных систем,
              фасадные и общестроительные работы. Берём на себя весь процесс
              — от идеи до ввода объекта в эксплуатацию.
            </p>

            {/* Статистика – как на премиум-сайтах */}
            <div className="flex flex-wrap gap-10 mb-10">
              <div>
                <p className="text-3xl md:text-4xl font-semibold">15+</p>
                <p className="text-xs md:text-sm text-slate-100/80">
                  лет опыта
                  <br />
                  в строительстве
                </p>
              </div>

              <div>
                <p className="text-3xl md:text-4xl font-semibold">120+</p>
                <p className="text-xs md:text-sm text-slate-100/80">
                  реализованных
                  <br />
                  объектов
                </p>
              </div>

              <div>
                <p className="text-3xl md:text-4xl font-semibold">100%</p>
                <p className="text-xs md:text-sm text-slate-100/80">
                  прозрачность
                  <br />
                  смет и сроков
                </p>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/80 px-8 py-3 text-sm md:text-base font-medium hover:bg-white hover:text-slate-950 transition"
              >
                Наши услуги
              </Link>

              <Link
                href="/contacts"
                className="inline-flex items-center text-sm md:text-base font-medium underline-offset-4 hover:underline"
              >
                Связаться с нами
              </Link>
            </div>
          </div>

          {/* мягкий затемняющий слой внизу, чтобы скругление выглядело аккуратно */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>

        {/* БЛОК "О НАС" */}
        <section className="bg-slate-950 py-20 md:py-24">
          <div
            ref={aboutRef}
            className="reveal-hidden max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center"
          >
            {/* Текст слева */}
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.25em] text-sky-300 mb-4">
                О нас
              </p>

              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                Гибкие решения — прозрачный результат
              </h2>

              <p className="text-slate-100/90 mb-4">
                ООО «ВИРА» — генеральный подрядчик полного цикла. Работаем с
                частными заказчиками, бизнесом и промышленными
                предприятиями, выполняя кровельные, фасадные, общестроительные
                и инженерные работы.
              </p>

              <p className="text-slate-100/90 mb-6">
                Собственная техника, проверенные материалы и команда
                специалистов позволяют нам реализовывать проекты любой
                сложности в рамках бюджета и сроков, сохраняя безопасность и
                качество.
              </p>

              <ul className="space-y-3 mb-8 text-slate-100/90">
                <li>• Металлоконструкции и промышленные объекты под ключ</li>
                <li>• Сертифицированная сварка и сборка конструкций</li>
                <li>• Монтаж и сопровождение на всех этапах проекта</li>
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-sky-400 px-7 py-3 text-sm md:text-base font-medium text-sky-200 hover:bg-sky-400 hover:text-slate-950 transition"
              >
                Узнать больше о компании
              </Link>
            </div>

            {/* Фото справа */}
            <div className="md:justify-self-end w-full max-w-md mx-auto md:mx-0">
              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-800">
                <img
                  src="/svarka.jpg"
                  alt="Сварочные работы и металлоконструкции"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК "МЫ ПРЕДОСТАВЛЯЕМ СЛЕДУЮЩИЕ" */}
        <section
          ref={servicesRef}
          className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-100"
        >
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            {/* 1 — заголовки более яркие */}
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-300 uppercase mb-2">
              МЫ ПРЕДОСТАВЛЯЕМ СЛЕДУЮЩИЕ
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Гарантии и преимущества
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-slate-100/85 mb-10">
              ВИРА берёт на себя полный цикл работ — от подготовки площадки и
              проектирования до сдачи объекта. Ниже — ключевые направления, в
              которых мы особенно сильны.
            </p>

            {/* Карточки услуг */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {homeServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl shadow-lg shadow-slate-900/10 overflow-hidden flex flex-col group"
                >
                  {/* верхняя часть: картинка */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* нижняя часть: текст */}
                  <div className="flex-1 flex flex-col p-5">
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 flex-1">
                      {service.description}
                    </p>

                    {/* кнопка "Подробнее" */}
                    <div className="mt-4">
                      <a
                        href={service.href}
                        className="
                          inline-flex items-center justify-center
                          px-4 py-2 rounded-full border border-slate-900/40
                          text-xs font-medium uppercase tracking-[0.2em]
                          text-slate-900
                          hover:bg-slate-900 hover:text-white
                          transition-colors
                        "
                      >
                        Подробнее
                        <span className="ml-2 text-sm">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2 — кнопка "Узнать больше" под карточками */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-sky-500 text-slate-950 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-sky-400 transition shadow-lg shadow-sky-500/40"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
