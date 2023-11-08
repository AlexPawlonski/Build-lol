import { ReactElement } from "react";
import { Champion, ChampionStats, PerLvlStats } from "../../../interface";
import { Bar, Level } from "../../atoms";

export interface Props {
  champSelected: Champion;
  champStats: ChampionStats;
  champPerLvl: PerLvlStats;
}

const ChampionHud = ({ champSelected, champStats, champPerLvl }: Props): ReactElement => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="beaufortforLOL text-2xl text-or-3 uppercase">{champSelected.name}</h2>
        <Level champSelectStats={champSelected.stats} champPerLvl={champPerLvl} />
      </div>
      <div className="flex flex-col gap-4">
        <Bar type="hp" state={champStats.hp} />
        {champStats.mp !== 0 && (
          <Bar type={champSelected.stats.mpperlevel === 0 ? "energie" : "mp"} state={champStats.mp} />
        )}
      </div>
    </section>
  );
};

export default ChampionHud;
