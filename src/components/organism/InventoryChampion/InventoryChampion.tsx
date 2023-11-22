import { ReactElement, useContext } from "react";
import { ItemInventory } from "../../atoms";
import { useDrop } from "react-dnd";
import { classNames } from "../../../utils";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "@src/context/globalContext";
import { Trash } from "@public/iconSvg";

export interface Props {}

const InventoryChampion = ({}: Props): ReactElement => {
  const { champInventory, setChampInventory } = useGlobalContext();

  const { t } = useTranslation();

  const [{ isOver }, drop] = useDrop<
    { itemId: number },
    void,
    { canDrop: boolean; isOver: boolean }
  >({
    accept: "ITEM_CAN_DELETE",
    drop: (item) => {
      const newIventory = champInventory;
      const keys = Object.keys(newIventory);
      if (item.itemId >= 0 && item.itemId < keys.length) {
        const keyToUpdate = keys[item.itemId];
        newIventory[keyToUpdate] = undefined;
      }
      setChampInventory(newIventory);
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section className={classNames(isOver ? "text-or-2" : "text-or-3")}>
      <h2>{t("help.addItem")}</h2>
      <div
        className="my-4 grid border-[1px] border-grey-2"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {Object.entries(champInventory).map((item, key) => (
          <ItemInventory
            key={key}
            itemInInventory={item[1]}
            idInventory={key}
          />
        ))}
      </div>
      <div
        ref={drop}
        className={classNames(
          isOver ? "border-or-2" : "border-or-3",
          "flex gap-2 items-center justify-center border-2 p-2"
        )}
      >
        <p>{t("help.deleteItem")}</p>
        <Trash
          className={classNames(
            isOver ? "fill-or-2 scale-105" : "fill-or-3",
            "w-6 transform transition-all"
          )}
        />
      </div>
    </section>
  );
};

export default InventoryChampion;
