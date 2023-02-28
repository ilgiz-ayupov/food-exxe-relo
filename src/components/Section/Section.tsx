import React from "react";
import cn from "classnames";
import styles from "./Section.module.scss";

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const sectionClasses = cn(styles.section, className);

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

export default Section;
