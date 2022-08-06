import React, { ReactNode } from "react";
import styles from "./AuthWrapper.module.scss";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const AuthWrapper = ({ title, subtitle, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__form}>
        <h4 className={styles.wrapper__title}>{title}</h4>
        <h5 className={styles.wrapper__subtitle}>{subtitle}</h5>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
