import CreativeStats from "./CreativeStats";

export default CreativeStats;

export type CreativeStatsProps = {
  uniqueViewers: number;
  totalViews: number;
  spent: number;
  linkClicks: number;
  automaticLinkClicks: number;
  perLinkClick: number;
  totalLinkClick: number;
};

export const statsConfig = [
  { label: "Unique viewers", key: "uniqueViewers" },
  { label: "Total views", key: "totalViews" },
  { label: "Spent", key: "spent", isCurrency: true },
  { label: "Link clicks", key: "linkClicks" },
  { label: "Automatic link clicks", key: "automaticLinkClicks" },
  { label: "Per link click", key: "perLinkClick" },
  { label: "total link clicks", key: "totalLinkClick" },
];
