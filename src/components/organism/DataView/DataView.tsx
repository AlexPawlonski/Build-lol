import { ReactElement, useContext } from "react";
import { ChampionLoadingImg } from "../../molecules";
import ChampionHud from "../../molecules/ChampionHud";
import { GlobalContext } from "../../../globalContext";

export interface IconProps {}

const DataView = ({}: IconProps): ReactElement => {
  const { champSelected } = useContext(GlobalContext);
  console.log(champSelected);
  
  return (
    <section className="w-full h-full p-6">
      {champSelected ? (
        <div className="flex gap-4 h-full">
          <div className="w-[20%]">
            <ChampionLoadingImg champSelected={champSelected} />
            <p className="mt-4">{champSelected.lore}</p>
          </div>
          <div className="w-[80%]">
            <ChampionHud champSelected={champSelected} />
          </div>
        </div>
      ) : (
        <p>select Champ</p>
      )}
    </section>
  );
};

export default DataView;

