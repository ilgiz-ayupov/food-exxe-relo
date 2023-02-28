import React from "react";
import styles from "./Home.module.scss";

import { Navigation, Sidebar } from "components";
import { HeroSection, AboutSection } from "sections";

const Home: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Navigation className={styles.header__nav} />
      </header>

      <aside>
        <Sidebar />
      </aside>

      <main>
        <HeroSection />
        <AboutSection />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
