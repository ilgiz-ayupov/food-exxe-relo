import React from "react";
import styles from "./MenuSection.module.scss";

import {
  Section,
  SectionHeader,
  SectionContent,
  Title2,
  Title3,
} from "components";

const MenuSection: React.FC = () => {
  return (
    <Section id="menu">
      <div className="container">
        <SectionHeader>
          <Title2>меню</Title2>
        </SectionHeader>
        <SectionContent>
          <div className="wrapper">
            <Title3>Меню</Title3>
            <div className="description">
              <p>
                At faucibus nullam mauris vitae ut non. Augue libero non nibh
                nec, et eget erat. Nascetur nunc neque, varius massa aliquam
                interdum turpis massa. Ac tortor aliquam risus, interdum nisl
                mauris sit. Ut placerat fermentum pellentesque ac at. Vitae
                venenatis faucibus urna mi eget vitae quam eu. Euismod sed
                mauris id turpis iaculis. Erat rutrum dolor, vitae morbi. Nunc
                cras cras aliquet blandit faucibus massa sagittis semper.
              </p>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={styles.gallery__row}>
              <div className={styles.gallery__card}>
                <img
                  src="/images/menu_section/gallery1.jpg"
                  alt=""
                  width={340}
                  height={240}
                />
              </div>
              <div className={styles.gallery__card}>
                <img
                  src="/images/menu_section/gallery2.jpg"
                  alt=""
                  width={340}
                  height={240}
                />
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default MenuSection;
