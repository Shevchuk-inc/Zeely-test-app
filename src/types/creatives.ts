export interface CreativeType {
  id: number;
  title: string;
  image: string;
  activeUntil: string;
  uniqueViewers: number;
  totalViews: number;
  spent: number;
  linkClicks: number;
  isActive: boolean;
  // only for testing
  automaticLinkClicks?: number;
  perLinkClick?: number;
  totalLinkClick?: number;
}

export interface CreativesState {
  items: CreativeType[];
}
