import React, { ChangeEvent, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

interface Props {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?(): (value: string) => void;
  onBlur?(): (value: string) => void;
  field?: {
    name?: string | "";
    value?: string | "";
    onFocus?(): (value: string) => void;
    onBlur?(): (value: string) => void;
    onChange?(): (value: string) => void;
  };
  form?: any;
  disabled?: boolean;
  bottom?: number;
}

const Input = ({
  label,
  type,
  name,
  onChange,
  placeholder,
  form,
  field,
  onFocus,
  onBlur,
  value,
  id,
  disabled,
  bottom,
}: Props) => {
  const [inputType, setInputType] = useState<string>(type);

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  // check if input is touched
  const isTouched =
    form && field && form.touched && form.touched[field && field.name!];
  // check if input has errors
  const isError =
    form && field && form.errors && form.errors[field && field.name!];

  const error = isError && isTouched;

  return (
    <div className={styles.input} style={{ marginBottom: `${bottom}px` }}>
      {label && (
        <label className={styles.input__label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.input__container}>
        <input
          className={classNames(
            styles.input__field,
            error && "input__field--error"
          )}
          type={inputType}
          onFocus={(field && field.onFocus) || onFocus}
          onChange={(field && field.onChange) || onChange}
          onBlur={(field && field.onBlur) || onBlur}
          value={(field && field.value) || value || ""}
          name={(field && field.name) || name}
          id={(field && field.name) || id}
          placeholder={placeholder}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            className={styles.input__password}
            onClick={handleShowPassword}
          >
            <span>{inputType === "password" ? "Show" : "Hide"}</span>
          </button>
        )}
      </div>

      {error && (
        <p className={styles.input__error}>
          {form.errors[field && field.name!]}
        </p>
      )}
    </div>
  );
};

export default Input;
