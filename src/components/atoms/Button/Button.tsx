/** Styles */
import styles from './styles.module.css';

interface ButtonProps {
  id: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  event?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ id, type = 'button', disabled = false, event, children, className = '' }) => (
  <button id={id} data-testid={id} type={type} className={`${styles.button} ${className}`} disabled={disabled} onClick={event}>
    {children}
  </button>
);

Button.displayName = 'Button';

export default Button;
