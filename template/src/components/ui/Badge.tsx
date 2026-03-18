import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning';
}

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          'bg-primary/10 text-primary': variant === 'default',
          'bg-slate-100 text-slate-700': variant === 'secondary',
          'border border-slate-200 text-slate-700': variant === 'outline',
          'bg-red-100 text-red-700': variant === 'destructive',
          'bg-emerald-100 text-emerald-700': variant === 'success',
          'bg-amber-100 text-amber-700': variant === 'warning',
        },
        className
      )}
      {...props}
    />
  );
}
