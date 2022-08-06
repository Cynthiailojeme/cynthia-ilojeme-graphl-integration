import React from "react";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  onClick: (data?: any) => void;
  disabled?: boolean;
  marginTop?: number;
}

const Button = ({ text, onClick, disabled, marginTop }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={{ marginTop: `${marginTop}px` }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
