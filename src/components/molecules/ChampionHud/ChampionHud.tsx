import { ReactElement } from "react";
import { Champion } from "../../../interface";
import { Bar, Level, Passive, Spell } from "../../atoms";

export interface Props {
  champSelected: Champion;
}

const ChampionHud = ({ champSelected }: Props): ReactElement => {
  const stats = champSelected.stats;
  const spells = champSelected.spells;
  const passive = champSelected.passive;

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>{champSelected.name}</h1>
        <Level onChange={(lvl) => console.log(lvl)} />
      </div>
      <div className="flex flex-col gap-4">
        <Bar type="hp" state={stats.hp} />
        {stats.mp !== 0 && <Bar type={stats.mpperlevel === 0 ? "energie" : "mp"} state={stats.mp} />}
      </div>
      <div className="flex gap-4">
        <Passive passive={passive} />
        {spells.map((spell, key) => (
          <Spell key={key} spell={spell} />
        ))}
      </div>
    </section>
  );
};

export default ChampionHud;


