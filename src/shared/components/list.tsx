import Text from '@/shared/components/text';

export function InfoBlock({ children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className="flex flex-col gap-4" {...props}>
      {children}
    </div>
  );
}

export function InfoBlockTitle({
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <Text className="text-on-surface !font-bold" {...props}>
      {children}
    </Text>
  );
}

export function InfoBlockContent({
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className="flex flex-col gap-2 pl-4" {...props}>
      {children}
    </div>
  );
}

export function InfoBlockContentItem({
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className="flex gap-2 align-top" {...props}>
      <div className="relative  h-6 w-2 after:absolute after:h-2 after:w-2 after:bg-on-surface after:left-0 after:top-[50%] after:translate-y-[-50%] after:rounded-full" />
      <Text className="text-on-surface">{children}</Text>
    </div>
  );
}
