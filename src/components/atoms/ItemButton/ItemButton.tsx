import { ReactElement } from "react";
import { classNames } from "../../../utils";
export interface Props {
  img: string;
  id: string;
  size?: string;
  onClick: (id: string) => void;
}

const ItemButton = ({ img, id, size, onClick }: Props): ReactElement => {
  return (
    <button
      className={classNames(size, "border-2 border-grey-2 hover:border-or-2")}
      onClick={() => onClick(id)}
    >
      <img src={img} alt={`${img}-image`} className="w-full h-full" />
    </button>
  );
};

export default ItemButton;

