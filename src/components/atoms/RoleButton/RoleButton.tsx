import { ReactElement } from "react";
import { classNames } from "../../../utils";
import { StaticImageData } from "next/image";

export interface Props {
  img: StaticImageData;
  isActive: boolean;
  onClick: () => void;
}

const RoleButton = ({ img, onClick, isActive }: Props): ReactElement => {
  return (
    <button
      className={classNames(
        "hover:opacity-100 relative w-6 lg:w-10",
        isActive ? "opacity-100" : "opacity-50"
      )}
      style={{ position: "relative" }}
      onClick={() => onClick()}
    >
      <img src={img.src} alt={`${img.src}-image`} className="w-full h-full" />
    </button>
  );
};

export default RoleButton;
