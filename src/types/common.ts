export interface ButtonProps {
  text: string;
  className?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
  btnType?: 'button' | 'submit' | 'reset';
}