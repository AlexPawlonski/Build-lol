export interface LeagueOfLegendsCDN {
  cdn: string;
  css: string;
  dd: string;
  l: string;
  lg: string;
  n: {
    item: string;
    rune: string;
    mastery: string;
    champion: string;
    language: string;
    map: string;
    profileicon: string;
    sticker: string;
    summoner: string;
  };
  profileiconmax: number;
  store: null;
  v: string;
}

export interface ChampionCompact {
  version: string;
  id: string;
  key: string;
  blurb: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  name: string;
  partype: string;
  stats: Stats;
  tags: Tag[];
  title: string;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  skins: {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
  }[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: Tag[];
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: Stats;
  spells: Spell[];
  passive: Passive;
  recommended: any[];
}

export interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface Passive {
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: any;
  effect: (number | null)[][];
  effectBurn: (string | null)[];
  vars: any[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  resource: string;
}

export interface ChampionsData {
  format: string;
  type: string;
  version: string;
  data: ChampionCompact[];
}
export interface ChampionData {
  format: string;
  type: string;
  version: string;
  data: Champion;
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  from?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: string]: boolean;
  };
  stats: {
    [key: string]: number;
  };
  requiredAlly?: string;
}

export interface ItemData {
  type: string;
  version: string;
  basic: {
    name: string;
    rune: {
      isrune: boolean;
      tier: number;
      type: string;
    };
    gold: {
      base: number;
      total: number;
      sell: number;
      purchasable: boolean;
    };
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed: boolean;
    stacks: number;
    depth: number;
    consumeOnFull: boolean;
    from: string[];
    into: string[];
    specialRecipe: number;
    inStore: boolean;
    hideFromAll: boolean;
    requiredChampion: string;
    requiredAlly: string;
    stats: {
      [key: string]: number;
    };
    tags: string[];
    maps: {
      [key: string]: boolean;
    };
  };
  data: Item[];
  groups: {
    id: string;
    MaxGroupOwnable: string;
  }[];
}

export interface Inventory {
  [key: string]: Item | undefined;
}

export interface ChampionStats {
  armor: number;
  attackdamage: number;
  attackrange: number;
  attackspeed: number;
  crit: number;
  hp: number;
  hpregen: number;
  movespeed: number;
  mp: number;
  mpregen: number;
  spellblock: number;
}

export interface PerLvlStats {
  hpperlevel: number;
  mpperlevel: number;
  armorperlevel: number;
  spellblockperlevel: number;
  hpregenperlevel: number;
  mpregenperlevel: number;
  critperlevel: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
}

export enum Role {
  Top = "Top",
  Jungle = "Jungle",
  Middle = "Middle",
  Adc = "Adc",
  Support = "Support",
}

export enum Tag {
  Fighter = "Fighter",
  Support = "Support",
  Tank = "Tank",
  Mage = "Mage",
  Assassin = "Assassin",
  Marksman = "Marksman",
}

export enum TagItem {
  Boots = "Boots",
  ManaRegen = "ManaRegen",
  HealthRegen = "HealthRegen",
  Health = "Health",
  Mana = "Mana",
  Damage = "Damage",
  CriticalStrike = "CriticalStrike",
  SpellDamage = "SpellDamage",
  SpellBlock = "SpellBlock",
  Armor = "Armor",
  LifeSteal = "LifeSteal",
  AttackSpeed = "AttackSpeed",
  Jungle = "Jungle",
  Trinket = "Trinket",
  OnHit = "OnHit",
  Consumable = "Consumable",
  Active = "Active",
  NonbootsMovement = "NonbootsMovement",
  MagicPenetration = "MagicPenetration",
  GoldPer = "GoldPer",
}
