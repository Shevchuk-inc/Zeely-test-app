import CheckListItem from "./CheckListItem";

export default CheckListItem;

export type ChecklistItemProps = {
  title: string;
  description: string;
  image: string;
  checked: boolean;
  buttonText: string;
  locked?: boolean;
};
