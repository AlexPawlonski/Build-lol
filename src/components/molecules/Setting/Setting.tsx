"use client";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  useChampion,
  useInitRegion,
  useLangueCode,
  useRegion,
  useVersion,
} from "../../../hook";

import {
  classNames,
  filterLangueListe,
  filterVersion,
  formatForTraduction,
  selectFormat,
  usToEN,
} from "../../../utils";
import { Select } from "../../atoms";
import { SettingIcon } from "@public/iconSvg";
import { useGlobalContext } from "@src/context/globalContext";

export interface Props {}

const Setting = ({}: Props): ReactElement => {
  const {
    language,
    setLanguage,
    region,
    setRegion,
    version,
    setVersion,
    champSelected,
    settingOpen,
    setSettingOpen,
  } = useGlobalContext();

  const { i18n } = useTranslation();

  const { data: languageCode } = useLangueCode();
  const { data: regions } = useInitRegion(region);
  const { data: versions } = useVersion();

  const { mutate: getChampionSelect } = useChampion();
  const { mutate: updateReagion } = useRegion();

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
      getChampionSelect({
        lang: language,
        version: version,
        id: champSelected.id,
      });
    }
  }, [language, version]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        target.classList[0] !== "handleIgnore"
      ) {
        settingOpen && setSettingOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [settingOpen]);

  return (
    <>
      <div
        className="w-[26px] h-[26px] relative lg:hidden "
        onClick={() => setSettingOpen(!settingOpen)}
      >
        <div className="handleIgnore w-full h-full absolute z-50 top-0 right-0 cursor-pointer"></div>
        <SettingIcon
          className={classNames(settingOpen ? "fill-or-2" : "fill-or-3 ")}
        />
      </div>

      <div
        className={classNames(
          settingOpen
            ? "absolute top-14 right-0 flex w-full lg:w-auto navHeight"
            : "hidden lg:flex"
        )}
      >
        <div className="bg-blue-7 opacity-50 w-full lg:hidden"></div>
        <div
          ref={ref}
          className="bg-blue-7 min-w-[55%] border-l-2 lg:border-none border-or-3 flex flex-col lg:flex-row lg:gap-6 py-6 lg:py-0"
        >
          {languageCode && (
            <Select
              options={formatForTraduction(
                "lang",
                filterLangueListe(
                  languageCode,
                  ["fr_FR", "en_GB", "es_ES"],
                  language
                )
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
            options={formatForTraduction(
              "region",
              filterLangueListe(["euw", "na"], ["euw", "na"], region)
            )}
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
      </div>
    </>
  );
};

export default Setting;
