import React from "react";
import styles from "./Sidebar.module.scss";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

import { Socials } from "components";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <div className={styles.sidebar__top}>
          <a href="/" className={styles.sidebar__logo}>
            <Logo />
          </a>
          <button className={styles.sidebar__burger}>
            <MenuIcon />
          </button>
        </div>

        <Socials className={styles.sidebar__socials} direction="vertical" />
      </div>
    </div>
  );
};

export default Sidebar;
