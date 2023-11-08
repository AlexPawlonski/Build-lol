import { ReactElement, useContext, useState } from "react";
import { Spell } from "../../../interface";
import { getChampionSpellImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";
import { useTranslation } from "react-i18next";
import { HelpIcon } from "../../../assets/iconSvg";

export interface Props {
  spell: Spell;
  keyId: number;
}

const SpellComponent = ({ spell, keyId }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  const { t } = useTranslation();

  const [help, setHelp] = useState(false);

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
      <HelpIcon
        className="w-7 m-2 fill-or-3 absolute right-0 top-0 hover:scale-105 transition-all hover:fill-or-2 cursor-pointer"
        onClick={() => setHelp((old) => !old)}
      />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={getChampionSpellImg(spell.image.full, version)}
          alt={`spell-${spell.id}-img`}
          className="border-2 border-or-2"
        />
        <div className="text-or-3">
          <h3 className="text-2xl">{spell.name}</h3>
          <h4 className="flex gap-2 items-center">
            <p>{t("spell")}</p>
            <p className="text-xl uppercase text-or-2">{keyBinding(keyId)}</p>
          </h4>
        </div>
        <div className="flex items-center text-grey-3 gap-2">
          <p>[</p>
          {spell.range.map((item) => (
            <p>{item}</p>
          ))}
          <p>]</p>
        </div>
        <div className="flex items-center text-grey-3 gap-2">
          <p>[</p>
          {spell.cooldown.map((item) => (
            <p>{item}</p>
          ))}
          <p>]</p>
        </div>
        <div className="flex items-center text-grey-3 gap-2">
          <p>[</p>
          {spell.cost.map((item) => (
            <p>{item}</p>
          ))}
          <p>]</p>
        </div>
      </div>
      <div>{help ? <p>{spell.tooltip}</p> : <p className="">{spell.description}</p>}</div>
    </div>
  );
};

export default SpellComponent;
