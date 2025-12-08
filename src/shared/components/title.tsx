import { cva } from 'class-variance-authority';

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const title = cva([], {
  variants: {
    level: {
      1: '',
      2: '',
      3: 'text-2xl uppercase',
      4: '',
      5: '',
      6: '',
    },
  },
});

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  ref?: React.Ref<HTMLHeadingElement>;
}

function Title({
  level,
  className,
  children,
  ...props
}: TitleProps) {
  const Component = `h${level}` as HeaderTag;
  const classes = title({ level, className });

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Title;
