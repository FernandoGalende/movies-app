import { styles } from "./styles";

interface InputProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  placeholder: string;
  ariaLabel: string;
  ariaDescribedby: string;
  autoComplete: string;
}

export function Input({
  query,
  label,
  id,
  placeholder,
  ariaLabel,
  ariaDescribedby,
  autoComplete,
  onChange,
  ...props
}: InputProps) {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        id={id}
        type="search"
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
}
