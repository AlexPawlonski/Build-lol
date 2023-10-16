import { ReactElement, useContext, useState } from "react";
import { ItemButton } from "../../atoms";
import { Item } from "../../../interface";
import { getItemImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";

export interface Props {
  categoryItem: [string, Item[]];
}

const ItemsCategorie = ({ categoryItem }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(true);

  if (categoryItem[1].length > 0) {
    return (
      <div className="w-full">
        <div
          className="flex items-center mb-2 justify-between border-b border-or-3 text-or-3 cursor-pointer"
          onClick={() => setIsActive((oldState) => !oldState)}
        >
          <p className="text-xl capitalize mr-3">{categoryItem[0]}</p>
          <p className="max-w-min font-bold text-2xl">{isActive ? "-" : "+"}</p>
        </div>
        {isActive &&
          categoryItem[1]?.map((item, key) => (
            <ItemButton
              key={key}
              img={getItemImg(item.image.full, version)}
              id={item.name}
              size="w-10"
              onClick={(id) => console.log(id)}
            />
          ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ItemsCategorie;

