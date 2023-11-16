import { ReactElement, useContext } from "react";
import { Item } from "../../../interface";
import { getItemImg } from "../../../api";
import ReactHtmlParser from "react-html-parser";
import { GlobalContext } from "../../../globalContext";

export interface Props {
  item: Item;
  pcPoint: { 1024: boolean; 1280: boolean };
}

const ItemDetail = ({ item, pcPoint }: Props): ReactElement => {
  const { version, setItemFocus, setItemIsActive, itemIsActive } = useContext(GlobalContext);

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
    <div className="border-2 border-or-4 p-2 relative">
      {pcPoint[1024] && itemIsActive && (
        <p
          className="absolute top-2 right-3 text-2xl text-or-3 hover:scale-110 hover:text-or-2 transition-all uppercase font-bold cursor-pointer transform rotate-45"
          onClick={() => {
            setItemFocus(undefined);
            setItemIsActive(undefined);
          }}
        >
          +
        </p>
      )}
      <div className="flex items-center gap-4 mb-2">
        <img src={getItemImg(item.image.full, version)} alt={`${item.image.full}-image`} className="h-8 lg:h-10" />
        <div>
          <h2>{item.name}</h2>
          <p className="text-or-3">{item.gold.total} Gold</p>
        </div>
      </div>
      <div className="max-h-40 lg:max-h-52 overflow-scroll lg:overflow-auto">
        {ReactHtmlParser(formatHtml(item.description))}
      </div>
    </div>
  );
};

export default ItemDetail;
