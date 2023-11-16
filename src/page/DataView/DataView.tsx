import { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { Champion, ChampionStats, PerLvlStats } from "../../interface";
import { ChampionLoadingImg, ItemDetail } from "../../components/molecules";
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
  const { itemFocus, version } = useContext(GlobalContext);
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
    <section className="flex flex-col lg:flex-row gap-3 lg:gap-6 pb-6 lg:p-6">
      {pcPoint[1024] && (
        <div className="w-[20%]">
          <Inventory pcPoint={pcPoint} />
        </div>
      )}
      <div className="hidden lg:flex lg:w-[10%] flex-col lg:gap-4">
        <ChampionLoadingImg champSelected={champSelected} />
        <InventoryChampion />
        <Passive passive={champSelected.passive} />
      </div>
      <div className="lg:w-[40%] w-full flex lg:flex-col gap-2 lg:gap-6 p-2 lg:p-0 sticky top-[55px] lg:static bg-blue-7 z-50 border-b-2 border-or-3 lg:border-b-0">
        <img src={img} alt={`${img}-image`} className="h-24 lg:hidden" />
        <ChampionHud champSelected={champSelected} champStats={champStats} champPerLvl={champPerLvl} />
        {pcPoint[1024] && <ChampionSpell champSelected={champSelected} />}
      </div>
      {!pcPoint[1024] && (
        <Button text={t("shop")} icon={<ShopIcon />} isActive={shopOpen} onClick={() => setShopOpen((old) => !old)} />
      )}
      {shopOpen && !pcPoint[1024] && (
        <div className="flex w-screen gap-3 px-3">
          <div className="w-[40%]">
            <Inventory pcPoint={pcPoint} />
          </div>
          <div className="w-[60%] flex flex-col items-center gap-3">
            <InventoryChampion />
            {itemFocus && <ItemDetail item={itemFocus} pcPoint={pcPoint} />}
          </div>
        </div>
      )}
      <div className="lg:w-[30%]">
        <ChampionStatsComponent champStats={champStats} pcPoint={pcPoint} />
      </div>
      {!pcPoint[1024] && (
        <>
          <div className="w-[80%] h-1 mx-10 my-4 bg-or-3"></div>
          <Passive passive={champSelected.passive} />
          <ChampionSpell champSelected={champSelected} />
        </>
      )}
    </section>
  );
};

export default DataView;
