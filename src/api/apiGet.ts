import { ChampionsData, ItemData, LeagueOfLegendsCDN } from "../interface";
import { VITE_LOL_URL, apiLol } from "./axios";

export async function getVersion(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/api/versions.json",
  });
  return data;
}
export async function getRegion(region: string): Promise<LeagueOfLegendsCDN> {
  const { data } = await apiLol({
    method: "GET",
    url: `/realms/${region}.json`,
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

export async function getAllChampionData(param: { lang: string; version: string }): Promise<ChampionsData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/champion.json`,
  });
  return data;
}
export function getChampionImg(id: string, version: string): string {
  return `${VITE_LOL_URL}/cdn/${version}/img/champion/${id}.png`;
}

export async function getAllObjectData(param: { lang: string; version: string }): Promise<ItemData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/item.json`,
  });
  return data;
}

// export async function getChampionSplash( id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
// }

// export async function getItemIcon(id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/1001.png
// }
