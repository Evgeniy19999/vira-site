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

function MntazhMetallicheskihKonstrukcijPage() {
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
                <b>Монтаж</b> металлических конструкций
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                ООО «ВИРА» своими силами выполняет монтаж металлоконструкций
                любой сложности. Работы по монтажу ведутся квалифицированными
                специалистами.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/montazh-metallicheskih-konstrukcij.png"
                  alt="montazh metallicheskih konstrukcij"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* От идеи до ключа: стальные решения */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                стальные решения
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                От идеи до ключа: надёжные <b>стальные</b> решения
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Специализируемся на возведении ангаров, торгово-развлекательных
              центров, автосалонов, промышленных зданий, производственных цехов
              и т.д. Используем сталь и профессиональный прокат: швеллеры,
              трубы, балки. Гарантия скорости, точности и долговечности.
              Реализуем проекты «под ключ» с индивидуальным подходом. Ваше
              доверие — наша безупречная работа!
            </Text>
          </div>
        </Container>
      </Section>

      {/* Надёжный монтаж металлоконструкций */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              Надёжный
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Монтаж <b>металлоконструкций</b> от компании «Вира»
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Мы реализуем профессиональный монтаж металлоконструкций двумя
              методами:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сварка</b> — для неразъемных, долговечных решений;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Болтовые</b> соединения — для гибких и мобильных
                    конструкций.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Сварные конструкции */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              применяем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Сварные</b> конструкции: прочность и надежность
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Компания «Вира» использует сварку, чтобы обеспечить:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Монолитность</b> — соединения без зазоров и деформаций;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Стойкость к нагрузкам</b> — идеально для промышленных
                    объектов;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Срок службы</b> — десятилетия без потери качества.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Наши сертифицированные сварщики работают с любыми типами металлов,
              гарантируя точность и соответствие ГОСТ.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Болтовые соединения */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              применяем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Болтовые</b> соединения: универсальность и скорость
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">«Вира» применяет:</Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Обычные болты</b> — для быстрого монтажа бюджетных
                    проектов;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Высокопрочные болты</b> — для мостов, крановых путей и
                    сложных инженерных систем.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Преимущества для клиентов:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Возможность <b>демонтажа и повторной сборки</b> — например,
                    для временных сооружений;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сокращение сроков</b> — готовые элементы монтируются в 2
                    раза быстрее;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Адаптивность</b> — легко внести изменения в конструкцию.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Какой метод выбрать */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              Определяем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Какой метод выбрать?
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Специалисты «Вира» подберут оптимальное решение, исходя из ваших
              задач:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сварка</b> — для капитальных зданий, резервуаров,
                    каркасов;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Болтовые крепления</b> — для ангаров, вышек, модульных
                    конструкций.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Гарантия качества + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              с намм всегда
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Гарантия</b> качества
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Все работы выполняются с использованием профессионального
              оборудования и материалов от проверенных поставщиков. Мы
              предоставляем:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">Техническую документацию;</span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">Сертификаты на материалы;</span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Постгарантийное обслуживание.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            {/* единственная кнопка "Рассчитать стоимость" */}
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

export default MntazhMetallicheskihKonstrukcijPage;
