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
  ariaLabel: string;
  ariaDescribedby: string;
  autoComplete: string;
}

export const Input: FC<InputProps> = ({
  query,
  label,
  id,
  type = "text",
  placeholder,
  ariaLabel,
  ariaDescribedby,
  autoComplete,
  onChange,
  ...props
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        id={id}
        type={type}
        value={query}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        autoComplete={autoComplete}
        className={styles.input}
        {...props}
      />
    </label>
  );
};
