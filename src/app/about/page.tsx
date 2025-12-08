'use client';

import Link from 'next/link';
import Header from '@/shared/components/header';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';

export default function AboutPage() {
  const heroRef = useScrollReveal<HTMLElement>();
  const introRef = useScrollReveal<HTMLElement>();
  const strengthsRef = useScrollReveal<HTMLElement>();
  const teamRef = useScrollReveal<HTMLElement>();

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO "О компании" с большой фотографией */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          // замени на свою картинку, если нужно
          backgroundImage: "url('/svarka.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header intent="hero" />

        {/* затемнение поверх фотографии */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-28 md:pb-28">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
            О компании
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Проектно-строительная компания
            <span className="block font-bold mt-1">«ВИРА»</span>
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-slate-100/90 mb-6">
            Мы сопровождаем объект на всех этапах: от первых эскизов и
            инженерных решений до ввода в эксплуатацию и последующего
            обслуживания. Работаем как генеральный подрядчик и надёжный
            партнёр для бизнеса и промышленности.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 max-w-xl text-sm md:text-base">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">15+</p>
              <p className="text-xs md:text-sm text-slate-100/80">
                лет опыта в строительстве
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold">120+</p>
              <p className="text-xs md:text-sm text-slate-100/80">
                реализованных объектов
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold">100%</p>
              <p className="text-xs md:text-sm text-slate-100/80">
                фокус на безопасности и качестве
              </p>
            </div>
          </div>
        </div>

        {/* мягкий градиент внизу */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Блок "Кем мы являемся" */}
<section
  ref={introRef}
  className="bg-slate-950 py-16 md:py-20 border-t border-white/5"
>
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
    {/* ЛЕВАЯ колонка — текст */}
    <div className="md:max-w-3xl">
      <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
        О нас
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold mb-5">
        Кем мы являемся
      </h2>

      <div className="space-y-4 text-sm md:text-base text-slate-100/90">
        <p>
          ООО «ВИРА» — проектно-строительная компания полного цикла. Мы
          выполняем капитальное строительство, реконструкцию и ремонт
          промышленных, коммерческих и общественных объектов, а также
          работаем с мало- и многоэтажной застройкой.
        </p>
        <p>
          Мы выступаем как генеральный подрядчик и субподрядчик, берём на
          себя организацию работ, координацию участников проекта и контроль
          качества на всех этапах. Деятельность компании сертифицирована и
          соответствует действующим нормам и стандартам.
        </p>
      </div>
    </div>

    {/* ПРАВАЯ колонка — просто логотип */}
    <div className="flex justify-start md:justify-end">
      <img
        src="/Vira.png"
        alt="ВИРА"
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
      />
    </div>
  </div>
</section>

      {/* Сильные стороны / подход к работе */}
      <section
        ref={strengthsRef}
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-100 py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
              Наш подход
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Организация строительства под ключ
            </h2>
            <p className="text-sm md:text-base text-slate-100/85">
              Мы комбинируем инженерную экспертизу, собственную технику и
              прозрачные процессы, чтобы заказчик получал предсказуемый
              результат без сюрпризов по срокам и бюджету.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Организация строительства */}
            <article className="bg-white/95 rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/10 p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">
                Организация строительства
              </h3>
              <p className="text-sm text-slate-700 mb-3 flex-1">
                Планируем этапы, формируем графики и координируем подрядчиков.
                Соблюдаем нормы безопасности и контролируем качество выполнения
                работ на каждом этапе.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>— Разработка схем организации строительства</li>
                <li>— Контроль сроков и критических этапов</li>
                <li>— Отчётность по ключевым показателям</li>
              </ul>
            </article>

            {/* Техническая оснащённость */}
            <article className="bg-white/95 rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/10 p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">
                Техническая оснащённость
              </h3>
              <p className="text-sm text-slate-700 mb-3 flex-1">
                Используем собственную спецтехнику, оборудование и
                инструменты для выполнения монтажных, фундаментных и
                отделочных работ, а также для контроля качества.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>— Собственный парк техники и механизмов</li>
                <li>— Современное измерительное оборудование</li>
                <li>— Сокращение сроков и затрат за счёт ресурсов компании</li>
              </ul>
            </article>

            {/* Подбор материалов */}
            <article className="bg-white/95 rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/10 p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">
                Подбор материалов
              </h3>
              <p className="text-sm text-slate-700 mb-3 flex-1">
                Проектируем решения с учётом конкретных задач объекта и
                предлагаем оптимальные по цене и качеству строительные и
                отделочные материалы.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>— Анализ требований объекта</li>
                <li>— Подбор материалов под эксплуатационные условия</li>
                <li>— Организация поставок для стройплощадки</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Наши специалисты + блок про нормы и финансы */}
      <section ref={teamRef} className="bg-slate-950">
        {/* фоновое фото с параллаксом */}
        <div
          className="relative bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/engineers.png')" }}
        >
          {/* синий полупрозрачный слой поверх фото */}
          <div className="absolute inset-0 bg-sky-900/80 mix-blend-multiply" />

          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-white">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-200 mb-3">
              О качестве
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Наши специалисты
            </h2>
            <p className="max-w-3xl text-sm md:text-base text-sky-50/90">
              В штате компании — инженеры-проектировщики, специалисты по
              электромонтажу, устройству инженерных систем и коммуникаций,
              кровельным и общестроительным работам. Квалификация сотрудников
              гарантирует качественную реализацию проекта.
            </p>
          </div>
        </div>

        {/* нижний блок с двумя колонками на белом фоне */}
        <div className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-sm md:text-base uppercase tracking-[0.22em] text-sky-900 mb-2">
                Соблюдение норм, стандартов, законодательства
              </h3>
              <p className="text-sm md:text-base text-slate-700">
                ООО «ВИРА» соблюдает требования общих и специальных строительных
                норм, действующих для разных типов объектов. Проектная и
                исполнительная документация ведётся с учётом актуальных
                требований и отраслевых регламентов.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base uppercase tracking-[0.22em] text-sky-900 mb-2">
                Прозрачные финансовые условия
              </h3>
              <p className="text-sm md:text-base text-slate-700">
                Сметы формируются до начала работ и содержат актуальные цены на
                материалы, оборудование и услуги. Стоимость фиксируется в
                договоре и не меняется без согласования с заказчиком.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contacts"
              className="px-6 py-3 rounded-full bg-sky-500 text-slate-950 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-sky-400 transition shadow-lg shadow-sky-500/40"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
