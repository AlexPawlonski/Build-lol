import { ReactElement } from "react";

import { getChampionLoading } from "../../../api";
import { Champion } from "../../../interface";

export interface Props {
  champSelected: Champion;
}

const ChampionLoadingImg = ({ champSelected }: Props): ReactElement => {
  return (
    <div className="flex items-center justify-center border-2 border-or-2 w-full">
      <img src={getChampionLoading(champSelected.id)} alt={`${champSelected.id}-Loading-img`} className="w-full" />
    </div>
  );
};

export default ChampionLoadingImg;

