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

function ElektromontazhPodKlyuchPage() {
  return (
    <div className="min-w-[90%] bg-slate-950">
      {/* обычная шапка без хлебных крошек */}
      <Header />

      {/* ВСТУПЛЕНИЕ */}
      <Section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-3xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                Реализуем
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                <b>Электромонтаж</b> под ключ
              </Title>
            </div>

            <Text className="leading-relaxed">
              Выполнять электротехнические работы должны только профессионалы,
              обладающие специальными сертификатами специалистами.
            </Text>
          </div>
        </Container>
      </Section>

      {/* БЛОК С КАРТИНКОЙ */}
      <Section className="py-10 md:py-14 bg-slate-950">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="flex-1 flex flex-col gap-4 text-white">
              <Title level={4} className="text-xl md:text-2xl text-white">
                нам под силу <b>Электромонтаж</b> любой сложности
              </Title>
              <Text className="leading-relaxed">
                ООО ВИРА – компания, специализирующаяся на широком спектре
                услуг, от разработки проектов до выполнения монтажных работ по
                установке щитков и счетчиков и прокладке наружной и внутренней
                электропроводки по приемлемым ценам.
              </Text>
            </div>

            {/* карточка с картинкой */}
            <div className="flex-1 flex justify-center items-start">
              <div className="relative w-full max-w-md h-[320px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <img
                  src="/elektromontazh-pod-klyuch.png"
                  alt="elektromontazh pod klyuch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ЭЛЕКТРИКА — ЗОНА ПРОФИ */}
      <Section className="py-16 md:py-20 border-t border-slate-800 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                нужно понимать что
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                <b>Электрика</b> – Зона Ответственности Профессионалов
              </Title>
            </div>

            <Text className="leading-relaxed">
              Электромонтажные работы – это не просто провода и розетки. Это
              основа безопасности вашего дома или бизнеса. Доверять их можно
              только сертифицированным специалистам, обладающим глубокими
              знаниями и строго соблюдающим нормы ПУЭ. &quot;ВИРА&quot;
              гарантирует: наши мастера имеют все необходимые допуски и
              сертификаты.
            </Text>
          </div>
        </Container>
      </Section>

      {/* ПОЧЕМУ ВИРА */}
      <Section className="py-16 md:py-20 border-t border-slate-800 bg-slate-900">
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
                Почему «<b>ВИРА</b>» – Ваш Надежный Электромонтажник?
              </Title>
            </div>

            <Text className="leading-relaxed">
              Мы предлагаем не просто услуги, а комплексное решение &quot;под ключ&quot;
              с гарантией результата:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Полный цикл работ</b>: От проекта до финального
                    пусконаладки.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Абсолютная безопасность</b>: Строжайшее соблюдение норм –
                    защита от коротких замыканий, возгораний, ударов током.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Профессионализм</b>: Подбор оптимальных материалов (кабель
                    правильного сечения, надежная защитная автоматика – УЗО,
                    автоматы).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Прозрачность</b>: Четкие сроки и детализированная смета
                    перед началом работ.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* УСЛУГИ */}
      <Section className="py-16 md:py-20 border-t border-slate-800 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                предлагаем
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Наши Услуги: От Проекта до Последней <b>Розетки</b>
              </Title>
            </div>

            <Text className="font-bold">
              Проектирование и Расчеты:
            </Text>
            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Разработка индивидуального проекта электроснабжения для
                    нового строительства, ремонта или модернизации (частные,
                    муниципальные, производственные объекты).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Точный расчет нагрузок, подбор оборудования и материалов.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="font-bold">
              Монтаж Электропроводки Любой Сложности:
            </Text>
            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Скрытый монтаж</b>: В стенах, потолке, полу.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Открытый монтаж</b>: В кабель-каналах, коробах.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Наружная прокладка</b>: По фасадам, между зданиями.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Организация <b>отдельных силовых выводов</b> для мощной
                    техники (плиты, бойлеры, станки).
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="font-bold">
              Установка Оборудования:
            </Text>
            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Монтаж и сборка <b>распределительных щитов (ЩО)</b>.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Установка <b>счетчиков электроэнергии</b>.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Монтаж <b>розеток, выключателей, автоматов, УЗО</b>.
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    Установка <b>осветительных приборов</b>: люстры, светильники,
                    бра, LED-ленты и т.д.
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>
          </div>
        </Container>
      </Section>

      {/* ЦЕНООБРАЗОВАНИЕ */}
      <Section className="py-16 md:py-20 border-t border-slate-800 bg-slate-900">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl text-white">
            <div className="flex flex-col gap-3">
              <Text
                semantic={false}
                className="uppercase text-sky-300 text-xs md:text-sm tracking-[0.2em]"
              >
                рассмотрим
              </Text>
              <Title level={3} className="text-2xl md:text-3xl text-white">
                Ценообразование: <b>Прозрачность</b> и Обоснованность
              </Title>
            </div>

            <Text className="leading-relaxed">
              Стоимость электромонтажа формируется индивидуально и зависит от:
            </Text>

            <InfoBlock>
              <InfoBlockContent>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Сложности проекта и объема работ.</b>
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Используемых материалов</b> (марка кабеля, тип
                    оборудования).
                  </span>
                </InfoBlockContentItem>
                <InfoBlockContentItem>
                  <span className="text-white">
                    <b>Особенностей объекта</b> (доступность, высота, материал
                    стен).
                  </span>
                </InfoBlockContentItem>
              </InfoBlockContent>
            </InfoBlock>

            <Text className="leading-relaxed">
              <b>
                Доверьте электрику профессионалам «ВИРА» – обеспечим безопасную
                и бесперебойную работу всех систем вашего объекта с официальной
                гарантией!
              </b>
            </Text>

            <div className="flex justify-end mt-6">
              <div className="w-60">
                <LinkButton url="/contacts" variant="light">Рассчитать стоимость</LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default ElektromontazhPodKlyuchPage;
