import React from "react";
import styles from "./DeliverySection.module.scss";

import {
  Section,
  SectionHeader,
  SectionContent,
  Title2,
  Title3,
  Button,
} from "components";

const DeliverySection: React.FC = () => {
  return (
    <Section id="delivery">
      <div className="container">
        <SectionHeader>
          <Title2>доставка</Title2>
        </SectionHeader>
        <SectionContent>
          <div className="wrapper">
            <Title3>
              Служба
              <br /> доставки
            </Title3>
            <div className="description">
              <p>
                Phasellus diam, ultrices lobortis integer et. Diam, purus vel
                sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
                orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem.
                Et in vitae pellentesque non, lectus orci natoque faucibus
                suspendisse. Semper aliquam id et ultrices velit donec lacus. In
                odio sit nibh volutpat cras placerat sit feugiat dignissim.
                Rutrum et suspendisse tortor, lobortis eleifend in fringilla.
                Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit
                nam enim semper porttitor imperdiet diam semper. Nulla sit etiam
                cras morbi enim elementum euismod sapien.
              </p>

              <div className={styles.actions}>
                <Button variant="primary">Подробнее</Button>
                <Button variant="outline">Условия доставки</Button>
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default DeliverySection;
