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

function OtdelochnyeRabotyPage() {
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
                <b>отделочные</b> работы любой сложности
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Мы выполняем чистовую и черновую отделку на крупных объектах,
                включая офисы, загородные дома, магазины, производственные
                помещения. Цены на услуги всегда оговариваются индивидуально,
                общая стоимость будет просчитана специалистами заранее.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/otdelochnye-raboty.png"
                  alt="Отделочные работы"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Вира: профессиональные черновые и чистовые работы */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Вира
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                Вира: <b>профессиональные</b> черновые и чистовые работы
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Всегда точные расчёты, качественные материалы и контроль каждого
              этапа превращают ваш ремонт в идеально ровную и стильную
              реальность, с точным соблюдением сроков и бюджета.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Подготовка и оценка */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              первоначальная
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Подготовка и <b>оценка</b>
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Перед началом работ наши специалисты:
            </Text>
            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Осматривают помещения, замеряют площади и выявляют возможные
                    сложности (например, неровности стен или слабую
                    электропроводку).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Обсуждают с заказчиком все требования и финансовые
                    возможности. Иногда реставрация оказывается достаточной, но
                    при необходимости мы предложим капитальный ремонт или полную
                    перестройку под «ключ».
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Черновые работы */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              реализуем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Черновые</b> работы
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              На этом этапе «Вира» создаёт прочную основу для будущей отделки.
              Среди основных видов работ:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Электромонтаж</b>: штробление стен, прокладка кабелей,
                    установка электрощита и монтажных коробок (выключатели и
                    розетки устанавливаются после финишной отделки).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Штукатурка и выравнивание</b>: нанесение штукатурки или
                    шпаклёвки на стены и потолки, а при необходимости — монтаж
                    гипсокартона на профиль.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Чёрновой пол</b>: заливка самовыравнивающимися растворами
                    для получения ровной поверхности.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сантехника и отопление</b>: установка труб, фильтров,
                    коллекторов, монтаж радиаторов и металлопластиковых
                    коммуникаций в соответствии с проектом.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Все работы выполняются с жёстким контролем качества: проверяем
              герметичность трубопроводов, правильность развязки электрики и
              точность выравнивания поверхностей.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Чистовая отделка */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              реализуется
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Чистовая</b> отделка
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              После подготовки «Вира» занимается финишным оформлением интерьера.
              Мы выполняем:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Малярные работы</b> – грунтовка и покраска в несколько
                    слоёв для стойкого и ровного покрытия.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Декоративная отделка стен</b>: наносим фактурную
                    штукатурку, имитирующую камень или старую штукатурку, или
                    клеим обои (бумажные, флизелиновые, виниловые и другие).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Укладку напольного покрытия</b>: от практичного линолеума
                    и ковролина до более дорогого паркета и керамогранита. По
                    периметру устанавливаем плинтуса, скрывающие зазоры и
                    позволяющие спрятать провода.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Монтаж дверей</b>: выравниваем дверную коробку, заливаем
                    пустоты монтажной пеной, затем устанавливаем полотно и
                    фурнитуру.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Финишная отделка придаёт помещению законченный вид и учитывает все
              эстетические пожелания заказчика.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Почему выбирают Виру + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              вот
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Почему <b>выбирают</b> «Виру»
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              После подготовки «Вира» занимается финишным оформлением интерьера.
              Мы выполняем:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Индивидуальный подход</b>: мы подбираем материалы и
                    технологии в соответствии с вашим бюджетом и стилевыми
                    предпочтениями.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Комплексность услуг</b>: от оценки состояния объекта до
                    полной сдачи «под ключ».
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Оптимальные сроки</b>: грамотная организация работ и
                    наличие собственной бригады специалистов позволяют быстро и
                    качественно выполнять проекты.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Высокое качество</b>: используем только проверенные
                    материалы и современное оборудование, проводим контроль на
                    каждом этапе.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Обратившись в «Виру», вы получите профессиональную отделку, где
              каждая деталь тщательно продумана и реализована с учётом ваших
              потребностей.
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

export default OtdelochnyeRabotyPage;
