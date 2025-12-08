'use client';

import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Text from '@/shared/components/text';
import Title from '@/shared/components/title';
import {
  InfoBlock,
  InfoBlockContent,
  InfoBlockContentItem,
} from '@/shared/components/list';
import LinkButton from '@/shared/components/link-button';
import Image from 'next/image';

function UstrojstvoInzhenernykhSistemPage() {
  return (
    <div className="min-w-[90%] bg-slate-950">
      {/* прозрачная шапка только на hero */}
      <Header intent="hero" />

      {/* HERO: текст + картинка */}
      <Section className="relative -mt-16 pt-24 pb-24 bg-gradient-to-b from-slate-950/95 via-slate-950 to-slate-950">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Текст слева */}
            <div className="max-w-3xl space-y-6">
              <Text
                semantic={false}
                className="uppercase tracking-[0.25em] text-white/90 text-xs md:text-sm drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]"
              >
                Реализуем
              </Text>

              <Title
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
                level={1}
              >
                Монтаж <b>инженерных систем</b> – всех видов
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Мы выполняем полный спектр операций, проводим монтаж и ремонт
                инженерных систем всех видов − электрических, слаботочных,
                вентиляционных, отопительных и т. д.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/montazh-inzhenernyh-sistem.png"
                  alt="montazh inzhenernyh sistem"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* "ВИРА" прямо заявляет о своей экспертизе */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                экспертиза
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                &quot;<b>ВИРА</b>&quot; прямо заявляет о своей экспертизе
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Вы можете доверить нам выполнение задач любого уровня сложности.
              Большой опыт работы, сформированный штат мастеров, наличие
              современного оборудования и приспособлений − гарантия успешной
              реализации проекта.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Инженерные системы – жизненные артерии */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-4">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                инженерные системы это
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                Жизненные Артерии Вашего <b>Здания</b>
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Эффективная эксплуатация любого современного объекта – от квартиры
              до промышленного комплекса – невозможна без слаженной работы
              инженерных систем. Это &quot;кровеносные сосуды&quot; здания, обеспечивающие
              тепло, свет, воду, свежий воздух и безопасность. &quot;ВИРА&quot; реализует
              полный спектр работ по монтажу и ремонту всех видов инженерных
              сетей.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Наш профессиональный охват */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              рассмотрим
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Наш Профессиональный <b>Охват</b>:
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Мы выполняем проекты любой сложности по следующим направлениям:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Электроснабжение</b>: От внутренней разводки до
                    вводно-распределительных устройств.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Отопление и Водоснабжение</b>: Монтаж котельных,
                    радиаторов, трубопроводов, сантехнического оборудования.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Вентиляция и Кондиционирование</b>: От бытовых систем до
                    сложной промышленной вентиляции.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Слаботочные Системы</b>: Структурированные кабельные сети
                    (СКС), видеонаблюдение, СКУД, пожарная и охранная
                    сигнализация, интернет.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Наш подход к монтажу */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              рассмотрим
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Наш Подход к <b>Монтажу</b>: Четкость и Этапность
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Каждый проект монтажа инженерных сетей реализуется по отработанной
              схеме:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Анализ и Планирование</b>: Детальное изучение объекта,
                    проекта, специфики задач.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Подготовка Трасс</b>: Прокладка каналов, штробление,
                    монтаж крепежных систем для будущих сетей.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Монтаж Оборудования и Коммуникаций</b>: Установка щитов,
                    котлов, вентиляционных установок, прокладка кабелей, труб,
                    воздуховодов.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Пусконаладка и Сдача</b>: Комплексное тестирование
                    системы, пробный пуск, настройка, инструктаж заказчика.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Оперативный ремонт + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              Проводим
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Оперативный <b>Ремонт</b>: Восстановление Комфорта и Безопасности
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Нарушения в работе систем (износ, аварии, ошибки эксплуатации)
              требуют немедленного реагирования. &quot;ВИРА&quot; оперативно диагностирует
              проблему и проводит квалифицированный ремонт инженерных систем
              любой сложности. Мы знаем, как быстро вернуть вашему объекту
              работоспособность и комфорт.
            </Text>

            {/* единственная кнопка на странице */}
            <div className="flex justify-end mt-6">
              <div className="w-60">
                <LinkButton url="/contacts" variant="light">
                  Рассчитать стоимость
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default UstrojstvoInzhenernykhSistemPage;
