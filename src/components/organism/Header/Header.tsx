import { ReactElement, useContext, useEffect, useState } from "react";
import { Select } from "../../atoms";
import { useChampion, useInitRegion, useLangueCode, useRegion, useVersion } from "../../../hook";
import { filterLangueListe, selectFormat } from "../../../utils";
import { GlobalContext } from "../../../globalContext";
import logo from "../../../assets/League of Legends.svg";
export interface Props {}

const Header = ({}: Props): ReactElement => {
  const [regionCode, setRegionCode] = useState("euw");

  const { language, setLanguage, version, setVersion, champSelected } = useContext(GlobalContext);

  const { data: languageCode } = useLangueCode();
  const { data: region } = useInitRegion(regionCode);
  const { data: versions } = useVersion();

  const { mutate: updateReagion } = useRegion();
  const { mutate: getChampionSelect } = useChampion();

  useEffect(() => {
    if (region?.css) {
      setVersion(region.css);
    }
    if (region?.l) {
      setLanguage(region?.l);
    }
  }, [region]);

  useEffect(() => {
    if (champSelected?.id) {
      getChampionSelect({ lang: language, version: version, id: champSelected.id });
    }
  }, [language, version]);

  return (
    <header className="w-full h-14 border-b-or-3 border-b-2 flex justify-between">
      <img className="justify-self-start" src={logo} alt={`${logo}-alt`} />
      <div className="flex gap-x-2 p-2">
        {languageCode && (
          <Select
            options={selectFormat(filterLangueListe(languageCode,["fr_FR", "en_US","en_GB", "es_ES" ]))}
            onChange={(value) => setLanguage(value)}
            defaultValue={language}
          />
        )}
        {versions && (
          <Select options={selectFormat(versions)} onChange={(value) => setVersion(value)} defaultValue={version} />
        )}
        <Select
          defaultValue={regionCode}
          options={selectFormat(["euw", "na"])}
          onChange={(value) =>
            updateReagion(value, {
              onSuccess: (data) => {
                setRegionCode(value);
                setLanguage(data.lg);
                setVersion(data.css);
              },
            })
          }
        />
      </div>
    </header>
  );
};

export default Header;

