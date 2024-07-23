import SwitchButton from "./SwitchButton";

export default SwitchButton;

export type SwitchButtonProps = {
  isActive: boolean;
  onToggle: (id: number) => void;
  id: number;
  variant?: "default" | "primary" | "secondary";
};
