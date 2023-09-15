import { ReactElement, useContext, useMemo } from "react";
import { GlobalContext } from "../../../globalContext";
import { useInitChampion } from "../../../hook";
import ChampionCard from "../../molecules/ChampionCard";

export interface IconProps {}

const ChampSelect = ({}: IconProps): ReactElement => {
  const { language, version } = useContext(GlobalContext);

  const { data: champions, isLoading } = useInitChampion(language, version);

  const championsArray = useMemo(() => {
    if (champions?.data) {
      return Object.entries(champions?.data).map((item) => item[1]);
    }
  }, [champions]);

  return (
    <section className="w-full h-full p-6">
      <div className="flex flex-wrap overflow-scroll max-h-full">
        {!isLoading &&
          championsArray?.map((item) => <ChampionCard champion={item} onClick={(id) => console.log(id)} />)}
      </div>
    </section>
  );
};

export default ChampSelect;

