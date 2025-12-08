import { HardHat } from 'lucide-react';
import LinkButton from '@/shared/components/link-button';
import Text from '@/shared/components/text';

function ServicePreview({
  title,
  url,
  ref,
  children,
}: {
  title: string;
  url: string;
  ref: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}) {
  return (
    <div ref={ref} className="flex flex-col justify-between p-4 bg-container">
      <div className="flex flex-col gap-4">
        <HardHat className="text-tertiary" size={64} absoluteStrokeWidth />
        <Text className="uppercase text-on-surface">
          <b>{title}</b>
        </Text>
        <span className="block w-25 bg-on-surface h-[1px]"></span>
        <Text className="text-on-surface">{children}</Text>
      </div>
      <div className="w-36 pt-6">
        <LinkButton url={url}>Подробнее</LinkButton>
      </div>
    </div>
  );
}

export default ServicePreview;
