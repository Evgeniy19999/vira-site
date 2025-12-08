'use client';

import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Text from '@/shared/components/text';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';
import ServicesPreview from './components/services-preview';

function ServicesPage() {
  // анимация для надписи "Наши услуги"
  const titleRef = useScrollReveal<HTMLParagraphElement>();
  // анимация для текстового блока
  const textBlockRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-w-[90%]">
      {/* прозрачная шапка, как на главной */}
      <Header intent="hero" />

      {/* ХЕРО-БЛОК С ФОНОМ */}
      <Section
        className="relative overflow-hidden text-white -mt-16 pt-16"
        style={{
          backgroundImage: "url('/uslugi.png')", // картинка в public/uslugi.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* затемнение поверх фото */}
        <div className="absolute inset-0 bg-slate-950/60" />

        {/* плавный переход вниз без жёсткой линии */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />

        <Container className="relative pt-32 pb-36">
          {/* НАДПИСЬ "НАШИ УСЛУГИ" */}
          <Text
            ref={titleRef}
            className="reveal-hidden text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mt-6 mb-6"
          >
            Наши услуги
          </Text>

          {/* ТЕКСТОВЫЙ БЛОК С ОПИСАНИЕМ */}
          <div
            ref={textBlockRef}
            className="reveal-hidden max-w-3xl space-y-4 text-sm md:text-base text-slate-100/90"
          >
            <Text semantic={false}>
              Наша строительная компания реализует любые проекты &quot;
              <b>под ключ</b>&quot;. Мы специализируемся на полном цикле работ:
              проектирование и согласование, возведение жилых и коммерческих
              зданий, промышленных объектов и инженерных сооружений, капитальный
              ремонт и реконструкция, все виды инженерных сетей (электрика,
              сантехника, вентиляция, отопление), а также благоустройство
              территорий и комплексная внутренняя отделка.
            </Text>

            <Text semantic={false}>
              Наши силы и компетенции охватывают весь спектр строительных задач
              любой сложности.
            </Text>

            <Text semantic={false}>
              <b>
                Узнайте подробнее, переходя по интересующим разделам ниже.
              </b>
            </Text>
          </div>
        </Container>
      </Section>

      {/* КАРТОЧКИ УСЛУГ (как на скрине 2.2) */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesPreview />
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
