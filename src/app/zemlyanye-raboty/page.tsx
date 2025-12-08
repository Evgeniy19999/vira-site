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

export default function ZemlyanyeRabotyPage() {
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
                level={1}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
              >
                Земляные работы от компании «ВИРА»: Надёжность и эффективность
                на вашем объекте
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Земляные работы – это фундаментальный этап любого строительства,
                благоустройства территории или ландшафтного проекта. От их
                качества и своевременности зависит успех всего мероприятия.
                Компания ООО «ВИРА» предлагает полный комплекс профессиональных
                земляных работ, выполняя задачи любой сложности и масштаба.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/zemlyanye-raboty.png"
                  alt="Земляные работы"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* БЛОК: КОМПЛЕКСНОЕ ВЫПОЛНЕНИЕ */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="max-w-4xl space-y-6 text-white">
            <Title level={3} className="text-2xl md:text-3xl text-white">
              <b>Комплексное</b> выполнение земляных работ
            </Title>
            <Text className="leading-relaxed">
              ООО «ВИРА» выполняет комплекс земляных работ любой сложности.
              Подбираем оптимальную спецтехнику: экскаваторы, грейдеры,
              бульдозеры, скреперы. Реализуем крупные проекты в сжатые сроки
              качественно.
            </Text>
          </div>
        </Container>
      </Section>

      {/* БЛОК: НАШИ ВОЗМОЖНОСТИ – ТЕХНИКА И МАСШТАБ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Рассмотрим
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Наши возможности: <b>Техника и масштаб</b>
              </Title>
            </div>

            <Text className="leading-relaxed">
              Мы осознаем, что правильный выбор техники – залог эффективности.
              Поэтому для решения ваших задач «ВИРА» использует современный парк
              специализированной техники:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Экскаваторы различной мощности и модификаций
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Грейдеры для точной планировки
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Бульдозеры для перемещения грунта
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Скреперы для эффективной разработки и транспортировки
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">
              Наличие мощной техники позволяет нам:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Выполнять проекты любого объема</b>: от небольших
                    котлованов до масштабных промышленных объектов.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Соблюдать сжатые сроки</b>: оперативная мобилизация
                    ресурсов на объект.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Гарантировать качество</b>: профессиональное выполнение
                    всех этапов работ.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* БЛОК: ЧТО ВХОДИТ В КОМПЛЕКС ЗЕМЛЯНЫХ РАБОТ */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Рассмотрим
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Что входит в <b>комплекс</b> земляных работ?
              </Title>
            </div>

            <Text className="leading-relaxed">
              Наши услуги охватывают все необходимые этапы подготовки
              территории:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Подготовка строительных площадок к основным работам.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Устройство котлованов под фундаменты зданий и сооружений.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Прокладка траншей и каналов для коммуникаций.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Точная зачистка дна земляных сооружений.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Укрепление откосов и стенок выемок.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Возведение насыпей и планировка рельефа.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* БЛОК: ПОЧЕМУ ВЫБИРАЮТ ВИРУ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Вот
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Почему выбирают «<b>ВИРУ</b>» для земляных работ?
              </Title>
            </div>

            <Text className="leading-relaxed">
              Сотрудничая с нами, вы получаете не просто услугу, а надёжного
              партнёра и ряд существенных преимуществ:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Гарантия качества</b>: строгий контроль на всех этапах
                    выполнения работ.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Надёжный партнёр</b>: ответственный подход и выполнение
                    взятых обязательств.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Чёткое соблюдение сроков</b>: пунктуальность – наш
                    принцип. Мы ценим ваше время.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Комфортная стоимость</b>: оптимальное соотношение цены и
                    качества услуг. Мы предлагаем гибкие условия.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* БЛОК: СТОИМОСТЬ */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Оценим
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Стоимость земляных работ
              </Title>
            </div>

            <Text className="leading-relaxed">
              Цена на земляные работы формируется индивидуально и зависит от:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">Объёма работ;</span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Сложности и специфики задачи;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Требуемых сроков выполнения.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">
              <b>Важное преимущество «ВИРЫ»</b>: наш собственный значительный
              парк спецтехники позволяет при необходимости оперативно
              увеличивать количество машин на объекте. Это даёт нам возможность{' '}
              <b>значительно ускорить реализацию проекта</b> без потери
              качества, что часто является ключевым фактором для наших клиентов.
            </Text>

            {/* единственная кнопка "Рассчитать стоимость" на странице */}
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
