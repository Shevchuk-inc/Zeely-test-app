export type ResultType = {
  id: number;
  value: number;
  title: string;
  currency: string | null;
  currencySymbol: string | null;
};

export interface ResultsState {
  results: ResultType[];
}
