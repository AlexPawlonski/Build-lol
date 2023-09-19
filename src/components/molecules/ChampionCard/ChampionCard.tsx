import { ReactElement, useContext } from "react";
import { ChampionCompact } from "../../../interface";
import { ChampionButton } from "../../atoms";
import { GlobalContext } from "../../../globalContext";
import { getChampionImg } from "../../../api";

export interface Props {
  champion: ChampionCompact;
  onClick: (value: string) => void;
}

const ChampionCard = ({ champion, onClick }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  const champImg = getChampionImg(champion.id, version);

  return (
    <div className="flex flex-col items-center mx-4">
      <ChampionButton img={champImg} id={champion.id} onClick={(id) => onClick(id)} />
      <h2 className="mt-2 mb-4 text-grey-1">{champion.name}</h2>
    </div>
  );
};

export default ChampionCard;

