import { ReactElement } from "react";
import { Champion } from "../../../interface";
import { Passive, Spell } from "../../atoms";

export interface Props {
  champSelected: Champion;
}

const ChampionSpell = ({ champSelected }: Props): ReactElement => {
  const spells = champSelected.spells;
  const passive = champSelected.passive;

  return (
    <section className="w-full flex flex-col gap-4">
      <Passive passive={passive} />
      {spells.map((spell, key) => (
        <Spell key={key} spell={spell} keyId={key} />
      ))}
    </section>
  );
};

export default ChampionSpell;
