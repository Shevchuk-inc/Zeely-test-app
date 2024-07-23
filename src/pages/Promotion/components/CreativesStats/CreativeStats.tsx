import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CreativeStatsProps, statsConfig } from ".";
import styles from "./CreativeStats.module.scss";

const CreativeStats: FC<CreativeStatsProps> = ({
  spent,
  totalViews,
  linkClicks,
  uniqueViewers,
}) => {
  const stats = { spent, totalViews, linkClicks, uniqueViewers };

  return (
    <div className={styles.stats}>
      <Swiper spaceBetween={10} slidesPerView={4}>
        {statsConfig.map(({ label, key, isCurrency }) => (
          <SwiperSlide key={key}>
            <div className={styles.statsItem}>
              <span className={styles.statsValue}>
                {isCurrency
                  ? `$${stats[key as keyof typeof stats].toFixed(2)}`
                  : stats[key as keyof typeof stats]}
              </span>
              <span className={styles.statsLabel}>{label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CreativeStats;
