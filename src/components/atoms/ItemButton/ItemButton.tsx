import { ReactElement, useContext, useMemo } from "react";
import { classNames } from "../../../utils";
import { GlobalContext } from "../../../globalContext";
import border from "../../../assets/borderChamp.webp";
import { Item } from "../../../interface";
import { useDrag } from "react-dnd";
export interface Props {
  img: string;
  item: Item;
  size?: string;
}

const ItemButton = ({ img, item, size }: Props): ReactElement => {
  const { setItemFocus, setItemIsActive, itemIsActive } = useContext(GlobalContext);

  const isActive = useMemo(() => {
    return itemIsActive?.name === item.name;
  }, [itemIsActive]);

  const [{ isDragging }, drag] = useDrag<{ item: Item }, void, { isDragging: boolean }>({
    type: "ITEM_TO_INVENTORY",
    item: { item: item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <button
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, touchAction: "none" }}
      className={classNames(size, !isActive && "border-2 border-grey-2 hover:border-or-2", "m-1 relative")}
      onMouseEnter={() => !itemIsActive && setItemFocus(item)}
      onMouseLeave={() => !itemIsActive && setItemFocus(undefined)}
      draggable={true}
      onClick={() => {
        setItemFocus(item);
        setItemIsActive(item);
      }}
    >
      {isActive && (
        <img
          src={border}
          alt={`${border}-image`}
          className="absolute w-full h-full z-10 transform scale-[1.10]"
          style={{ top: 0, position: "absolute" }}
        />
      )}
      <img src={img} alt={`${img}-image`} className="w-full h-full" />
    </button>
  );
};

export default ItemButton;
