import { ReactElement, useContext } from "react";
import { classNames } from "../../../utils";
import { GlobalContext } from "../../../globalContext";
import { Item } from "../../../interface";
export interface Props {
  img: string;
  item: Item;
  size?: string;
  onClick: (id: string) => void;
}

const ItemButton = ({ img, item, size, onClick }: Props): ReactElement => {
  const { setItemHover } = useContext(GlobalContext);
  return (
    <button
      className={classNames(size, "border-2 border-grey-2 hover:border-or-2 m-1")}
      onClick={() => onClick(item.name)}
      onMouseEnter={(e) => {
        console.log(e.currentTarget.offsetTop);

        setItemHover({
          position: { x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 10 },
          item: item,
        });
      }}
      onMouseLeave={() => setItemHover(undefined)}
    >
      <img src={img} alt={`${img}-image`} className="w-full h-full" />
    </button>
  );
};

export default ItemButton;
