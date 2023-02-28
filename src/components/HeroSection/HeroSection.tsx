import React from "react";
import styles from "./HeroSection.module.scss";

import bg from "assets/images/hero-bg.jpg";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <img className={styles.hero__bg} src={bg} alt="" />
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Видовой ресторан Food Exxe Relo на Крестовском острове
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
