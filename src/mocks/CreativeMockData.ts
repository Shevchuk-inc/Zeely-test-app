import { CreativeType } from "@/types/creatives";

import FirstPhoto from "../assets/images/photo_1.png";
import ThirdPhoto from "../assets/images/photo_1.png";
import SecondPhoto from "../assets/images/photo_2.png";

export const creativeMockData: CreativeType[] = [
  {
    id: 1,
    title: "Instagram stories, Kiev",
    image: FirstPhoto,
    activeUntil: "29.02.24",
    uniqueViewers: 21,
    totalViews: 567,
    spent: 1045.0,
    linkClicks: 342,
    isActive: true,
    automaticLinkClicks: 353,
    perLinkClick: 13.8,
    totalLinkClick: 23,
  },
  {
    id: 2,
    title: "Instagram stories, Kiev",
    image: SecondPhoto,
    activeUntil: "29.02.24",
    uniqueViewers: 1,
    totalViews: 5,
    spent: 23.4,
    linkClicks: 2,
    isActive: true,
    automaticLinkClicks: 5,
    perLinkClick: 123.87,
    totalLinkClick: 1000,
  },
  {
    id: 3,
    title: "Instagram stories, Kiev",
    image: ThirdPhoto,
    activeUntil: "29.02.24",
    uniqueViewers: 0,
    totalViews: 0,
    spent: 0.0,
    linkClicks: 0,
    isActive: true,
    automaticLinkClicks: 0,
    perLinkClick: 0.0,
    totalLinkClick: 0,
  },
];
