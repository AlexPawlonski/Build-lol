import { ReactElement } from "react";
import { Champion } from "../../../interface";
import { Spell } from "../../atoms";

export interface Props {
  champSelected: Champion;
}

const ChampionSpell = ({ champSelected }: Props): ReactElement => {
  const spells = champSelected.spells;
  return (
    <section className="w-full flex-col lg:flex-grow gap-2 lg:gap-4 flex px-3 lg:px-0">
      {spells.map((spell, key) => (
        <Spell key={key} spell={spell} keyId={key} />
      ))}
    </section>
  );
};

export default ChampionSpell;
