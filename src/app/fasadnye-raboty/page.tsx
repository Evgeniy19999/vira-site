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

function FasadnyeRaboty() {
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
                <b>ФАСАДНЫЕ</b> РАБОТЫ
              </Title>

              <Text className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                Персонал ООО &quot;ВИРА&quot; обладает всеми необходимыми допусками
                для проведения высотных и верхолазных работ.
              </Text>
            </div>

            {/* Картинка справа */}
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-xl bg-slate-900/70">
                <Image
                  src="/fasadnye-raboty.png"
                  alt="fasadnye raboty"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Наши инженеры отлично понимают… */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Наши инженеры отлично понимают что
              </Text>
              <Title className="text-2xl md:text-3xl text-white" level={3}>
                Наши <b>инженеры</b> отлично понимают что
              </Title>
            </div>

            <Text className="text-white leading-relaxed">
              Фасад – ключевой щит здания. Помимо эстетики, он оберегает
              конструкции от влаги, холода, разрушения и агрессивных сред.
              Состояние фасада напрямую определяет срок службы здания и
              внутренний микроклимат.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Ваш фасад – наша экспертиза */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              создаем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Ваш <b>Фасад</b> – Наша Экспертиза и Ответственность
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Фасад здания – это не просто его «лицо». Это сложный защитный
              барьер, ежедневно противостоящий агрессивным воздействиям:
              механическим повреждениям, перепадам температур, влаге,
              ультрафиолету, химическим и биологическим факторам. От его
              состояния напрямую зависит срок безаварийной эксплуатации всего
              здания и комфортный микроклимат внутри. Компания «ВИРА»
              профессионально заботится о сохранности и презентабельности ваших
              объектов.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Наша сила – полный цикл услуг */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              главная
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              Наша Сила – Профессионализм и Полный <b>Цикл Услуг</b>
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Мы – лицензированная строительная организация, выполняющая весь
              спектр фасадных работ «под ключ»:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Проектирование и разработка технических решений.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Согласование и получение всей необходимой разрешительной
                    документации.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Качественные строительно-монтажные работы любой сложности.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Сервисное обслуживание и поддержка реализованных проектов.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Безопасность и доступ */}
      <Section className="py-16 md:py-20 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              Обеспечиваем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Безопасность</b> и Доступ – Наш приоритет
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Весь персонал ООО «ВИРА» обладает официальными допусками к
                    высотным и верхолазным работам.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Мы используем <b>специализированное оборудование</b> и
                    строго соблюдаем все нормы безопасности.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* Индивидуальный подход + кнопка */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-4 max-w-4xl text-white">
            <Text
              semantic={false}
              className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
            >
              Гарантируем
            </Text>
            <Title className="text-2xl md:text-3xl text-white" level={3}>
              <b>Индивидуальный</b> Подход к Каждому Объекту
            </Title>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl text-white mt-6">
            <Text className="text-white leading-relaxed">
              Понимаем, что каждый фасад уникален. На итоговую стоимость работ
              влияет комплекс факторов:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Архитектурная сложность и степень износа фасада.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Особенности расположения объекта и доступ к нему.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Наличие инженерных коммуникаций в зоне работ.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Выбранные материалы и технологии.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="text-white leading-relaxed">
              Доверьте фасад вашего здания профессионалам «ВИРА» – обеспечим его
              красоту, целостность и долгий срок службы!
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

export default FasadnyeRaboty;
