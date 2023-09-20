import { ReactElement, useContext } from "react";
import { Spell } from "../../../interface";
import { getChampionSpellImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";

export interface Props {
  spell: Spell;
}

const SpellComponent = ({ spell }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  return (
    <div className="border-2 border-or-3">
      <img src={getChampionSpellImg(spell.image.full, version)} alt={`spell-${spell.id}-img`} className="w-full" />
    </div>
  );
};

export default SpellComponent;

