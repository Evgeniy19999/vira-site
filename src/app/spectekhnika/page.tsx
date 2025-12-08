'use client';

import Header from '@/shared/components/header';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';
import HeavyEquipmentPreview from './components/heavy-equipment-preview';
import { data } from './data';

function SpectekhnikaPage() {
  const heroRef = useScrollReveal<HTMLElement>();
  const listRef = useScrollReveal<HTMLElement>();

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO c прозрачной шапкой и фото vid.jpg */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/vid.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* та же шапка, что и на главной/о компании */}
        <Header intent="hero" />

        {/* затемнение поверх фото под текст */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-28 md:pb-28">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
            У нас
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Собственный парк спецтехники
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-slate-100/90">
            Наша техника — это гарантия оперативности, качества и эффективности
            выполнения самых сложных строительных и сопутствующих задач. Мы
            тщательно подбираем и поддерживаем машины в отличном техническом
            состоянии, чтобы обеспечить наших клиентов надёжным инструментом
            для реализации их идей.
          </p>
        </div>

        {/* мягкий переход к следующему блоку */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Список техники в карточках */}
      <section
        ref={listRef}
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-100 py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
              Наш парк
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Техника для комплексных строительных задач
            </h2>
            <p className="text-sm md:text-base text-slate-100/85">
              Мы подбираем тип техники под конкретные работы, учитываем
              особенности площадки и график строительства. Возможна аренда с
              экипажем и полным техническим сопровождением.
            </p>
          </div>

          {/* Карточки 1 колонка на мобиле, 2 колонки на десктопе */}
          <div className="grid gap-6 md:grid-cols-2">
            {data.map((item) => (
              <HeavyEquipmentPreview
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SpectekhnikaPage;
