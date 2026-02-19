import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  children: ReactNode;
  bgColor?: string;
  disabled?: boolean;
}
