import { ReactElement } from "react";
import { classNames } from "../../../utils";
import border from "../../../assets/borderChamp.webp";

export interface Props {
  img: string;
  id: string;
  onClick: (id: string) => void;
}

const ChampionButton = ({ img, id, onClick }: Props): ReactElement => {
  return (
    <button
      className={classNames("group border-2 border-grey-2 hover:border-or-2 relative w-full")}
      style={{ position: "relative" }}
      onClick={() => onClick(id)}
    >
      <img
        src={border}
        alt={`${border}-image`}
        className="absolute w-full h-full z-10 transform opacity-0 group-hover:opacity-100 transition-all scale-[1.10]"
        style={{ top: 0, position: "absolute" }}
      />
      <img src={img} alt={`${img}-image`} className="w-full h-full" />
    </button>
  );
};

export default ChampionButton;
