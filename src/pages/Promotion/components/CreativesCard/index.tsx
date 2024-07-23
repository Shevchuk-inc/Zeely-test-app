import { CreativeType } from "@/types/creatives";

import CreativesCard from "./CreativesCard";

export default CreativesCard;

export type CreativesCardProps = {
  item: CreativeType;
  onToggle: (id: number) => void;
};
