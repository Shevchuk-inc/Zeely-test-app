import firstPhoto from "@/assets/images/photo_1.png";
import secondPhoto from "@/assets/images/photo_2.png";
import Badge from "@/components/Badge";
import PhotoCard from "@/components/PhotoCard";
import { FC } from "react";

import styles from "./Info.module.scss";

const Info: FC = () => (
  <div className={styles.info}>
    <div className="d-flex gap-3 flex-row">
      <PhotoCard list={[secondPhoto, firstPhoto]} />

      <div className="d-flex flex-column gap-2">
        <h2 className={styles.infoTitle}>Instagram stories, Kiev</h2>

        <div className="d-flex gap-1">
          <Badge status="success">Active until 29.02.24</Badge>
          <Badge>testsite.zee.am</Badge>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
