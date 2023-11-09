import { ReactElement, useContext } from "react";
import { Champion, ChampionStats, PerLvlStats } from "../../interface";
import { ChampionHud, ChampionLoadingImg, ChampionSpell, ItemTooltip, StatsTab } from "../../components/molecules";
import { Inventory, InventoryChampion } from "../../components/organism";
import { GlobalContext } from "../../globalContext";
import { Passive } from "../../components/atoms";
export interface IconProps {
  champSelected: Champion;
  champStats: ChampionStats;
  champPerLvl: PerLvlStats;
  lvl: number;
}

const DataView = ({ champSelected, champStats, champPerLvl }: IconProps): ReactElement => {
  const { itemHover } = useContext(GlobalContext);

  return (
    <section className="w-full h-full flex gap-6 p-6">
      {itemHover && <ItemTooltip item={itemHover.item} position={itemHover.position} />}
      <div className="w-[20%]">
        <Inventory />
      </div>
      <div className="w-[10%] flex flex-col gap-4">
        <ChampionLoadingImg champSelected={champSelected} />
        <InventoryChampion />
        <Passive passive={champSelected.passive} />
      </div>
      <div className="w-[40%] flex flex-col gap-6">
        <ChampionHud champSelected={champSelected} champStats={champStats} champPerLvl={champPerLvl} />
        <ChampionSpell champSelected={champSelected} />
      </div>
      <div className="w-[30%] grid grid-cols-2 grid-rows-6 gap-6">
        <StatsTab
          stats={{
            attackdamage: champStats.attackdamage,
            spelldamage: 0,
            armor: champStats.armor,
            spellblock: champStats.spellblock,
            attackspeed: champStats.attackspeed,
            cdr: 0,
            crit: champStats.crit,
            movespeed: champStats.movespeed,
          }}
        />
        <StatsTab
          stats={{
            hpregen: champStats.hpregen,
            mpregen: champStats.mpregen,
            peneArmor: [0, 0],
            peneAp: [0, 0],
            attackSpe: 0,
            vampirism: 0,
            attackrange: champStats.attackrange,
            msSpe: 0,
          }}
        />
      </div>
    </section>
  );
};

export default DataView;
