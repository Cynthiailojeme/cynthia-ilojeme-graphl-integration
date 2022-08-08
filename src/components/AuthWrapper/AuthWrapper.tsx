import React, { ReactNode } from "react";
import styles from "./AuthWrapper.module.scss";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
  size?: string;
}

const AuthWrapper = ({ title, subtitle, children, size }: Props) => {
  const width = size === "lg" ? 600 : 500;
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__form} style={{ width: `${width}px` }}>
        <h4 className={styles.wrapper__title}>{title}</h4>
        <h5 className={styles.wrapper__subtitle}>{subtitle}</h5>

        <div>{children}</div>
      </div>
    </div>
  );
};

AuthWrapper.defaultProps = {
  size: "md",
};

export default AuthWrapper;
