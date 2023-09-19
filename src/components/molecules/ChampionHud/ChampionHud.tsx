import { ReactElement } from "react";
import { Champion } from "../../../interface";
import Level from "../../atoms/Level";

export interface Props {
  champSelected: Champion;
}

const ChampionHud = ({ champSelected }: Props): ReactElement => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h1>{champSelected.name}</h1>
        <Level onChange={(lvl) => console.log(lvl)} />
      </div>
    </section>
  );
};

export default ChampionHud;

