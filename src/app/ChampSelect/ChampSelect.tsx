"use client";
import { ReactElement, useContext, useMemo, useState } from "react";
import { Role, Tag } from "../../interface";
import { useChampion, useInitChampions } from "../../hook";
import { ChampionCard, FilterArea } from "../../components/molecules";
import { useGlobalContext } from "@context/globalContext";

import { useRouter } from "next/navigation";

export interface IconProps {}

const ChampSelect = ({}: IconProps): ReactElement => {
  const { language, version, setLevel } = useGlobalContext();

  const [roleSelected, setRoleSelected] = useState<Role>();

  const [nameSearch, setNameSearch] = useState<string>();

  const { data: champions, isLoading } = useInitChampions(language, version);
  const { mutate: getChampionSelect } = useChampion();

  const router = useRouter();

  function champDetectRole(tags: Tag[]) {
    if (Boolean(tags.find((item) => item === Tag.Tank))) {
      return Role.Top;
    } else if (
      Boolean(tags.find((item) => item === Tag.Mage || item === Tag.Assassin))
    ) {
      return Role.Middle;
    } else if (Boolean(tags.find((item) => item === Tag.Marksman))) {
      return Role.Adc;
    } else if (Boolean(tags.find((item) => item === Tag.Support))) {
      return Role.Support;
    } else {
      return Role.Jungle;
    }
  }

  const championsArray = useMemo(() => {
    if (champions?.data && !isLoading) {
      let array = Object.entries(champions?.data).map((item) => item[1]);
      if (roleSelected) {
        array = array.filter(
          (item) => champDetectRole(item.tags) === roleSelected
        );
      }
      if (nameSearch) {
        array = array.filter((item) =>
          item.name.toLowerCase().includes(nameSearch.toLowerCase())
        );
      }
      return array;
    }
  }, [champions, isLoading, nameSearch, roleSelected]);

  return (
    <section className="lg:px-2 w-full">
      <FilterArea
        roleSelect={roleSelected}
        setRoleSelected={(role) => setRoleSelected(role)}
        nameSearch={(name) => setNameSearch(name)}
      />
      <div className="flex flex-wrap content-start gap-3 m-2 mb-0 pt-1 pl-1 overflow-scroll navFilterHeight">
        {!isLoading &&
          championsArray?.map((item, key) => (
            <ChampionCard
              key={"champ-" + key}
              champion={item}
              onClick={(id) => {
                setLevel(1); //reset lvl when champion change
                getChampionSelect(
                  { lang: language, version: version, id: id },
                  { onSuccess: () => router.push("/DataView") }
                );
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default ChampSelect;
