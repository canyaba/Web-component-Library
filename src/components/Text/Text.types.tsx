export type TextSize = 'small' | 'medium' | 'large';

export interface TextProps {
  text: string;
  size?: TextSize;
  bgColor?: string;
  disabled?: boolean;
}
