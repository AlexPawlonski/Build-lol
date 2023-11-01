import { ReactElement, useContext, useMemo, useState } from "react";

import { useInitItems } from "../../../hook";
import { GlobalContext } from "../../../globalContext";

import { itemBytag } from "../../../utils";
import { ItemsCategorie } from "../../molecules";
import { ImputSearch } from "../../atoms";

export interface Props {}

const Header = ({}: Props): ReactElement => {
  const { language, version } = useContext(GlobalContext);

  const { data: items } = useInitItems(language, version);

  const [itemSearch, setItemSearch] = useState("");

  const itemsArray = useMemo(() => {
    if (items) {
      const itemFilter = Object.entries(items?.data).map((item) => item[1]);
      return itemFilter.filter((item) => item.name.toLowerCase().includes(itemSearch.toLowerCase()));
    }
  }, [items, itemSearch]);

  const ItemBytag = useMemo(() => {
    return itemsArray && Object.entries(itemBytag(itemsArray));
  }, [itemsArray]);

  return (
    <section className="p-4">
      <ImputSearch onChange={(search) => setItemSearch(search)} />
      <div className="flex flex-wrap overflow-scroll no-scrollbar" style={{ height: "calc(100vh - 220px)" }}>
        {ItemBytag && ItemBytag.map((item, key) => <ItemsCategorie key={key} categoryItem={item} />)}
      </div>
    </section>
  );
};

export default Header;

