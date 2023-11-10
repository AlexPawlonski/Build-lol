import { ReactElement, useContext } from "react";
import { Champion, ChampionStats, PerLvlStats } from "../../interface";
import { ChampionHud, ChampionLoadingImg, ChampionSpell, ItemTooltip, StatsTab } from "../../components/molecules";
import { Inventory, InventoryChampion } from "../../components/organism";
import { GlobalContext } from "../../globalContext";
import { Passive } from "../../components/atoms";
import ChartBar from "../../components/atoms/ChartBar";
import { useTranslation } from "react-i18next";
export interface IconProps {
  champSelected: Champion;
  champStats: ChampionStats;
  champPerLvl: PerLvlStats;
  lvl: number;
}

const DataView = ({ champSelected, champStats, champPerLvl }: IconProps): ReactElement => {
  const { t } = useTranslation();
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
      <div className="w-[30%] flex flex-col items-center gap-4">
        <h3 className="text-2xl text-or-3">
          {t("statsTitle.ad")} / {t("statsTitle.ap")}
        </h3>
        <ChartBar
          data={[
            {
              data: champStats.attackdamage,
              title: "AD",
              icon: "attackdamage",
              color: "#ec8c34",
            },
            {
              data: 0,
              title: "AP",
              icon: "spelldamage",
              color: "#786cff",
            },
          ]}
          title={t("spellType.cooldow")}
        />
        <h3 className="text-2xl text-or-3">
          {t("statsTitle.armor")} / {t("statsTitle.mrRes")}
        </h3>
        <ChartBar
          data={[
            {
              data: champStats.armor,
              title: "Armor",
              icon: "armor",
              color: "#f2ba57",
            },
            {
              data: champStats.spellblock,
              title: "SpellBlock",
              icon: "spellblock",
              color: "#52dfff",
            },
          ]}
          title={t("spellType.cooldow")}
        />
        <StatsTab
          stats={{
            attackspeed: champStats.attackspeed,
            cdr: 0,
            crit: champStats.crit,
            movespeed: champStats.movespeed,
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
        <h3 className="text-2xl text-or-3">{t("summary")}</h3>
      </div>
    </section>
  );
};

export default DataView;
