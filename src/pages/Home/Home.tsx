import React from "react";
import styles from "./Home.module.scss";

import { Navigation, Sidebar, HeroSection } from "components";

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
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
