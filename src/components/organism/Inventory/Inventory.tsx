import { ReactElement, useContext, useMemo, useState } from "react";

import { useInitItems } from "../../../hook";
import { GlobalContext } from "../../../globalContext";

import { clearListeAndSortByPrise } from "../../../utils";
import { ImputSearch, ItemButton } from "../../atoms";
import { getItemImg } from "../../../api";
import { ItemDetail } from "../../molecules";

export interface Props {
  pcPoint: { 1024: boolean; 1280: boolean };
}

const Inventory = ({ pcPoint }: Props): ReactElement => {
  const { language, version, itemFocus, itemIsActive } = useContext(GlobalContext);

  const { data: items } = useInitItems(language, version);

  const [itemSearch, setItemSearch] = useState("");

  const itemsArray = useMemo(() => {
    if (items) {
      const itemFilter = clearListeAndSortByPrise(Object.entries(items?.data).map((item) => item[1]));
      return itemFilter.filter((item) => item.name.toLowerCase().includes(itemSearch.toLowerCase()));
    }
  }, [items, itemSearch]);

  const showDetail = useMemo(() => {
    if (itemFocus) {
      return itemFocus;
    }
    if (itemIsActive) {
      return itemIsActive;
    }
  }, [itemFocus, itemIsActive]);

  return (
    <section className="lg:flex lg:flex-col lg:gap-4">
      <ImputSearch onChange={(search) => setItemSearch(search)} />
      <div className="flex flex-wrap content-start overflow-scroll no-scrollbar">
        {itemsArray?.map((item, key) => (
          <ItemButton key={key} img={getItemImg(item.image.full, version)} item={item} size="w-10 h-10" />
        ))}
      </div>
      {showDetail && pcPoint[1024] && <ItemDetail item={showDetail} pcPoint={pcPoint} />}
    </section>
  );
};

export default Inventory;
