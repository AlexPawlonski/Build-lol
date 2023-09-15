import { useMutation, useQuery } from "react-query";
import { getAllChampionData, getAllObjectData, getLanguageCode, getRegion, getVersion } from "../api";

export function useVersion() {
  return useQuery(["game-versions"], () => getVersion());
}

export function useLangueCode() {
  return useQuery(["game-langueCode"], () => getLanguageCode());
}

export function useInitChampion(lang: string, version: string) {
  return useQuery(["game-ChampionList", lang, version], () => getAllChampionData({ lang, version }));
}

export function useInitItems(lang: string, version: string) {
  return useQuery(["game-ItemList", lang, version], () => getAllObjectData({ lang, version }));
}

export function useInitRegion(region: string) {
  return useQuery(["game-Region", region], () => getRegion(region));
}

export function useChampion() {
  return useMutation({
    mutationFn: (data: { lang: string; version: string }) => getAllChampionData(data),
    onSuccess: (value) => console.log(value),
  });
}

export function useItems() {
  return useMutation({
    mutationFn: (data: { lang: string; version: string }) => getAllObjectData(data),
    onSuccess: (value) => console.log(value),
  });
}

export function useRegion() {
  return useMutation({
    mutationFn: (region: string) => getRegion(region),
    onSuccess: (value) => console.log(value),
  });
}
