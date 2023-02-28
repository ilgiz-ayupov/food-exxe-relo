import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant: "primary" | "outline";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const btnClasses = cn(styles.btn, {
    [styles["btn--primary"]]: variant === "primary",
  });

  return <button className={btnClasses}>{children}</button>;
};

export default Button;
