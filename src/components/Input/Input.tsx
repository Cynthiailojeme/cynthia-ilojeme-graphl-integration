import React from "react";
import styles from "./Input.module.scss";

interface Props {
  label: string;
  type: string;
  name: string;
  onChange: (data?: any) => void;
  placeholder: string;
}

const Input = ({ label, type, name, onChange, placeholder }: Props) => {
  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.input__label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={styles.input__field}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
