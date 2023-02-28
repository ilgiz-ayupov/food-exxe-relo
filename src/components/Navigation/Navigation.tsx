import React from "react";
import cn from "classnames";
import styles from "./Navigation.module.scss";

import { Button } from "components";

type NavigationProps = {
  className: string;
};

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const navClasses = cn(styles.nav, className);

  return (
    <nav className={navClasses}>
      <ul className={styles.menu}>
        <li>
          <a href="/">Меню</a>
        </li>
        <li>
          <a href="/">Доставка</a>
        </li>
        <li>
          <a href="/">Оплата</a>
        </li>
        <li>
          <Button variant="primary">Бронь столика</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
