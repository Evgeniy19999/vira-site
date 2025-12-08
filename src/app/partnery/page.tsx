'use client';

import { Check } from 'lucide-react';
import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Text from '@/shared/components/text';
import Title from '@/shared/components/title';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';
import { partners } from './data';

function PartneryPage() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-w-[90%]">
      {/* прозрачная шапка */}
      <Header intent="hero" />

      {/* HERO-БЛОК С ФОТО */}
      <Section
        className="relative overflow-hidden text-white -mt-16 pt-16"
        style={{
          backgroundImage: "url('/part.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* затемнение поверх фото */}
        <div className="absolute inset-0 bg-slate-950/70" />
        {/* плавный уход вниз, чтобы не было жёсткой линии */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />

        <Container className="relative pt-24 pb-28 space-y-6">

          <p className="text-sm md:text-3xl uppercase tracking-[0.10em] text-sky-300 mb-1">
            Мы
          </p>

          <Title
            level={1}
            className="text-3xl md:text-1xl lg:text-5xl font-semibold max-w-3xl"
          >
            Успешно выполняем работы на протяжении более чем 10 лет
          </Title>
        </Container>
      </Section>

      {/* ОСНОВНОЙ КОНТЕНТ + СПИСОК ПАРТНЁРОВ */}
      <Section className="py-20 md:py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <Container>
          {/* Вводный текст появляется плавно */}
          <div
            ref={introRef}
            className="reveal-hidden max-w-3xl mb-10 md:mb-14"
          >
            <div className="space-y-4">
              <Title
                level={2}
                className="text-xl md:text-2xl font-semibold text-white"
              >
                Надёжные партнёры по всей стране
              </Title>
              <Text className="text-sm md:text-base text-slate-100/90">
                Компания наладила контакты и успешно сотрудничает с организациями разных
                форм собственности. Среди наших партнёров:
              </Text>
            </div>
          </div>

          {/* Список партнёров с галочками */}
          <div
            ref={listRef}
            className="reveal-hidden"
          >
            <ul className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 text-sm md:text-base text-slate-100"
                >
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/90 shadow-lg shadow-sky-900/50">
                    <Check size={14} className="text-slate-950" />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default PartneryPage;
