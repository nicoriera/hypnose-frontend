import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-primary-500",
    secondary:
      "bg-white text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm min-h-[36px]",
    medium: "px-6 py-3 text-base min-h-[44px]",
    large: "px-8 py-4 text-lg min-h-[52px]",
  };

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed transform-none"
    : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}>
      {text}
    </button>
  );
};

export default Button;
