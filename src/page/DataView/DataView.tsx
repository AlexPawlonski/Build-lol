import { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { Champion, ChampionStats, PerLvlStats } from "../../interface";
import { ChampionLoadingImg, ItemTooltip } from "../../components/molecules";
import {
  ChampionSpell,
  ChampionHud,
  Inventory,
  InventoryChampion,
  ChampionStatsComponent,
} from "../../components/organism";
import { GlobalContext } from "../../globalContext";
import { Button, Passive } from "../../components/atoms";
import { getChampionImg } from "../../api";
import { ShopIcon } from "../../assets/iconSvg";
import { useTranslation } from "react-i18next";

export interface IconProps {
  champSelected: Champion;
  champStats: ChampionStats;
  champPerLvl: PerLvlStats;
  lvl: number;
}

const DataView = ({ champSelected, champStats, champPerLvl }: IconProps): ReactElement => {
  const { itemHover, version } = useContext(GlobalContext);
  const { t } = useTranslation();

  const [screenWidthSize, setScreenSize] = useState(window.innerWidth);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const img = useMemo(() => {
    return getChampionImg(champSelected.image.full, version);
  }, [version, champSelected]);

  const pcPoint = useMemo(() => {
    return { 1024: screenWidthSize > 1024, 1280: screenWidthSize > 1280 };
  }, [screenWidthSize]);

  return (
    <section className="flex flex-col gap-3 pb-6 ">
      {itemHover && pcPoint[1024] && (
        <ItemTooltip item={itemHover.item} position={itemHover.position} pcPoint={pcPoint} />
      )}
      {pcPoint[1024] && (
        <div className="w-[20%]">
          <Inventory />
        </div>
      )}
      <div className="hidden lg:flex flex-col lg:gap-4">
        <ChampionLoadingImg champSelected={champSelected} />
        <InventoryChampion />
      </div>
      <div className="lg:w-[40%] w-full flex lg:flex-col gap-2 lg:gap-6 p-2 sticky top-[55px] lg:relative bg-blue-7 z-50 border-b-2 border-or-3 lg:border-b-0">
        <img src={img} alt={`${img}-image`} className="h-24 lg:hidden" />
        <ChampionHud champSelected={champSelected} champStats={champStats} champPerLvl={champPerLvl} />
      </div>
      {!pcPoint[1024] && (
        <Button text={t("shop")} icon={<ShopIcon />} isActive={shopOpen} onClick={() => setShopOpen((old) => !old)} />
      )}
      {shopOpen && !pcPoint[1024] && (
        <div className="flex w-screen gap-3 px-3">
          <div className="w-[40%]">
            <Inventory />
          </div>
          <div className="w-[60%] flex flex-col items-center gap-3">
            <InventoryChampion />
            {itemHover && <ItemTooltip item={itemHover.item} position={itemHover.position} pcPoint={pcPoint} />}
          </div>
        </div>
      )}
      <ChampionStatsComponent champStats={champStats} pcPoint={pcPoint} />
      <div className="w-[80%] h-1 mx-10 my-4 bg-or-3"></div>
      <Passive passive={champSelected.passive} />
      <ChampionSpell champSelected={champSelected} />
    </section>
  );
};

export default DataView;
