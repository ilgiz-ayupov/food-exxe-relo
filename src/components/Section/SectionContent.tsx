import React from "react";
import styles from "./Section.module.scss";

type SectionContentProps = {
  children: React.ReactNode;
};
const SectionContent: React.FC<SectionContentProps> = ({ children }) => {
  return <div className={styles.section__content}>{children}</div>;
};

export default SectionContent;
