"use client";
import { ReactElement, useContext, useEffect, useState } from "react";
import { classNames } from "../../../utils";
import { useDrag, useDrop } from "react-dnd";
import { Item } from "../../../interface";
import { useGlobalContext } from "@src/context/globalContext";
import { useImgItem } from "@src/hook";

export interface Props {
  itemInInventory: Item | undefined;
  idInventory: number;
}

const ItemInventory = ({
  itemInInventory,
  idInventory,
}: Props): ReactElement => {
  const { setChampInventory, champInventory, version } = useGlobalContext();

  const { data: image } = useImgItem(
    version,
    itemInInventory?.image.full ? itemInInventory?.image.full : ""
  );

  const [item, setItem] = useState<
    { item: Item; image: string | undefined } | undefined
  >();

  const [{}, drop] = useDrop<
    { item: Item; img: string | undefined },
    void,
    { canDrop: boolean }
  >({
    accept: "ITEM_TO_INVENTORY",
    drop: (item) => {
      setItem({ item: item.item, image: item.img });
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
    if (itemInInventory) {
      setItem({ item: itemInInventory, image: image });
    } else {
      setItem(undefined);
    }
  }, [itemInInventory]);

  const [{ isDragging }, drag] = useDrag<
    { itemId: number },
    void,
    { isDragging: boolean }
  >({
    type: "ITEM_CAN_DELETE",
    item: { itemId: idInventory },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drop}
      className={classNames(
        "w-full border-2 relative",
        !item ? "border-grey-2 pb-[100%]" : "border-or-2"
      )}
    >
      <p className="absolute top-1 right-1">{idInventory}</p>
      {item && item.image && (
        <img
          ref={drag}
          style={{ opacity: isDragging ? 0.5 : 1 }}
          src={item.image}
          alt={`${item.item.name}-image`}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default ItemInventory;
