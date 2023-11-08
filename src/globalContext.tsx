import { ReactElement, createContext, useState } from "react";
import { Champion, ChampionStats, Inventory, Item, PerLvlStats } from "./interface";

interface GlobalContextType {
  language: string;
  setLanguage: (language: string) => void;
  router: "data" | "champSelect";
  setRouter: (router: "data" | "champSelect") => void;
  region: string;
  setRegion: (region: string) => void;
  version: string;
  setVersion: (version: string) => void;
  champSelected: Champion | undefined;
  setChampSelected: (champSelected: Champion) => void;
  champStats: ChampionStats | undefined;
  setChampStats: (champStats: ChampionStats) => void;
  champPerLvl: PerLvlStats | undefined;
  setChampPerLvl: (champPerLvl: PerLvlStats) => void;
  level: number;
  setLevel: (level: number) => void;
  itemHover?: { position: { x: number; y: number }; item: Item };
  setItemHover: (item?: { position: { x: number; y: number }; item: Item }) => void;
  champInventory: Inventory;
  setChampInventory: (inventory: Inventory) => void;
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
  const defaultInventory: Inventory = {
    item1: undefined,
    item2: undefined,
    item3: undefined,
    item4: undefined,
    item5: undefined,
    item6: undefined,
  };

  const [router, setRouter] = useState<"data" | "champSelect">("champSelect");
  const [language, setLanguage] = useState("fr_FR");
  const [region, setRegion] = useState("euw");
  const [version, setVersion] = useState("");
  const [champSelected, setChampSelected] = useState<Champion>();
  const [champStats, setChampStats] = useState<ChampionStats>();
  const [champPerLvl, setChampPerLvl] = useState<PerLvlStats>();
  const [level, setLevel] = useState(1);
  const [itemHover, setItemHover] = useState<{ position: { x: number; y: number }; item: Item }>();
  const [champInventory, setChampInventory] = useState<Inventory>(defaultInventory);

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        router,
        setRouter,
        region,
        setRegion,
        version,
        setVersion,
        champSelected,
        setChampSelected,
        champStats,
        setChampStats,
        champPerLvl,
        setChampPerLvl,
        level,
        setLevel,
        itemHover,
        setItemHover,
        champInventory,
        setChampInventory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
