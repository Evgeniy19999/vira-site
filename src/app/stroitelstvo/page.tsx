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

function StroitelstvoPage() {
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
                <b>Строительство</b> зданий и сооружений
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Наша компания оказывает услуги по строительству зданий на всех
                этапах, забирая решение всех технических и бумажных вопросов на
                свои плечи.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/stroitelstvo-zdanij-i-sooruzhenij.png"
                  alt="stroitelstvo zdanij i sooruzhenij"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Полный цикл строительных услуг */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                полный цикл
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                <b>Профессиональный</b> подход к строительству
              </Title>
            </div>

            <Text className="leading-relaxed">
              Наша компания реализует полный комплекс строительно-монтажных
              работ — от проектирования до сдачи объекта в эксплуатацию. Мы
              гарантируем современные решения и соблюдение всех этапов
              строительного процесса.
            </Text>

            <Text className="leading-relaxed">
              Фасад каждого здания является уникальным, и на конечную сметную
              стоимость влияет множество факторов: территориальное расположение
              объекта, архитектурные особенности, степень разрушения, сложности
              с доступом к участку проведения работ, наличие инженерных систем
              на близлежащей территории.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Команда экспертов */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              гибкая
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Команда <b>экспертов</b> с многолетним опытом
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="leading-relaxed">
              В основе нашей работы — коллектив профессионалов, каждый из
              которых специализируется на своем направлении. Более 10 лет мы:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Осуществляем строительство «под ключ»;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Выполняем функции генерального подрядчика;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Реализуем проекты реконструкции и возведения новых объектов.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Широкий спектр объектов */}
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
              <b>Широкий</b> спектр объектов
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="leading-relaxed">
              Мы работаем с разными типами зданий:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">Промышленные комплексы;</span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">Коммерческие помещения;</span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Жилые дома и многоэтажные строения.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Инновации и условия + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              предлагаем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Инновации</b> и выгодные условия для клиентов
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="leading-relaxed">
              Благодаря развитию новых направлений и глубокому анализу рынка,
              мы:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Внедряем актуальные технологии;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Сотрудничаем с ведущими поставщиками и производителями;
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Оптимизируем расходы, сохраняя качество.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">
              Это позволяет нам предлагать конкурентные цены и браться за
              объекты любой сложности. Ваш проект будет реализован с
              максимальной эффективностью и в установленные сроки!
            </Text>

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

export default StroitelstvoPage;
