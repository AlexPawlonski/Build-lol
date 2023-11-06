import { ReactElement, useContext } from "react";
import { Item } from "../../../interface";
import { getItemImg } from "../../../api";
import ReactHtmlParser from "react-html-parser";
import { GlobalContext } from "../../../globalContext";
import { classNames } from "../../../utils";

export interface Props {
  item: Item;
  position: { x: number; y: number };
}

const ItemTooltip = ({ item }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  function formatHtml(text: string) {
    const verif = [
      ["<mainText", '<div class="maintext"'],
      ["<active", '<div class="active"'],
      ["<stats", '<div class="stats"'],
      ["<status", '<div class="status"'],
      ["<attention", '<div class="attention"'],
      ["<scaleArmor", '<div class="scalearmor"'],
      ["<scaleMR", '<div class="scaleMR"'],
      ["<scaleAP", '<div class="scaleAP"'],
      ["<scaleAD", '<div class="scaleAD"'],
      ["<passive", '<div class="passive"'],
      ["<rarityMythic", '<div class="raritymythic"'],
      ["<rarityLegendary", '<div class="raritylegendary"'],
      ["<shield", '<div class="shield"'],
      ["<scaleHealth", '<div class="scalehealth"'],
      ["<scaleMana", '<div class="scaleMana"'],
      ["<speed", '<div class="speed"'],
      ["<keywordMajor", '<div class="keywordmajor"'],
      ["<keywordStealth", '<div class="keywordstealth"'],
      ["<unique", '<div class="unique"'],
      ["<trueDamage", '<div class="truedamage"'],
      ["<goldGain", '<div class="goldgain"'],
      ["<attackSpeed", '<div class="attackspeed"'],
      ["<rarityGeneric", '<div class="raritygeneric"'],
      ["<rules", '<div class="rules"'],
      ["<healing", '<div class="healing"'],
      ["<flavortext", '<div class="flavortext"'],
      ["<magicDamage", '<div class="magicdamage"'],
      ["<OnHit", '<div class="onhit"'],
      ["<scaleLethality", '<div class="scaleLethality"'],
      ["<lifeSteal", '<div class="lifesteal"'],
    ];

    let updatedString = text;
    
    verif.forEach(([search, replace]) => {
      updatedString = updatedString.replace(new RegExp(search, "g"), replace);
    });
    return updatedString;
  }

  return (
    <div className={classNames("absolute bg-blue-6 border-2 border-or-4 z-50 w-[400px] p-3 top-10 left-[15%]")}>
      <div className="flex items-center justify-between mb-2">
        <img src={getItemImg(item.image.full, version)} alt={`${item.image.full}-image`} className="h-10" />
        <h2>{item.name}</h2>
        <p className="text-or-3">{item.gold.total} Gold</p>
      </div>
      {ReactHtmlParser(formatHtml(item.description))}
    </div>
  );
};

export default ItemTooltip;

