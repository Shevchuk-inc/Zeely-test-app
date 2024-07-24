import Badge from "@/components/Badge";
import PhotoCard from "@/components/PhotoCard";
import SwitchButton from "@/components/buttons/SwitchButton";
import { FC } from "react";

import { CreativesCardProps } from ".";
import CreativeStats from "../CreativesStats";
import styles from "./CreativesCard.module.scss";

const CreativesCard: FC<CreativesCardProps> = ({ item, onToggle }) => {
  const {
    id,
    title,
    image,
    spent,
    isActive,
    totalViews,
    linkClicks,
    activeUntil,
    perLinkClick,
    uniqueViewers,
    totalLinkClick,
    automaticLinkClicks,
  } = item;

  return (
    <div key={id} className={styles.item}>
      <div className="d-flex flex-row mb-3 gap-3">
        <PhotoCard photo={image} />

        <div className="d-flex flex-row justify-content-between w-100 align-items-center">
          <div className="d-flex gap-2 flex-column">
            <h3>{title}</h3>
            <Badge status={isActive ? "success" : "paused"}>
              {isActive ? `Active until ${activeUntil}` : "paused"}
            </Badge>
          </div>

          <SwitchButton
            isActive={isActive}
            onToggle={() => onToggle(id)}
            id={id}
          />
        </div>
      </div>

      <CreativeStats
        spent={spent}
        totalViews={totalViews}
        linkClicks={linkClicks}
        uniqueViewers={uniqueViewers}
        automaticLinkClicks={automaticLinkClicks || 0}
        totalLinkClick={totalLinkClick || 0}
        perLinkClick={perLinkClick || 0}
      />
    </div>
  );
};

export default CreativesCard;
