'use client';

import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Title from '@/shared/components/title';
import Text from '@/shared/components/text';
import LinkButton from '@/shared/components/link-button';


export default function AlpPage() {

  return (
    <div className="min-w-[90%]">
      <Header intent="hero" />

      {/* HERO как на "строительство" */}
      <Section className="relative overflow-hidden text-white -mt-16 pt-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />

        <Container className="relative pt-28 pb-24 md:pt-32 md:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
                Реализуем
              </Text>

              <Title
                level={1}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl"
              >
                Промышленный альпинизм
              </Title>

              <Text className="mt-6 max-w-2xl text-sm md:text-base text-slate-100/90">
                Выполняем высотные работы любой сложности. Монтаж и демонтаж
                конструкций, ремонт фасадов, герметизация межпанельных швов,
                обслуживание зданий и другие работы с применением альпинистского
                снаряжения.
              </Text>
            </div>

            {/* Карточка-картинка справа (как на стройке) */}
            <div className="lg:justify-self-end">
              <div className="rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-slate-950/60 bg-slate-900/40 backdrop-blur-sm">
                <img
                  src="/alp.jpg"
                  alt="Промышленный альпинизм"
                  className="w-full h-[280px] md:h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Блок 1 */}
      <Section className="py-24 bg-slate-950">
        <Container>
          <div className="reveal-hidden">
            <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
              Полный цикл
            </Text>

            <Title
              level={2}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
            >
              Профессиональный подход к высотным работам
            </Title>

            <Text className="mt-6 max-w-5xl text-sm md:text-base text-slate-100/90 leading-relaxed">
              Промышленный альпинизм — это быстрый и эффективный способ выполнить
              работы на высоте без установки лесов и подъёмной техники там, где
              это возможно. Мы соблюдаем требования безопасности, используем
              сертифицированное снаряжение и подбираем решения под задачи
              объекта.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Блок 2 */}
      <Section className="py-24 bg-slate-900">
        <Container>
          <div className="reveal-hidden">
            <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-200 mb-3">
              Команда
            </Text>

            <Title
              level={2}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
            >
              Специалисты с опытом и допусками
            </Title>

            <Text className="mt-6 max-w-5xl text-sm md:text-base text-slate-100/90">
              Наши специалисты выполняют работы на высоте по регламентам и
              инструкциям. Перед началом — осмотр, оценка рисков и согласование
              технологии производства работ.
            </Text>

            <ul className="mt-10 grid gap-3 text-sm md:text-base text-slate-100/90 list-disc pl-5">
              <li>Соблюдение техники безопасности и регламентов;</li>
              <li>Сертифицированное снаряжение и страховочные системы;</li>
              <li>Работаем аккуратно, без лишних повреждений фасада;</li>
              <li>Фотофиксация и отчёт по выполненным этапам.</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Блок 3 */}
      <Section className="py-24 bg-slate-950">
        <Container>
          <div className="reveal-hidden">
            <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
              Виды работ
            </Text>

            <Title
              level={2}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
            >
              Что мы выполняем
            </Title>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                'Герметизация межпанельных швов',
                'Ремонт и обслуживание фасадов',
                'Монтаж и демонтаж металлоконструкций',
                'Очистка и покраска зданий',
                'Установка наружных элементов и узлов',
                'Локальные ремонтные работы на высоте',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm px-5 py-4 text-slate-100/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Блок 4 + Кнопка как на примере */}
      <Section className="py-24 bg-slate-900">
        <Container>
          <div className="reveal-hidden">
            <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-200 mb-3">
              Преимущества
            </Text>

            <Title
              level={2}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
            >
              Экономия времени и ресурсов
            </Title>

            <Text className="mt-6 max-w-4xl text-sm md:text-base text-slate-100/90">
              Благодаря промышленному альпинизму сокращаются сроки выполнения
              работ и уменьшаются затраты на технику. Часто мы можем начать
              работы быстрее, чем при классических методах доступа к высоте.
            </Text>

            {/* "Рассчитать стоимость" как на образце */}
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
