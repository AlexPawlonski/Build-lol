import { useQuery } from "react-query";
import { getAllChampionData, getAllObjectData, getLanguageCode, getRegion, getVersion } from "../api";

export function useVersion() {
  return useQuery(["game-versions"], () => getVersion());
}
export function useRegion() {
  return useQuery(["game-Region"], () => getRegion());
}
export function useLangueCode() {
  return useQuery(["game-langueCode"], () => getLanguageCode());
}
export function useChampion(lang: string, version: string) {
  return useQuery(["game-ChampionList", lang, version], () => getAllChampionData(lang, version));
}
export function useItems(lang: string, version: string) {
  return useQuery(["game-ItemList", lang, version], () => getAllObjectData(lang, version));
}
