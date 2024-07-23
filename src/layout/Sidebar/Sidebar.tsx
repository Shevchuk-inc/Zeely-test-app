import Avatar from "@/assets/images/avatar.png";
import MailIcon from "@/assets/react-svg/mail-icon.svg";
import { SidebarMockData } from "@/mocks/SideBarMockData";
import { FC } from "react";

import styles from "./Sidebar.module.scss";
import ChecklistItem from "./components/CheckListItem";

const Sidebar: FC = () => (
  <div className={styles.sidebar}>
    <div className="d-flex flex-row justify-content-between mb-3">
      <div className="d-flex flex-row gap-2 align-items-center">
        <div className={styles.sidebarAvatar}>
          <img
            className={styles.sidebarAvatarImage}
            src={Avatar}
            alt="avatar"
          />
        </div>

        <h2 className={styles.sidebarTitle}>Hi, Michelle</h2>
      </div>

      <div className={styles.sidebarNotification}>
        <MailIcon />
        <span className={styles.sidebarNotificationCount}>2</span>
      </div>
    </div>

    <div className="d-flex flex-column gap-4">
      {SidebarMockData.map((item, index) => (
        <ChecklistItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          checked={item.checked}
          buttonText={item.buttonText}
          locked={item.locked}
        />
      ))}
    </div>
  </div>
);

export default Sidebar;
