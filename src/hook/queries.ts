import { useMutation, useQuery } from "react-query";
import { getAllChampionData, getAllItemsData, getChampionData, getLanguageCode, getRegion, getVersion } from "../api";
import { useContext } from "react";
import { GlobalContext } from "../globalContext";

export function useVersion() {
  return useQuery(["game-versions"], () => getVersion());
}

export function useLangueCode() {
  return useQuery(["game-langueCode"], () => getLanguageCode());
}

export function useInitChampions(lang: string, version: string) {
  return useQuery(["game-ChampionList", lang, version], () => getAllChampionData({ lang, version }), {
    enabled: Boolean(lang && version),
  });
}

export function useInitItems(lang: string, version: string) {
  return useQuery(["game-ItemList", lang, version], () => getAllItemsData({ lang, version }), {
    enabled: Boolean(lang && version),
  });
}

export function useInitRegion(region: string) {
  return useQuery(["game-Region", region], () => getRegion(region), {
    enabled: Boolean(region),
  });
}

export function useChampion() {
  const { setChampSelected, setRouter } = useContext(GlobalContext);
  return useMutation({
    mutationFn: (data: { lang: string; version: string; id: string }) => getChampionData(data),
    onSuccess: (value) => {
      setChampSelected(Object.entries(value.data)[0][1]);
      setRouter("data");
    },
  });
}

export function useRegion() {
  return useMutation({
    mutationFn: (region: string) => getRegion(region),
    onSuccess: (value) => console.log(value),
  });
}
