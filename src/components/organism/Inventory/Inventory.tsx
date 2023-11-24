"use client";
import { ReactElement, useContext, useMemo, useState } from "react";
import { useInitItems } from "../../../hook";
import { useGlobalContext } from "@src/context/globalContext";
import { BuilderIcon } from "@public/iconSvg";
import { clearItemList, sortByItemLvl } from "../../../utils";
import { ImputSearch, ItemButton } from "../../atoms";
import { ItemDetail } from "../../molecules";
import { useTranslation } from "react-i18next";

export interface Props {
  pcPoint: { 1024: boolean; 1280: boolean };
}

const Inventory = ({ pcPoint }: Props): ReactElement => {
  const { language, version, itemFocus, itemIsActive } = useGlobalContext();
  const { t } = useTranslation();
  const { data: items } = useInitItems(language, version);

  const [itemSearch, setItemSearch] = useState("");

  const itemsArray = useMemo(() => {
    if (items) {
      const itemArray = Object.entries(items?.data).map((item) => item[1]);

      const itemFilter = clearItemList(itemArray);
      return itemFilter.filter((item) =>
        item.name.toLowerCase().includes(itemSearch.toLowerCase())
      );
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
    <section className="flex flex-col gap-3 lg:gap-4 inventoryHeight relative">
      <ImputSearch onChange={(search) => setItemSearch(search)} />
      <div className="overflow-scroll no-scrollbar lg:h-[70%]">
        {itemsArray &&
          Object.entries(sortByItemLvl(itemsArray)).map(
            (itemsLvl, key) =>
              itemsLvl[1].length > 0 && (
                <div key={key} className="mb-1 lg:mb-3">
                  <div className="w-full border-b-2 border-or-3 mb-2">
                    <h3 className="text-lg lg:text-2xl text-or-3">
                      {t(`categories.${itemsLvl[0]}`)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap content-start lg:gap-1">
                    {itemsLvl[1]?.map((item, key) => (
                      <ItemButton
                        key={key}
                        item={item}
                        size="w-10 h-10 lg:w-14 lg:h-14"
                      />
                    ))}
                  </div>
                </div>
              )
          )}
      </div>
      {pcPoint[1024] && (
        <div className="h-[30%]">
          {showDetail ? (
            <ItemDetail item={showDetail} pcPoint={pcPoint} />
          ) : (
            <div className="flex flex-col items-center justify-center text-2xl h-full opacity-40">
              <h2 className="text-blue-4 text-center">{t("help.hoverItem")}</h2>
              <BuilderIcon className="w-[35%] fill-blue-4" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Inventory;
