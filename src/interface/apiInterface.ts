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

export interface Champion {
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
  stats: {
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
  };
  tags: string[];
  title: string;
}

export interface ChampionsData {
  format: string;
  type: string;
  version: string;
  data: Champion[];
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
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
