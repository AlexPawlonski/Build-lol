import { ReactElement } from "react";
import { ChampionStats } from "../../../interface";
import { useTranslation } from "react-i18next";
import ChartBar from "../../atoms/ChartBar";
import { ChartCircle } from "../../atoms";
import { StatsTab } from "../../molecules";

export interface Props {
  champStats: ChampionStats;
  pcPoint: { 1024: boolean; 1280: boolean };
}

const ChampionStatsComponent = ({ champStats, pcPoint }: Props): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 lg:px-0 flex flex-col items-center gap-2 lg:gap-4">
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
        {t("statsTitle.armor")} / {t("statsTitle.mr")}
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
      {!pcPoint[1024] && <h3 className="text-2xl text-or-3">{t("summary")}</h3>}
      <div className="lg:w-full flex lg:flex-col items-center justify-center gap-4">
        <div className="w-[60%] lg:w-full">
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
        </div>
        {pcPoint[1024] && <h3 className="text-2xl text-or-3">{t("summary")}</h3>}
        <div className="w-[40%] lg:w-[70%]">
          <ChartCircle
            data={[
              {
                data: champStats.armor,
                label: t("statsTitle.armor"),
                color: "#f2ba57",
              },
              {
                data: champStats.spellblock,
                label: t("statsTitle.mr"),
                color: "#52dfff",
              },
              {
                data: champStats.attackdamage,
                label: t("statsTitle.ad"),
                color: "#ec8c34",
              },
              {
                data: 0,
                label: t("statsTitle.ap"),
                color: "#786cff",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ChampionStatsComponent;
