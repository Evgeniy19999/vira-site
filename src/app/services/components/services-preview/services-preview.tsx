'use client';

import ServiceCard from '../service-card';
import { data } from './data';

function ServicesPreview() {
  return (
    <div
      className="
        mx-auto
        max-w-6xl
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        justify-items-center
      "
    >
      {data.map((item) => (
        <ServiceCard
          key={item.id}
          title={item.title}
          description={item.description}
          previewSrc={item.previewSrc}
          href={item.href}
        />
      ))}
    </div>
  );
}

export default ServicesPreview;
