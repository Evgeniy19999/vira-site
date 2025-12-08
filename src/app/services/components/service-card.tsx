'use client';

import Image from 'next/image';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  previewSrc: string;
  href: string;
};

function ServiceCard({ title, description, previewSrc, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="
        group block max-w-md mx-auto
        overflow-hidden rounded-[32px]
        bg-white shadow-xl shadow-slate-950/40
        transition-transform transition-shadow duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* КАРТИНКА СВЕРХУ */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={previewSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* ТЕКСТОВАЯ ЧАСТЬ */}
      <div className="p-6 md:p-7 flex flex-col gap-3">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="text-sm md:text-base text-slate-600">
          {description}
        </p>

        {/* КНОПКА "ПОДРОБНЕЕ" */}
        <div className="mt-4">
          <span
            className="
              inline-flex items-center justify-center
              rounded-full border border-slate-900/15
              px-4 py-2 text-xs md:text-sm font-semibold
              uppercase tracking-[0.18em]
              text-slate-900
              group-hover:bg-slate-900 group-hover:text-white
              transition-colors
            "
          >
            ПОДРОБНЕЕ
            <span className="ml-2 text-base leading-none">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
