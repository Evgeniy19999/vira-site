import { Check } from 'lucide-react';
import Text from '@/shared/components/text';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  imageSrc: StaticImageData;
  description: string;
};

function HeavyEquipmentPreview({ title, imageSrc, description }: Props) {
  return (
    <article className="bg-white rounded-3xl shadow-lg shadow-slate-900/10 p-6 flex flex-col gap-4">
      {/* Заголовок с галочкой */}
      <div className="flex items-center gap-3">
        <Check
          className="text-sky-500"
          size={24}
          absoluteStrokeWidth
        />
        <Text className="text-sm md:text-base font-semibold text-slate-900">
          {title}
        </Text>
      </div>

      {/* Картинка в округлённой рамке */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-44 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            quality={100}
            className="max-h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Описание под картинкой */}
      <Text className="text-xs md:text-sm text-slate-700 leading-relaxed">
        {description}
      </Text>
    </article>
  );
}

export default HeavyEquipmentPreview;
