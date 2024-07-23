import LockIcon from "@/assets/react-svg/lock-icon.svg";
import PhotoCard from "@/components/PhotoCard";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/buttons/Checkbox";
import { FC } from "react";

import { ChecklistItemProps } from ".";
import styles from "./CheckListItem.module.scss";

const ChecklistItem: FC<ChecklistItemProps> = ({
  title,
  description,
  image,
  checked,
  buttonText,
  locked = false,
}) => {
  return (
    <div className={`${styles.item} ${locked ? styles.locked : ""}`}>
      <Checkbox disabled={locked} checked={checked} />

      <div>
        <div className={styles.content}>
          <h3 className={styles.itemTitle}>{title}</h3>

          {locked && (
            <div className="d-flex align-items-center gap-2">
              <LockIcon />
              <span>Locked</span>
            </div>
          )}
        </div>

        {description && (
          <div className="d-flex flex-row mt-3 gap-1">
            <div className="d-flex flex-column justify-content-between">
              <p className={styles.itemDescription}>{description}</p>
              {buttonText && <Button>{buttonText}</Button>}
            </div>

            {image && <PhotoCard photo={image} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChecklistItem;
