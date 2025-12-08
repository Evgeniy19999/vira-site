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

function KrovelnyeRabotyPage() {
  return (
    <div className="min-w-[90%] bg-slate-950">
      {/* прозрачная шапка только на hero */}
      <Header intent="hero" />

      {/* HERO: текст + картинка с закруглёнными краями */}
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
                <b>Кровельные</b> работы
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Кровля, как один из главных элементов конструкции, вносит
                значительный вклад в продолжительность эксплуатации дома.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/krovelnye-raboty.png"
                  alt="Кровельные работы"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* КРОВЛЯ: ФУНДАМЕНТ ДОЛГОЛЕТИЯ + экспертиза ВИРА */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                важно понимать что
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                <b>Кровля</b>: Фундамент Долголетия Вашего Дома
              </Title>
            </div>

            <Text className="leading-relaxed">
              Кровля – это не просто верхний слой здания. Это сложная
              инженерная система, главный защитник вашего дома от стихий. От ее
              качества напрямую зависит срок службы всего строения, безопасность
              и комфорт проживания. Монтаж или ремонт кровли требуют глубоких
              знаний технологий и материалов – доверяйте только проверенным
              специалистам.
            </Text>

            <div className="space-y-3">
              <Title level={4} className="text-lg md:text-xl text-white">
                &quot;<b>ВИРА</b>&quot; прямо заявляет о своей экспертизе
              </Title>
              <Text className="leading-relaxed">
                Правильная кровля – это знание технологий и материалов.
                &quot;ВИРА&quot; – специалисты, которым стоит доверить работу.
                Выполним безупречно, быстро и с гарантией – для вашего
                спокойствия.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* ПОЧЕМУ ВЫБИРАЮТ ВИРУ ДЛЯ КРОВЛИ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                ответим на вопрос
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Почему клиенты выбирают «<b>ВИРУ</b>» для кровли?
              </Title>
            </div>

            <Text className="leading-relaxed">
              Наша команда – это гарантия качества и спокойствия:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Гарантия на работы</b>: Каждый проект завершается
                    подписанием договора с четкими гарантийными
                    обязательствами.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Профессионализм</b>: Мастера с опытом и доскональным
                    знанием всех нюансов кровельных технологий.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Оперативность</b>: Четкая организация процесса позволяет
                    выполнять работы в согласованные сроки без ущерба качеству.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* НАШ ПОДХОД — ЭТАПЫ СОЗДАНИЯ НАДЁЖНОЙ КРОВЛИ */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              рассмотрим
            </Text>
            <Title level={3} className="text-2xl md:text-3xl text-white">
              <b>Наш подход</b>: Этапы создания надежной кровли
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="leading-relaxed">
              Мы не просто кладем материал – мы создаем комплексную защитную
              систему. Наша работа включает:
            </Text>

            {/* Проектирование и подготовка */}
            <InfoBlock>
              <Text
                semantic={false}
                className="mb-2 font-semibold text-white"
              >
                Проектирование и подготовка:
              </Text>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Выбор оптимальной конструкции крыши и стропильной системы.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Точный расчет материалов (металлочерепица, утеплитель,
                    мембраны, доборы).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Антисептическая обработка древесины.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            {/* Силовой каркас */}
            <InfoBlock>
              <Text
                semantic={false}
                className="mb-2 font-semibold text-white"
              >
                Надежное основание – залог прочности. После детальных расчетов
                мы приступаем к созданию силового каркаса:
              </Text>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Установка мауэрлата – опорного бруса по периметру стен.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Монтаж стропильной системы – &quot;скелета&quot; вашей
                    крыши.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Устройство обрешетки/контробрешетки – основы для фиксации
                    кровельного покрытия.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            {/* Кровельный пирог */}
            <InfoBlock>
              <Text
                semantic={false}
                className="mb-2 font-semibold text-white"
              >
                Монтаж &quot;Кровельного пирога&quot; – многослойной защиты:
              </Text>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Пароизоляция: Препятствует проникновению влаги изнутри дома
                    в утеплитель.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Утеплитель: Обеспечивает теплоизоляцию и
                    энергоэффективность.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Гидро-ветрозащитная мембрана: Защищает от внешней влаги и
                    ветра, позволяет пару выходить.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Вентиляционные зазоры: Критически важны для удаления
                    конденсата и долговечности конструкции.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            {/* Финальный этап */}
            <InfoBlock>
              <Text
                semantic={false}
                className="mb-2 font-semibold text-white"
              >
                Финальный этап – функциональность и эстетика. На подготовленное
                основание монтируем:
              </Text>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Мансардные окна (если предусмотрено проектом) для освещения
                    и вентиляции.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Листы металлочерепицы и все необходимые доборные элементы
                    (коньки, ендовы, карнизные планки и т.д.).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Водосточную систему для организованного отвода осадков.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Софиты для подшивки карнизных свесов, обеспечивающие
                    вентиляцию подкровельного пространства и эстетичный вид.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* СТОИМОСТЬ КРОВЕЛЬНЫХ РАБОТ + КНОПКА */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              разберемся
            </Text>
            <Title level={3} className="text-2xl md:text-3xl text-white">
              Что формирует <b>стоимость</b> кровельных работ?
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="leading-relaxed">
              Цена – всегда индивидуальна и прозрачна. Помимо площади крыши,
              ключевое влияние оказывают:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Архитектурная сложность</b>: Количество скатов, изломов,
                    башенок, наличие мансардных окон.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Высота и доступность объекта</b>: Требует ли работа
                    специального оборудования или альпинистских методов?
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Состояние основания</b>: Необходимость ремонта или
                    усиления существующей стропильной системы?
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Объем материалов</b>: Сложные формы увеличивают расход
                    металлочерепицы и доборов.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Климатический фактор</b>: Учитываем особенности региона
                    при выборе материалов и технологий.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

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

export default KrovelnyeRabotyPage;
