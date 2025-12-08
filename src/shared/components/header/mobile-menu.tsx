import { Menu as MenuIcon } from 'lucide-react';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/shared/components/sheet';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const icon = cva([], {
  variants: {
    intent: {
      hero: ['text-white'],
      base: ['text-on-surface'],
    },
  },
});

function MobileMenu({ intent = 'base' }: { intent: 'hero' | 'base' }) {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className={icon({ intent })} size={32} absoluteStrokeWidth />
      </SheetTrigger>
      <SheetContent className="bg-linear-150 from-sky-400 to-sky-950 border-none">
        <SheetTitle asChild>
          <VisuallyHidden><span>Меню навигации</span></VisuallyHidden>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden>Выберите раздел сайта для перехода</VisuallyHidden>
        </SheetDescription>
        <div className="flex flex-col h-full gap-3 pt-32 px-12 font-semibold text-white">
          <Link href="/">
            Главная
          </Link>
          <span className="h-[1px] max-w-25 my-4 bg-white" />
          <Link href="/services">
            Наши услуги
          </Link>
          <Link href="/spectekhnika">
            Спецтехника
          </Link>
          <Link href="/about">
            О компании
          </Link>
          <Link href="/nashi-raboty">
            Наши работы
          </Link>
          <span className="h-[1px] max-w-25 my-4 bg-white" />
          <Link href="/partnery">
            Партнеры
          </Link>
          <Link href="/contacts">
            Контакты
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
