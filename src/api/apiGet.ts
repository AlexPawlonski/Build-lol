import { ChampionsData, ItemData, LeagueOfLegendsCDN } from "../interface";
import { apiLol } from "./axios";

export async function getVersion(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/api/versions.json",
  });
  return data;
}
export async function getRegion(): Promise<LeagueOfLegendsCDN> {
  const { data } = await apiLol({
    method: "GET",
    url: "/realms/euw.json",
  });
  return data;
}
export async function getLanguageCode(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/cdn/languages.json",
  });
  return data;
}

export async function getAllChampionData(lang: string, version: string): Promise<ChampionsData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/data/${lang}/champion.json`,
  });
  return data;
}
export async function getAllObjectData(lang: string, version: string): Promise<ItemData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/data/${lang}/item.json`,
  });
  return data;
}

// export async function getChampionSplash( id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
// }
// export async function getItemIcon(id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/1001.png
// }
