import { ReactElement, useContext, useMemo } from "react";
import { classNames } from "../../../utils";
import border from "@public/borderChamp.webp";
import { Item } from "../../../interface";
import { useDrag } from "react-dnd";
import { useGlobalContext } from "@src/context/globalContext";
import { ImageComponent } from "..";
import { useImgItem } from "@src/hook";
import { BuilderIcon } from "@public/iconSvg";
export interface Props {
  item: Item;
  size?: string;
}

const ItemButton = ({ item, size }: Props): ReactElement => {
  const { setItemFocus, setItemIsActive, itemIsActive, version } =
    useGlobalContext();

  const { data: image, isLoading } = useImgItem(version, item.image.full);

  const isActive = useMemo(() => {
    return itemIsActive?.name === item.name;
  }, [item.name, itemIsActive?.name]);

  const [{ isDragging }, drag] = useDrag<
    { item: Item; img: string | undefined },
    void,
    { isDragging: boolean }
  >({
    type: "ITEM_TO_INVENTORY",
    item: { item: item, img: image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <button
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, touchAction: "none" }}
      className={classNames(
        size,
        !isActive && "border-2 border-grey-2 hover:border-or-2",
        "m-1 relative"
      )}
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
          src={border.src}
          alt={`${border}-image`}
          className="absolute w-full h-full z-10 transform scale-[1.10]"
          style={{ top: 0, position: "absolute" }}
        />
      )}

      {image && !isLoading ? (
        <ImageComponent
          image={image}
          alt={`champion-${item.image.full}-img`}
          className="w-full h-full"
        />
      ) : (
        <BuilderIcon className="w-full h-full fill-blue-6" />
      )}
    </button>
  );
};

export default ItemButton;
