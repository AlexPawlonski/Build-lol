"use client";
import { useMutation, useQuery } from "react-query";
import {
  getAllChampionData,
  getAllItemsData,
  getChampionData,
  getChampionLoading,
  getChampionPassiveImg,
  getChampionSpellImg,
  getImgChamp,
  getImgItem,
  getLanguageCode,
  getRegion,
  getVersion,
} from "../api";

import { Champion, ChampionStats, PerLvlStats } from "../interface";
import { useGlobalContext } from "@src/context/globalContext";

export function useVersion() {
  return useQuery(["game-versions"], () => getVersion());
}

export function useLangueCode() {
  return useQuery(["game-langueCode"], () => getLanguageCode());
}

export function useInitChampions(lang: string, version: string) {
  return useQuery(
    ["game-ChampionList", lang, version],
    () => getAllChampionData({ lang, version }),
    {
      enabled: Boolean(lang && version),
    }
  );
}

export function useInitItems(lang: string, version: string) {
  return useQuery(
    ["game-ItemList", lang, version],
    () => getAllItemsData({ lang, version }),
    {
      enabled: Boolean(lang && version),
    }
  );
}

export function useInitRegion(region: string) {
  return useQuery(["game-Region", region], () => getRegion(region), {
    enabled: Boolean(region),
  });
}

export function useImgChamp(version: string, id: string) {
  return useQuery([`champ-img-${id}`, version], () => getImgChamp(id, version), {
    enabled: Boolean(version),
  });
}

export function useImgItem(version: string, id: string) {
  return useQuery([`item-img-${id}`, version], () => getImgItem(id, version), {
    enabled: Boolean(id),
  });
}

export function useImgSpell(version: string, id: string) {
  return useQuery(
    [`spell-img-${id}`, version],
    () => getChampionSpellImg(id, version),
    {
      enabled: Boolean(version),
    }
  );
}
export function useImgPassive(version: string, id: string) {
  return useQuery(
    [`passive-img-${id}`, version],
    () => getChampionPassiveImg(id, version),
    {
      enabled: Boolean(version),
    }
  );
}

export function useImgLoading(id: string) {
  return useQuery([`loading-img-${id}`], () => getChampionLoading(id), {
    enabled: Boolean(id),
  });
}

export function useChampion() {
  const { setChampSelected, setChampStats, setChampPerLvl } =
    useGlobalContext();
  return useMutation({
    mutationFn: (data: { lang: string; version: string; id: string }) =>
      getChampionData(data),
    onSuccess: (value) => {
      const championSelected: Champion = Object.entries(value.data)[0][1];
      const defaultChampStats: ChampionStats = {
        armor: championSelected.stats.armor,
        attackdamage: championSelected.stats.attackdamage,
        attackrange: championSelected.stats.attackrange,
        attackspeed: championSelected.stats.attackspeed,
        crit: championSelected.stats.crit,
        hp: championSelected.stats.hp,
        hpregen: championSelected.stats.hpregen,
        movespeed: championSelected.stats.movespeed,
        mp: championSelected.stats.hp,
        mpregen: championSelected.stats.mpregen,
        spellblock: championSelected.stats.spellblock,
      };

      const defaultChampPerLvl: PerLvlStats = {
        hpperlevel: championSelected.stats.hpperlevel,
        mpperlevel: championSelected.stats.mpperlevel,
        armorperlevel: championSelected.stats.armorperlevel,
        spellblockperlevel: championSelected.stats.spellblockperlevel,
        hpregenperlevel: championSelected.stats.hpregenperlevel,
        mpregenperlevel: championSelected.stats.mpregenperlevel,
        critperlevel: championSelected.stats.critperlevel,
        attackdamageperlevel: championSelected.stats.attackdamageperlevel,
        attackspeedperlevel: championSelected.stats.attackspeedperlevel,
      };
      setChampSelected(championSelected);
      setChampStats(defaultChampStats);
      setChampPerLvl(defaultChampPerLvl);
    },
  });
}

export function useRegion() {
  return useMutation({
    mutationFn: (region: string) => getRegion(region),
  });
}
