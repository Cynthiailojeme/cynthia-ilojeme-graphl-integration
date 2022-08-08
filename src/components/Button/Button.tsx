import React from "react";
import Spinner from "../Loader/Spinner";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  onClick?: (data?: any) => void;
  disabled?: boolean;
  marginTop?: number;
  loading?: boolean;
}

const Button = ({ text, onClick, disabled, marginTop, loading }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="submit"
      style={{ marginTop: `${marginTop}px` }}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
