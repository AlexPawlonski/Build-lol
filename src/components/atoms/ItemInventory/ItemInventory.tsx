import { ReactElement, useContext, useEffect, useState } from "react";
import { classNames } from "../../../utils";
import { getItemImg } from "../../../api";
import { useDrag, useDrop } from "react-dnd";
import { Item } from "../../../interface";
import { GlobalContext } from "../../../globalContext";
export interface Props {
  itemInInventory: Item | undefined;
  idInventory: number;
}

const ItemInventory = ({ itemInInventory, idInventory }: Props): ReactElement => {
  const { setChampInventory, champInventory, version } = useContext(GlobalContext);
  const [item, setItem] = useState<Item | undefined>();

  const [{}, drop] = useDrop<{ item: Item }, void, { canDrop: boolean }>({
    accept: "ITEM_TO_INVENTORY",
    drop: (item) => {
      setItem(item.item);
      const newIventory = champInventory;
      const keys = Object.keys(newIventory);
      if (idInventory >= 0 && idInventory < keys.length) {
        const keyToUpdate = keys[idInventory];
        newIventory[keyToUpdate] = item.item;
      }
      setChampInventory(newIventory);
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
    }),
  });

  useEffect(() => {
    !Boolean(itemInInventory) ? setItem(undefined) : setItem(itemInInventory);
  }, [itemInInventory]);

  const [{ isDragging }, drag] = useDrag<{ itemId: number }, void, { isDragging: boolean }>({
    type: "ITEM_CAN_DELETE",
    item: { itemId: idInventory },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drop}
      className={classNames("w-full border-2 relative", !item ? "border-grey-2 pb-[100%]" : "border-or-2")}
    >
      <p className="absolute top-1 right-1">{idInventory}</p>
      {item && (
        <img
          ref={drag}
          style={{ opacity: isDragging ? 0.5 : 1 }}
          src={getItemImg(item.image.full, version)}
          alt={`${item.image.full}-image`}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default ItemInventory;
