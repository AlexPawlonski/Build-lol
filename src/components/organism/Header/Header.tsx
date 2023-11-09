import { ReactElement, useContext, useEffect } from "react";
import { Select } from "../../atoms";
import { useChampion, useInitRegion, useLangueCode, useRegion, useVersion } from "../../../hook";
import { filterLangueListe, filterVersion, formatForTraduction, selectFormat, usToEN } from "../../../utils";
import { GlobalContext } from "../../../globalContext";
import logo from "../../../assets/Build-lol-logo.webp";
import { useTranslation } from "react-i18next";
import { Nav } from "..";
export interface Props {}

const Header = ({}: Props): ReactElement => {
  const { language, setLanguage, region, setRegion, version, setVersion, champSelected } = useContext(GlobalContext);
  const { i18n } = useTranslation();

  const { data: languageCode } = useLangueCode();
  const { data: regions } = useInitRegion(region);
  const { data: versions } = useVersion();

  const { mutate: updateReagion } = useRegion();
  const { mutate: getChampionSelect } = useChampion();

  useEffect(() => {
    if (regions?.css) {
      setVersion(regions.css);
    }
    if (regions?.l) {
      setLanguage(usToEN(regions?.l));
    }
  }, [regions]);

  useEffect(() => {
    if (champSelected?.id) {
      getChampionSelect({ lang: language, version: version, id: champSelected.id });
    }
  }, [language, version]);

  return (
    <header className="w-full h-14 border-b-or-3 border-b-2 flex justify-between px-4 z-50 relative">
      <div className="flex items-center gap-4">
        <img className="justify-self-start h-full py-1" src={logo} alt={`${logo}-alt`} />
        <h1 className="font-BeaufortforLOL text-2xl uppercase text-or-3">
          <a href="https://www.linkedin.com/in/alex-pawlonski/" target="_blank">
            Build-lol.com
          </a>
        </h1>
        <Nav />
      </div>
      <div className="flex gap-x-2 p-2">
        {languageCode && (
          <Select
            options={formatForTraduction(
              "lang",
              filterLangueListe(languageCode, ["fr_FR", "en_GB", "es_ES"], language),
            )}
            type="lang"
            onChange={(value) => {
              setLanguage(value);
              i18n.changeLanguage(value);
            }}
            defaultValue={language}
          />
        )}
        {versions && (
          <Select
            options={selectFormat(filterVersion(versions))}
            onChange={(value) => setVersion(value)}
            defaultValue={version}
          />
        )}
        <Select
          defaultValue={region}
          options={formatForTraduction("region", filterLangueListe(["euw", "na"], ["euw", "na"], region))}
          type="region"
          onChange={(value) =>
            updateReagion(value, {
              onSuccess: (data) => {
                setRegion(value);
                i18n.changeLanguage(data.l);
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
