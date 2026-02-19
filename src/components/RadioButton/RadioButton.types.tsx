export interface RadioButtonProps {
  label: string;
  checked?: boolean;
  bgColor?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
