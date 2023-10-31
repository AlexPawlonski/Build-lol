import { ReactElement } from "react";
import { Champion, Item } from "../../interface";
import { ChampionHud, ChampionLoadingImg, ItemTooltip, StatsTab } from "../../components/molecules";

export interface IconProps {
  champSelected: Champion;
  itemHover?: {
    position: {
      x: number;
      y: number;
    };
    item: Item;
  };
}

const DataView = ({ champSelected, itemHover }: IconProps): ReactElement => {
  const stats = champSelected.stats;
  return (
    <section className="w-full h-full p-6">
      {itemHover && <ItemTooltip item={itemHover.item} position={itemHover.position} />}
      <div className="flex gap-4 h-full">
        <div className="w-[20%]">
          <ChampionLoadingImg champSelected={champSelected} />
          <p className="mt-4">{champSelected.lore}</p>
        </div>
        <div className="w-[80%]">
          <ChampionHud champSelected={champSelected} />
          <div className="flex mt-4 gap-4">
            <StatsTab
              stats={{
                attackdamage: stats.attackdamage,
                spelldamage: 0,
                armor: stats.armor,
                spellblock: stats.spellblock,
                attackspeed: stats.attackspeed,
                cdr: 0,
                crit: stats.crit,
                movespeed: stats.movespeed,
              }}
            />
            <StatsTab
              stats={{
                hpregen: stats.hpregen,
                mpregen: stats.mpregen,
                peneArmor: [0, 0],
                peneAp: [0, 0],
                attackSpe: 0,
                vampirism: 0,
                attackrange: stats.attackrange,
                msSpe: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataView;

