'use client';

import React from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import Title from '@/shared/components/title';
import Text from '@/shared/components/text';
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal';

const infoCardStyle = cva('flex lg:flex-row', {
  variants: {
    orientation: {
      left: 'flex-col',
      right: 'flex-col-reverse',
    },
  },
});

type InfoCardChild =
  | React.ReactElement<InfoCardImageProps, typeof InfoCardImage>
  | React.ReactElement<
      InfoCardDescriptionContentProps,
      typeof InfoCardDescriptionContent
    >;

interface InfoCardProps extends React.ComponentProps<'div'> {
  children: InfoCardChild[];
}

export function InfoCard({ className, children, ...props }: InfoCardProps) {
  const isFirstImage = children[0].type === InfoCardImage;

  const mappedChildren = children.map((child) => {
    if (child.type === InfoCardDescriptionContent && !isFirstImage) {
      const descChild = child as React.ReactElement<
        InfoCardDescriptionContentProps,
        typeof InfoCardDescriptionContent
      >;

      return React.cloneElement(descChild, {
        orientation: 'left',
      });
    }

    return child;
  });

  const orientation = isFirstImage ? 'right' : 'left';

  return (
    <div className={infoCardStyle({ orientation, className })} {...props}>
      {mappedChildren}
    </div>
  );
}

type InfoCardImageProps = React.ComponentProps<typeof Image>;

export function InfoCardImage({ src, alt, ...props }: InfoCardImageProps) {
  return (
    <div className="lg:flex-[0_0_50%] pb-5">
      <Image className="min-w-full" src={src} alt={alt} {...props} />
    </div>
  );
}

const descriptionContent = cva(
  'flex flex-col gap-5 h-full lg:pt-15 pb-5 lg:border-t lg:border-on-surface',
  {
    variants: {
      orientation: {
        right: 'lg:pr-12 lg:pl-6 xl:pl-25 lg:text-right lg:border-r',
        left: 'lg:pr-6 xl:pr-25 lg:pl-12 text-left lg:border-l',
      },
    },
  },
);

interface InfoCardDescriptionContentProps {
  orientation?: 'left' | 'right';
  children: React.ReactNode;
}

export function InfoCardDescriptionContent({
  orientation = 'right',
  children,
}: InfoCardDescriptionContentProps) {
  return (
    <div className="lg:flex-[0_0_50%] lg:pt-10">
      <div className={descriptionContent({ orientation })}>{children}</div>
    </div>
  );
}

export function InfoCardTitle({ children }: { children: React.ReactNode }) {
  const reval_rel_0_ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="overflow-hidden">
      <Title
        ref={reval_rel_0_ref}
        className="text-on-surface relative-reval"
        level={3}
      >
        {children}
      </Title>
    </div>
  );
}

export function InfoCardText({ children }: { children: React.ReactNode }) {
  const reval_rel_1_ref = useScrollReveal<HTMLDivElement>();
  return (
    <div className="overflow-hidden">
      <Text ref={reval_rel_1_ref} className="text-on-surface relative-reval">
        {children}
      </Text>
    </div>
  );
}
