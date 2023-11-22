"use client";

import { ReactElement, createContext, useState, useContext } from "react";
import {
  Champion,
  ChampionStats,
  Inventory,
  Item,
  PerLvlStats,
} from "@interface/index";

interface GlobalContextType {
  language: string;
  setLanguage: (language: string) => void;
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
  itemFocus?: Item | undefined;
  setItemFocus: (item: Item | undefined) => void;
  itemIsActive: Item | undefined;
  setItemIsActive: (item: Item | undefined) => void;
  champInventory: Inventory;
  setChampInventory: (inventory: Inventory) => void;
  settingOpen: boolean;
  setSettingOpen: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const defaultInventory: Inventory = {
    item1: undefined,
    item2: undefined,
    item3: undefined,
    item4: undefined,
    item5: undefined,
    item6: undefined,
  };

  const [language, setLanguage] = useState("fr_FR");
  const [region, setRegion] = useState("euw");
  const [version, setVersion] = useState("");
  const [champSelected, setChampSelected] = useState<Champion>();
  const [champStats, setChampStats] = useState<ChampionStats>();
  const [champPerLvl, setChampPerLvl] = useState<PerLvlStats>();
  const [level, setLevel] = useState(1);
  const [itemFocus, setItemFocus] = useState<Item>();
  const [itemIsActive, setItemIsActive] = useState<Item>();
  const [champInventory, setChampInventory] =
    useState<Inventory>(defaultInventory);
  const [settingOpen, setSettingOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
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
        itemFocus,
        setItemFocus,
        itemIsActive,
        setItemIsActive,
        champInventory,
        setChampInventory,
        settingOpen,
        setSettingOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
