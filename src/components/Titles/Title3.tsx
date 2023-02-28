import React from "react";
import cn from "classnames";
import styles from "./Titles.module.scss";

type Title3Props = {
  className?: string;
  children: React.ReactNode;
};

const Title3: React.FC<Title3Props> = ({ className, children }) => {
  const titleClasses = cn(styles["title-3"], className);
  
  return <h3 className={titleClasses}>{children}</h3>;
};

export default Title3;
