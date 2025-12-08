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

function DemontazhZdanijPage() {
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
                Вира
              </Text>

              <Title
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
                level={1}
              >
                Ваш надежный партнер в <b>демонтаже зданий</b> — от ветхих
                конструкций до промышленных гигантов
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Демонтаж — это не просто разрушение. Это ювелирная работа, где{' '}
                <b>безопасность, точность</b> и <b>юридическая чистота</b>{' '}
                важнее скорости. Компания «Вира» превращает сложный процесс в
                предсказуемый результат, беря на себя 100% ответственности. Вот
                почему нам доверяют:
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/demontazh.png"
                  alt="Демонтаж зданий"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ЭКСПЕРТНЫЙ ПРОМЫШЛЕННЫЙ ДЕМОНТАЖ */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Экспертный подход
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                <b>Экспертный</b> промышленный демонтаж
              </Title>
            </div>

            <Text className="leading-relaxed">
              Мы гарантируем контролируемый разбор любых зданий и конструкций с
              применением высокоточной техники (экскаваторы-разрушители, алмазная
              резка). Наш приоритет — ваша безопасность, минимизация воздействия
              на окружение и максимальная переработка материалов (до 90%+).
              Соблюдаем все нормы, обеспечиваем чистоту и порядок на площадке.
            </Text>
          </div>
        </Container>
      </Section>

      {/* БЛОК: БЕЗОПАСНОСТЬ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-4">
              <Text semantic={false} className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]">
                гарантируем что
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                <b>Безопасность</b> — не просто слово, а наш стандарт
              </Title>
            </div>

            <Text className="leading-relaxed">
              При сносе зданий (даже частичном) один неверный шаг грозит
              катастрофой. Поэтому мы работаем только с профессионалами:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Специалисты с допусками СРО</b> — высотники, взрывники,
                    инженеры по расчетам конструкций;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Ежедневные инструктажи</b> по ТБ и экологическим нормам;
                    конструкций.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Система мониторинга рисков</b> — датчики вибрации,
                    контроль пылеобразования, ограждение зоны работ.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <div className="pl-6 border-l border-slate-600">
              <Text className="text-slate-200 text-sm leading-relaxed">
                *Пример: При демонтаже аварийной 5-этажки в центре города мы
                использовали алмазную резку и кран-манипулятор, избежав
                повреждения соседних зданий. Заказчик сэкономил 1,2 млн ₽ на
                компенсациях.*
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* БЛОК: ПОЛНЫЙ ЦИКЛ ПОД КЛЮЧ */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-4">
              <Text semantic={false} className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]">
                предлагаем
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                Полный цикл «<b>под ключ</b>» — техника, документы, чистая
                площадка
              </Title>
            </div>

            <Text className="leading-relaxed">
              Наш автопарк — 50+ единиц спецтехники:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Экскаваторы-разрушители с гидроножницами для дробления
                    бетона;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Низкорамные тралы для перевозки негабарита;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Вакуумные подметальные машины для финальной уборки.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">Что входит в услугу:</Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Демонтаж</b> — стен, перекрытий, фундаментов, коммуникаций.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сортировка отходов</b> — металл, бетон, древесина — для
                    переработки.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Утилизация по ФККО</b> — с выдачей паспортов отходов.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Восстановление территории</b> — выравнивание грунта,
                    озеленение.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Юридическое сопровождение</b> — согласование снос в МЧС,
                    Ростехнадзоре, администрации.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* БЛОК: СТОИМОСТЬ / ИНВЕСТИЦИЯ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-4">
              <Text semantic={false} className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]">
                разберемся
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                Почему стоимость демонтажа у «Вира» — это <b>инвестиция</b>, а
                не расход?
              </Title>
            </div>

            <Text className="leading-relaxed">
              Цена формируется индивидуально, но всегда прозрачна. Наш инженер
              бесплатно выезжает на объект, чтобы оценить:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сложность конструкций</b> (железобетонные плиты vs.
                    кирпичная кладка);
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Наличие опасных факторов</b> (асбест, остатки
                    химреагентов);
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Логистику</b> — удаленность от полигона, возможность
                    подъезда техники.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">
              Что снижает ваши затраты:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>У нас собственная техника</b> — нет наценок арендаторов;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Переработка 70% отходов</b> — экономия на утилизации;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Комплексный подход</b> — не нужно платить юристам и
                    экологам отдельно.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <div className="pl-6 border-l border-slate-600">
              <Text className="text-slate-200 text-sm leading-relaxed">
                Для завода в Подольске мы предложили поэтапный снос цехов с
                параллельной сортировкой металлолома. Клиент заработал 800 000 ₽
                на сдаче металла и сократил бюджет демонтажа на 40%.
              </Text>
            </div>

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

export default DemontazhZdanijPage;
