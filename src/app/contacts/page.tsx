'use client';

import { useState, FormEvent } from 'react';

import Header from '@/shared/components/header';
import Section from '@/shared/components/section';
import Container from '@/shared/components/container';
import Title from '@/shared/components/title';
import Text from '@/shared/components/text';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';

function ContactsPage() {
  const infoRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const validate = () => {
    const newErrors = { name: '', phone: '', email: '' };

    if (!name.trim()) newErrors.name = 'Введите ваше имя';
    if (!phone.trim()) newErrors.phone = 'Введите телефон';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Некорректный email';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone && !newErrors.email;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    alert('Заявка отправлена!');

    setName('');
    setPhone('');
    setEmail('');
    setComment('');
    setErrors({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-w-[90%]">
      <Header intent="hero" />

      {/* ХЕРО-БЛОК */}
      <Section
        className="relative overflow-hidden text-white -mt-16 pt-16"
        style={{
          backgroundImage: "url('/svarochnye.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />

        <Container className="relative pt-32 pb-36">
          <Text className="text-xs md:text-sm uppercase tracking-[0.25em] text-sky-300 mb-2">
            Для консультации
          </Text>

          <Title
            level={1}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl"
          >
            Свяжитесь с нами
          </Title>
        </Container>
      </Section>

      {/* ТЕКСТ СЛЕВА, ФОРМА СПРАВА */}
      <Section className="py-24 bg-slate-950">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start mt-12 md:mt-20">
            {/* ЛЕВАЯ КОЛОНКА */}
            <div ref={infoRef} className="reveal-hidden flex flex-col gap-6">
              <Title
                level={3}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
              >
                Расскажите о проекте
              </Title>

              <Text className="max-w-xl text-sm md:text-base text-slate-100/90">
                Подберём технические решения, составим предварительную смету и
                сроки. Вы можете позвонить или оставить заявку через форму
                справа.
              </Text>

              <div className="mt-4 flex flex-col gap-4 text-sm md:text-base">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-1">
                    Телефон
                  </p>
                  <a
                    href="tel:+79056209060"
                    className="text-2xl font-semibold text-white"
                  >
                    +7 905 620 90 60
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-1">
                    Наш главный офис
                  </p>
                  <p className="max-w-sm text-slate-100/90">
                    301651, Тульская область, г. Новомосковск,
                    ул. Транспортная 1-я, дом 48, офис 1
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:vira-novomoskovsk@mail.ru"
                    className="font-semibold text-sky-200 underline underline-offset-4 hover:text-sky-100"
                  >
                    vira-novomoskovsk@mail.ru
                  </a>
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА — ФОРМА */}
            <div
              ref={formRef}
              className="reveal lg:justify-self-end w-full max-w-xl"
            >
              <div className="rounded-3xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 shadow-2xl shadow-slate-950/70 px-6 py-7 md:px-8 md:py-8">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  Форма обратной связи
                </h2>

                <p className="text-xs md:text-sm text-slate-300 mb-6">
                  Заполните поля — мы свяжемся с вами и уточним детали проекта.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Имя */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Имя и фамилия *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 transition
                          ${
                            errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-700/70 focus:border-sky-400'
                          }
                        `}
                        placeholder="Как к вам обращаться"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Телефон */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 transition
                          ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-700/70 focus:border-sky-400'
                          }
                        `}
                        placeholder="+7 ___ ___ __ __"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50 transition
                        ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-700/70 focus:border-sky-400'
                        }
                      `}
                      placeholder="example@mail.ru"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Комментарий */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Кратко о проекте
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full min-h-[110px] rounded-xl bg-slate-900/80 border border-slate-700/70 px-3 py-2 text-sm text-slate-100 outline-none resize-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/50 transition"
                      placeholder="Тип объекта, местоположение, сроки, бюджет..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!name.trim() || !phone.trim()}
                    className={`mt-6 w-full rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-900/40 transition-colors
                      ${
                        !name.trim() || !phone.trim()
                          ? 'bg-slate-700 cursor-not-allowed'
                          : 'bg-sky-500 hover:bg-sky-400 cursor-pointer'
                      }
                    `}
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ЗАГОЛОВОК ПЕРЕД КАРТОЙ */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 py-14">
        <Container className="text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-sky-200 mb-1">
            Всегда рады вас видеть
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            В нашем офисе
          </h2>
        </Container>
      </section>

      {/* КАРТА */}
      <section className="bg-slate-900 pb-0">
        <div className="w-full h-[420px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=38.234895%2C54.089237&z=17.1&pt=38.234895,54.089237,pm2rdm"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export default ContactsPage;
