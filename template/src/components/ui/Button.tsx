import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-primary text-white shadow-md hover:bg-primary-dark': variant === 'default',
          'border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50': variant === 'outline',
          'text-slate-700 hover:bg-slate-100': variant === 'ghost',
          'bg-red-500 text-white hover:bg-red-600': variant === 'destructive',
          'bg-slate-100 text-slate-700 hover:bg-slate-200': variant === 'secondary',
        },
        {
          'h-8 px-3 text-xs': size === 'sm',
          'h-11 px-5 text-sm': size === 'default',
          'h-13 px-8 text-base': size === 'lg',
          'h-10 w-10 p-0': size === 'icon',
        },
        className
      )}
      {...props}
    />
  );
}
