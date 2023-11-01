import { ReactElement } from "react";
import { classNames } from "../../../utils";
export interface Props {
  img?: string;
}

const ItemInventory = ({ img }: Props): ReactElement => {
  return (
    <div className={classNames("w-full pb-[100%] border-2 ", !img ? "border-grey-2" : "border-or-2")}>
      {img && <img src={img} alt={`${img}-image`} className="w-full h-full" />}
    </div>
  );
};

export default ItemInventory;

