import React from "react";

import {
  Section,
  SectionHeader,
  SectionContent,
  Title2,
  Title3,
} from "components";

const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <div className="container">
        <SectionHeader>
          <Title2>о ресторане</Title2>
        </SectionHeader>
        <SectionContent>
          <div className="wrapper">
            <Title3>
              Food
              <br /> Exxe
              <br /> Relo
            </Title3>
            <div className="description">
              <p>
                Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
                lectus phasellus non ornare eget velit. Facilisi urna, tristique
                dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
                pulvinar sit volutpat nulla vestibulum. Morbi pellentesque enim
                massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi
                massa enim nullam sem vehicula. Amet quis pellentesque enim
                porttitor lectus interdum. Nisi, faucibus pharetra at porttitor.
                Fringilla luctus pretium in viverra. In adipiscing tempor amet
                malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate
                risus massa dictum. Cras at quis in eu, faucibus feugiat vel.
                At.
              </p>
            </div>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default AboutSection;
