import React from "react";
import cn from "classnames";
import styles from "./Socials.module.scss";

import { ReactComponent as YoutubeIcon } from "assets/icons/youtube.svg";
import { ReactComponent as VkIcon } from "assets/icons/vk.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";

type SocialsType = {
  className: string;
  direction: "horizontal" | "vertical";
};

const Socials: React.FC<SocialsType> = ({ className, direction }) => {
  const socialsClasses = cn(styles.socials, className, {
    [styles["socials--vertical"]]: direction === "vertical",
    [styles["socials--horizontal"]]: direction === "horizontal",
  });

  return (
    <ul className={socialsClasses}>
      <li>
        <a href="/">
          <YoutubeIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <VkIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <TelegramIcon />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
