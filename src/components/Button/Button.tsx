import React from "react";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  onClick: (data?: any) => void;
  disabled?: boolean;
  marginTop?: number;
  loading?: boolean;
  loadingText?: string;
}

const Button = ({
  text,
  onClick,
  disabled,
  marginTop,
  loading,
  loadingText,
}: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="submit"
      style={{ marginTop: `${marginTop}px` }}
    >
      {loading ? loadingText : text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
