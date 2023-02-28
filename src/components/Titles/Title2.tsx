import React from "react";
import styles from "./Titles.module.scss";

type Title2Props = {
  children: React.ReactNode;
};

const Title2: React.FC<Title2Props> = ({ children }) => {
  return (
    <h2 className={styles["title-2"]}>
      <span>{children}</span>
    </h2>
  );
};

export default Title2;
