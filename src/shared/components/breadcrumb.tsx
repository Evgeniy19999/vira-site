import Link from 'next/link';
import cn from 'classnames';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({
  children,
  ...props
}: React.ComponentProps<'nav'>) {
  return <nav {...props}>{children}</nav>;
}

export function BreadcrumbList({
  className,
  children,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function BreadcrumbItem({
  className,
  children,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn(
        'flex items-center text-[13px] leading-5 font-medium text-on-surface',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}

export function BreadcrumbLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}

export function BreadcrumbPage({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li className={cn('', className)} {...props}>
      <ChevronRight size={16} absoluteStrokeWidth className="text-tertiary" />
    </li>
  );
}
