import { ReactElement, useContext } from "react";
import { Passive } from "../../../interface";
import { getChampionPassiveImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";

export interface Props {
  passive: Passive;
}

const PassiveComponent = ({ passive }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  return (
    <div className="border-2 border-or-3">
      <img
        src={getChampionPassiveImg(passive.image.full, version)}
        alt={`Passive-${passive.name}-img`}
        className="w-full"
      />
    </div>
  );
};

export default PassiveComponent;

