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

  return (
    <div className="flex flex-col items-center w-[30%] sm:w-[23%] lg:w-[15%] xl:w-[6%]">
      <ChampionButton
        img={getChampionImg(champion.image.full, version)}
        id={champion.id}
        onClick={(id) => onClick(id)}
      />
      <h2 className="mt-2 text-grey-1">{champion.name}</h2>
    </div>
  );
};

export default ChampionCard;

