import { ReactElement, useContext, useState } from "react";
import { Spell } from "../../../interface";
import { getChampionSpellImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";
import { useTranslation } from "react-i18next";
import { ChartIcon, Detail, HelpIcon } from "../../../assets/iconSvg";
import { ChartLine } from "..";
import { classNames } from "../../../utils";
export interface Props {
  spell: Spell;
  keyId: number;
}

const SpellComponent = ({ spell, keyId }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  const { t } = useTranslation();

  const [router, setRouter] = useState<"help" | "chart" | "default">("default");

  function keyBinding(key: number) {
    switch (key) {
      case 0:
        return "q";
      case 1:
        return "z";
      case 2:
        return "e";
      case 3:
        return "r";
    }
  }

  return (
    <div className="p-4 border-2 border-or-3 bg-blue-7 relative">
      <div className="absolute right-0 top-0 flex items-center gap-2 p-4">
        <Detail
          className={classNames(
            router === "default" ? "fill-blue-2" : "fill-or-3",
            "w-7 hover:scale-105 transition-all hover:fill-or-2 cursor-pointer",
          )}
          onClick={() => setRouter("default")}
        />
        <HelpIcon
          className={classNames(
            router === "help" ? "fill-blue-2" : "fill-or-3",
            "w-7 hover:scale-105 transition-all hover:fill-or-2 cursor-pointer",
          )}
          onClick={() => setRouter("help")}
        />
        <ChartIcon
          className={classNames(
            router === "chart" ? "fill-blue-2" : "fill-or-3",
            "w-6  hover:scale-105 transition-all hover:fill-or-2 cursor-pointer",
          )}
          onClick={() => setRouter("chart")}
        />
      </div>
      <div className="grid grid-cols-9 gap-4 mb-4 items-center">
        <img
          src={getChampionSpellImg(spell.image.full, version)}
          alt={`spell-${spell.id}-img`}
          className="border-2 border-or-2 col-span-1"
        />
        <div className="text-or-3 col-span-3">
          <h3 className="text-2xl">{spell.name}</h3>
          <h4 className="flex gap-2 items-center">
            <p>{t("spell")}</p>
            <p className="text-xl uppercase text-or-2">{keyBinding(keyId)}</p>
          </h4>
        </div>
      </div>
      <div>
        {router === "default" && <p>{spell.description}</p>}
        {router === "help" && <p>{spell.tooltip}</p>}
        {router === "chart" && (
          <div className="flex items-center justify-start">
            <ChartLine dataState={spell.cooldown} title={"Cooldow"} unity="S" />
            <ChartLine dataState={spell.cost} title={"Coste"} unity="Mana" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpellComponent;
