import React from "react";
import styles from "./HeroSection.module.scss";

import { Section } from "components";

import bg from "assets/images/hero-bg.jpg";

const HeroSection: React.FC = () => {
  return (
    <Section id="hero" className={styles.hero}>
      <img className={styles.hero__bg} src={bg} alt="" />
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Видовой ресторан Food Exxe Relo на Крестовском острове
        </h1>
      </div>
    </Section>
  );
};

export default HeroSection;
