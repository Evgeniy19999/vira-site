import cn from 'classnames';

function Container({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn(
      "flex flex-col gap-8 w-full max-w-maxContainerWidth",
      className,
    )} {...props}>
      {children}
    </div>
  );
}

export default Container;