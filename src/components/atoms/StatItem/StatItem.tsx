import { ReactElement } from "react";

import {
  AcIcon,
  AdIcon,
  ApIcon,
  ArmorIcon,
  AttackSpeedIcon,
  Crit,
  MsIcon,
  RmIcon,
  Range,
  RegenMana,
  RegenPv,
  PeneArmor,
  PeneAp,
  vampirism,
  MsSpeIcon,
  AdSpe,
} from "../../../assets/iconStat";

export interface Props {
  label: string;
  value: number | [number, number];
}

const StatItem = ({ label, value }: Props): ReactElement => {
  function icon(key: string) {
    switch (key) {
      case "attackdamage":
        return AdIcon;
      case "spelldamage":
        return ApIcon;
      case "attackspeed":
        return AttackSpeedIcon;
      case "attackrange":
        return Range;
      case "crit":
        return Crit;
      case "mpregen":
        return RegenMana;
      case "hpregen":
        return RegenPv;
      case "movespeed":
        return MsIcon;
      case "armor":
        return ArmorIcon;
      case "spellblock":
        return RmIcon;
      case "cdr":
        return AcIcon;
      case "peneArmor":
        return PeneArmor;
      case "peneAp":
        return PeneAp;
      case "attackSpe":
        return AdSpe;
      case "vampirism":
        return vampirism;
      case "msSpe":
        return MsSpeIcon;
      default:
        break;
    }
  }

  return (
    <div className="flex items-center">
      <img src={icon(label)} alt={`${label}-img`} className="w-10 mr-2" />
      <p className="font-bold text-or-1 text-2xl ml-2">{Array.isArray(value) ? `${value[0]} | ${value[1]}%` : value}</p>
    </div>
  );
};

export default StatItem;

