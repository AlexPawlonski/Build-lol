"use client";
import { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { ShopIcon } from "@public/iconSvg";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "@context/globalContext";

import Image from "next/image";

import { useRouter } from "next/navigation";
import {
  ChampionHud,
  ChampionSpell,
  ChampionStatsComponent,
  Inventory,
  InventoryChampion,
} from "@src/components/organism";
import { ChampionButton, Passive, Button } from "@src/components/atoms";
import { ChampionLoadingImg, ItemDetail } from "@src/components/molecules";

const DataView = (): ReactElement => {
  const { itemFocus, champSelected, champStats, champPerLvl } =
    useGlobalContext();
  const { t } = useTranslation();

  const router = useRouter();

  const [screenWidthSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const pcPoint = useMemo(() => {
    return { 1024: screenWidthSize > 1024, 1280: screenWidthSize > 1280 };
  }, [screenWidthSize]);

  setTimeout(() => {
    if (!champSelected || !champStats || !champPerLvl) {
      router.push("/ChampSelect");
    }
  }, 1000);

  if (!champSelected || !champStats || !champPerLvl) {
    return (
      <div className="w-full flex items-center justify-center">
        <p className="text-blue-5 opacity-50 text-2xl">Nothing !</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row gap-3 lg:gap-6 pb-6 lg:p-6">
      {pcPoint[1024] && (
        <div className="w-[20%]">
          <Inventory pcPoint={pcPoint} />
        </div>
      )}
      <div className="hidden lg:flex lg:w-[10%] flex-col lg:gap-4">
        <ChampionLoadingImg id={champSelected.id} />
        <InventoryChampion />
        <Passive passive={champSelected.passive} />
      </div>
      <div className="lg:w-[40%] w-full flex lg:flex-col gap-2 lg:gap-6 p-2 lg:p-0 sticky top-[55px] lg:static bg-blue-7 z-50 border-b-2 border-or-3 lg:border-b-0">
        <div className="lg:hidden w-24">
          <ChampionButton
            img={champSelected.image.full}
            id={champSelected.id}
            disable={true}
          />
        </div>

        <ChampionHud
          champSelected={champSelected}
          champStats={champStats}
          champPerLvl={champPerLvl}
        />
        {pcPoint[1024] && <ChampionSpell champSelected={champSelected} />}
      </div>
      {!pcPoint[1024] && (
        <Button
          text={t("shop")}
          icon={<ShopIcon />}
          isActive={shopOpen}
          onClick={() => setShopOpen((old) => !old)}
        />
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
