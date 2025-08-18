import React, { memo } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const Button = memo<ButtonProps>(({ 
  text, 
  onClick, 
  type = 'button', 
  disabled = false, 
  ariaLabel, 
  className 
}) => {
    return (
        <button 
            className={className || styles.button}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text}
        >
            {text}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
