import React from "react";
import styles from "./Section.module.scss";

type SectionHeaderProps = {
  children: React.ReactNode;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return <div className={styles.section__header}>{children}</div>;
};

export default SectionHeader;
