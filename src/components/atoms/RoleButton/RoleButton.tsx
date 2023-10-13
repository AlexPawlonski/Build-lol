import { ReactElement } from "react";
import { classNames } from "../../../utils";

export interface Props {
  img: string;
  size?: string;
  isActive: boolean;
  onClick: () => void;
}

const RoleButton = ({ img, size, onClick, isActive }: Props): ReactElement => {
  return (
    <button
      className={classNames(size, "hover:opacity-100 relative ", isActive ? "opacity-100" : "opacity-50")}
      style={{ position: "relative" }}
      onClick={() => onClick()}
    >
      <img src={img} alt={`${img}-image`} className="w-full h-full" />
    </button>
  );
};

export default RoleButton;

