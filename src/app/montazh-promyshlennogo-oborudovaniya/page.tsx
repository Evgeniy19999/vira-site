'use client';

import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Text from '@/shared/components/text';
import Title from '@/shared/components/title';
import {
  InfoBlock,
  InfoBlockTitle,
  InfoBlockContent,
  InfoBlockContentItem,
} from '@/shared/components/list';
import LinkButton from '@/shared/components/link-button';
import Image from 'next/image';

function MontazhPromyshlennogoOborudovaniyaPage() {
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
                <b>Монтаж</b> промышленного оборудования
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Предоставляем полный комплекс услуг по монтажу, транспортировке и
                пусконаладке оборудования химической и нефтеперерабатывающей
                промышленности.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/montazh-promyshlennogo-oborudovaniya.png"
                  alt="montazh promyshlennogo oborudovaniya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Профессионализм без компромиссов */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                профессионализм
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                <b>Профессионализм</b> без компромиссов — ваша выгода!
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Гарантируем монтаж по ГОСТ, полный цикл услуг: демонтаж, доставка,
              установка. Соблюдаем сроки, исключаем переплаты — работаем без
              посредников. Ваш проект реализуют бригады с опытом от 10 лет. Наша
              ответственность — ваш надежный результат!
            </Text>
          </div>
        </Container>
      </Section>

      {/* «Вира»: промышленный монтаж под ключ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-4">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                предлагаем решения компании
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                «<b>Вира</b>»: Промышленный монтаж под ключ — один подрядчик,
                100% результат
              </Title>
            </div>
            <Text className="text-white leading-relaxed">
              Монтаж промышленного оборудования — многоэтапный процесс, требующий
              слаженной работы инженеров, монтажников и логистов. Как компания
              полного цикла, «Вира» берет на себя все этапы — от демонтажа старых
              конструкций до ввода объекта в эксплуатацию, гарантируя клиентам
              единого ответственного подрядчика и отсутствие посредников.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Этапы работ */}
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
              <b>Этапы</b> работ, которые «Вира» выполняет самостоятельно:
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Мы реализуем профессиональный монтаж металлоконструкций следующим
              методом:
            </Text>

            <InfoBlock>
              <InfoBlockTitle>
                <span className="text-white">1. Проектирование и подготовка</span>
                </InfoBlockTitle>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Анализ технической документации, разработка ППР с учетом ГОСТ,
                    СНиП и особенностей объекта.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Согласование нюансов с заказчиком, поставщиками и
                    контролирующими органами.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Помощь в выборе оборудования: подбор моделей, оптимизирующих
                    бюджет и сроки.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <InfoBlock>
              <InfoBlockTitle>
                <span className="text-white">2. Логистика и контроль качества</span>
              </InfoBlockTitle>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Организация доставки негабаритных грузов спецтранспортом.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Проверка оборудования на соответствие спецификациям:
                    целостность, комплектация, сертификаты.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <InfoBlock>
              <InfoBlockTitle>
                <span className="text-white">3. Строительно-монтажные работы</span>
                </InfoBlockTitle>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Подготовка площадки: заливка фундамента, прокладка временных
                    коммуникаций.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Установка оборудования с применением кранов, домкратов и
                    систем стабилизации.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Подключение к инженерным сетям: электричество, вентиляция,
                    водоснабжение.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <InfoBlock>
              <InfoBlockTitle>
                <span className="text-white">4. Пусконаладка и сопровождение</span>
                </InfoBlockTitle>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Тестирование оборудования, обучение персонала заказчика.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Оформление разрешительной документации и гарантийных
                    обязательств.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Постгарантийное обслуживание и ремонт.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Пример комплексного подхода */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              продемонстрируем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Пример <b>комплексного</b> подхода:
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Для монтажа 15-тонного станка в цеху с ограниченным пространством
              «Вира»:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Разработала 3D-модель для точной планировки;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Изготовили усиленные крепления в собственной мастерской;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Провели ночной монтаж, чтобы не останавливать производство.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Итог: объект сдан на 7 дней раньше срока, экономия заказчика — 420
              000 руб.
            </Text>
          </div>
        </Container>
      </Section>

      {/* «Вира» — это… + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              как итог
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              «<b>Вира</b>» — это:
            </Title>
          </div>

          <div className="pl-6 max-w-4xl border-l border-slate-700 mt-6">
            <Text className="text-white leading-relaxed">
              «Единственный подрядчик, который закрывает все задачи: проектирует,
              строит, монтирует и гарантирует результат. Вам не нужно искать
              десятки исполнителей — мы делаем всё сами, с гарантией качества в
              договоре».
            </Text>
          </div>

          {/* единственная кнопка на странице */}
          <div className="flex justify-end mt-8">
            <div className="w-60">
              <LinkButton url="/contacts" variant="light">
                Рассчитать стоимость
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default MontazhPromyshlennogoOborudovaniyaPage;
