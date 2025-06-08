import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { buttonStyles } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClass = buttonStyles({ variant, size });

  return (
    <button
      className={`${buttonClass} ${className || ""}`}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};
