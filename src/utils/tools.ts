import { Item } from "../interface";

export function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function filterLangueListe(langueList: string[], langueSelect: string[]): string[]{
  console.log(langueList, langueSelect);
  
  return langueList.filter((search) => langueSelect.find((item) => item === search ))
}

export function selectFormat(array: string[]) {
  return array.map((item) => ({ label: item, value: item }));
}

export function itemBytag(itemsArray: Item[]) {
  const Boots: Item[] = [];
  const ManaRegen: Item[] = [];
  const HealthRegen: Item[] = [];
  const Health: Item[] = [];
  const Mana: Item[] = [];
  const Damage: Item[] = [];
  const CriticalStrike: Item[] = [];
  const SpellDamage: Item[] = [];
  const SpellBlock: Item[] = [];
  const Armor: Item[] = [];
  const LifeSteal: Item[] = [];
  const AttackSpeed: Item[] = [];
  const Jungle: Item[] = [];
  const OnHit: Item[] = [];
  const Consumable: Item[] = [];
  const Active: Item[] = [];
  const MagicPenetration: Item[] = [];
  const any: Item[] = [];
  if (itemsArray) {
    itemsArray.forEach((item) => {
      switch (item.tags[0]) {
        case "Boots":
          Boots.push(item);
          break;
        case "ManaRegen":
          ManaRegen.push(item);
          break;
        case "HealthRegen":
          HealthRegen.push(item);
          break;
        case "Health":
          Health.push(item);
          break;
        case "Mana":
          Mana.push(item);
          break;
        case "Damage":
          Damage.push(item);
          break;
        case "CriticalStrike":
          CriticalStrike.push(item);
          break;
        case "SpellDamage":
          SpellDamage.push(item);
          break;
        case "SpellBlock":
          SpellBlock.push(item);
          break;
        case "Armor":
          Armor.push(item);
          break;
        case "LifeSteal":
          LifeSteal.push(item);
          break;
        case "AttackSpeed":
          AttackSpeed.push(item);
          break;
        case "Jungle":
          Jungle.push(item);
          break;
        case "OnHit":
          OnHit.push(item);
          break;
        case "Consumable":
          Consumable.push(item);
          break;
        case "Active":
          Active.push(item);
          break;
        case "MagicPenetration":
          MagicPenetration.push(item);
          break;
        default:
          any.push(item);
          break;
      }
    });
  }
  return {
    boots: clearListeAndSortByPrise(Boots),
    nanaRegen: clearListeAndSortByPrise(ManaRegen),
    healthRegen: clearListeAndSortByPrise(HealthRegen),
    health: clearListeAndSortByPrise(Health),
    mana: clearListeAndSortByPrise(Mana),
    damage: clearListeAndSortByPrise(Damage),
    criticalStrike: clearListeAndSortByPrise(CriticalStrike),
    spellDamage: clearListeAndSortByPrise(SpellDamage),
    SpellBlock: clearListeAndSortByPrise(SpellBlock),
    armor: clearListeAndSortByPrise(Armor),
    lifeSteal: clearListeAndSortByPrise(LifeSteal),
    attackSpeed: clearListeAndSortByPrise(AttackSpeed),
    jungle: clearListeAndSortByPrise(Jungle),
    onHit: clearListeAndSortByPrise(OnHit),
    consumable: clearListeAndSortByPrise(Consumable),
    active: clearListeAndSortByPrise(Active),
    magicPenetration: clearListeAndSortByPrise(MagicPenetration),
    any: clearListeAndSortByPrise(any),
  };
}

export function clearListeAndSortByPrise(items: Item[]) {
  const clear: Item[] = [];
  items.forEach((item) => {
    item.gold.purchasable && item.gold.total > 0 && Object.entries(item.maps)[0][1] && clear.push(item);
  });
  clear.sort((item1, item2) => item1.gold.total - item2.gold.total);
  return [...clear];
}
