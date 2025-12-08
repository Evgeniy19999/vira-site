import cn from 'classnames';

function Section({ className, children, ...props }: React.ComponentProps<'section'>) {
  return (
    <section className={cn(
      "flex justify-center px-6",
      className,
    )} {...props}>
      {children}
    </section>
  );
}

export default Section;
