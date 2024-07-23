import { FC } from "react";

import { PhotoCardProps } from ".";
import styles from "./PhotoCard.module.scss";

const PhotoCard: FC<PhotoCardProps> = ({ photo, list = [] }) => {
  if (list.length === 0) {
    return (
      <div className={styles.card}>
        <img src={photo} alt={`photo ${photo}`} className={styles.cardImage} />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {list.map((item, index) => {
        const translateSpace = index * 6;
        return (
          <img
            key={item}
            src={item}
            alt={`photo ${item}`}
            className={styles.cardListImage}
            style={{
              zIndex: index,
              transform: `translate(-${translateSpace}px, -${translateSpace}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default PhotoCard;
