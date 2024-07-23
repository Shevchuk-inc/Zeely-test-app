import CreativeStats from "./CreativeStats";

export default CreativeStats;

export type CreativeStatsProps = {
  uniqueViewers: number;
  totalViews: number;
  spent: number;
  linkClicks: number;
};

export const statsConfig = [
  { label: "Unique viewers", key: "uniqueViewers" },
  { label: "Total views", key: "totalViews" },
  { label: "Spent", key: "spent", isCurrency: true },
  { label: "Link clicks", key: "linkClicks" },
];
