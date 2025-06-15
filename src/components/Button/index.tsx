import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { buttonStyles } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "error";
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
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.variants[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
