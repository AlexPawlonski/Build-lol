import { ReactElement, useContext } from "react";
import { CaretUpSolid } from "@public/iconSvg";
import { useGlobalContext } from "@src/context/globalContext";
import { useTranslation } from "react-i18next";
import { changeStatsPerLvl } from "../../../utils";
import { PerLvlStats, Stats } from "../../../interface";

export interface Props {
  champSelectStats: Stats;
  champPerLvl: PerLvlStats;
}

const Level = ({ champSelectStats, champPerLvl }: Props): ReactElement => {
  const { t } = useTranslation();
  const { level, setLevel, setChampStats } = useGlobalContext();
  return (
    <div className="flex items-center gap-2">
      <CaretUpSolid
        className="transform rotate-[-90deg] fill-or-3 w-4 lg:w-6"
        onClick={() => {
          if (level !== 1) {
            setLevel(level - 1);
            setChampStats(
              changeStatsPerLvl(champSelectStats, champPerLvl, level - 1)
            );
          }
        }}
      />
      <p className="beaufortforLOL text-lg lg:text-2xl text-or-2 uppercase">
        {t("level")} {level}
      </p>
      <CaretUpSolid
        className="transform rotate-[90deg] fill-or-3 w-4 lg:w-6"
        onClick={() => {
          if (level !== 18) {
            setLevel(level + 1);
            setChampStats(
              changeStatsPerLvl(champSelectStats, champPerLvl, level + 1)
            );
          }
        }}
      />
    </div>
  );
};

export default Level;
