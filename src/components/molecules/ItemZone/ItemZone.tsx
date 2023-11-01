import { ReactElement } from "react";

import { Item } from "../../../interface";
import { ItemInventory } from "../../atoms";
import { classNames } from "../../../utils";

export interface Props {
  onDragDrop?: (item: Item) => void;
  item: Item | undefined;
 
}

const ItemZone = ({ onDragDrop, item }: Props): ReactElement => {
 
  return (
    <div onDragCapture={(e) => console.log(e)}>
      <ItemInventory img={item?.image.full} />
    </div>
  );
};

export default ItemZone;

