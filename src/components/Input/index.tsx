import { type FC, type ChangeEvent } from "react";
import { styles } from "./styles";

/**
 * @description Input type
 * @example "search" | "text"
 */
type InputType = "search" | "text";

export interface InputProps {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  type?: InputType;
  placeholder: string;
  ariaDescribedby?: string;
  autoComplete: string;
  hideLabel?: boolean;
  className?: string;
}

export const Input: FC<InputProps> = ({
  query,
  label,
  id,
  type = "text",
  placeholder,
  ariaDescribedby,
  autoComplete,
  hideLabel = false,
  onChange,
  className,
  ...props
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span className={hideLabel ? "sr-only" : ""}>{label}</span>
      <input
        id={id}
        type={type}
        value={query}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={ariaDescribedby}
        autoComplete={autoComplete}
        className={`${styles.input} ${className || ""}`}
        {...props}
      />
    </label>
  );
};
