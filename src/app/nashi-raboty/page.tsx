'use client';

import Header from '@/shared/components/header';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';

function NashiRabotyPage() {
  const heroRef = useScrollReveal<HTMLElement>();

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO с прозрачной шапкой и фото tex-rabota */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/tex-rabota.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* та же прозрачная шапка, что и на других страницах */}
        <Header intent="hero" />

        {/* затемняющий градиент поверх фото */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-28 md:pb-28">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
            Наши работы
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Страница временно на&nbsp;реконструкции
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-100/90 mb-6">
            Мы обновляем раздел с примерами реализованных объектов: добавляем
            актуальные проекты, фотографии и подробные описания. 
            В&nbsp;ближайшее время здесь появится портфолио наших работ.
          </p>

          <a
            href="/contacts"
            className="inline-flex items-center rounded-full border border-sky-400 px-7 py-3 text-sm md:text-base font-medium text-sky-200 hover:bg-sky-400 hover:text-slate-950 transition"
          >
            Связаться с нами
          </a>
        </div>

        {/* мягкий переход вниз, чтобы фон красиво заканчивался */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>
    </main>
  );
}

export default NashiRabotyPage;
