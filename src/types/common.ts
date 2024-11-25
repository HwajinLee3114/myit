export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
  btnType?: 'button' | 'submit' | 'reset';
}