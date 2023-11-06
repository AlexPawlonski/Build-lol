import { ReactElement, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../../globalContext";
import { Role, Tag } from "../../interface";
import { useChampion, useInitChampions } from "../../hook";
import { ChampionCard, FilterArea } from "../../components/molecules";

export interface IconProps {}

const ChampSelect = ({}: IconProps): ReactElement => {
  const { language, version } = useContext(GlobalContext);

  const [roleSelected, setRoleSelected] = useState<Role>();

  const [nameSearch, setNameSearch] = useState<string>();

  const { data: champions, isLoading } = useInitChampions(language, version);
  const { mutate: getChampionSelect } = useChampion();

  function champDetectRole(tags: Tag[]) {
    if (Boolean(tags.find((item) => item === Tag.Tank))) {
      return Role.Top;
    } else if (Boolean(tags.find((item) => item === Tag.Mage || item === Tag.Assassin))) {
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
        array = array.filter((item) => champDetectRole(item.tags) === roleSelected);
      }
      if (nameSearch) {
        array = array.filter((item) => item.name.toLowerCase().includes(nameSearch.toLowerCase()));
      }
      return array;
    }
  }, [champions, isLoading, nameSearch, roleSelected]);

  return (
    <section className="w-full h-full p-6">
      <FilterArea
        roleSelect={roleSelected}
        setRoleSelected={(role) => setRoleSelected(role)}
        nameSearch={(name) => setNameSearch(name)}
      />
      <div className="flex flex-wrap overflow-scroll max-h-full pt-1 mt-4" style={{ height: "calc(100% - 150px)" }}>
        {!isLoading &&
          championsArray?.map((item, key) => (
            <ChampionCard
              key={"champ-" + key}
              champion={item}
              onClick={(id) => getChampionSelect({ lang: language, version: version, id: id })}
            />
          ))}
      </div>
    </section>
  );
};

export default ChampSelect;

