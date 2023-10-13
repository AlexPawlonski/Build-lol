import { ReactElement, useContext, useMemo } from "react";
import { useInitItems } from "../../../hook";

import { GlobalContext } from "../../../globalContext";
import { ItemButton } from "../../atoms";
import { getItemImg } from "../../../api";

export interface Props {}

const Header = ({}: Props): ReactElement => {
  const { language, version } = useContext(GlobalContext);

  const { data: items, isLoading } = useInitItems(language, version);

  const itemsArray = useMemo(() => {
    return items && Object.entries(items?.data).map((item) => item[1]);
  }, [items]);

  return (
    <section className="p-4 flex">
      <div className="flex flex-wrap justify-center gap-2 overflow-scroll" style={{ height: "calc(100vh - 180px)" }}>
        {!isLoading &&
          itemsArray?.map((item, key) => (
            <ItemButton
              key={key}
              img={getItemImg(item.image.full, version)}
              id={item.name}
              size="w-10"
              onClick={(id) => console.log(id)}
            />
          ))}
      </div>
    </section>
  );
};

export default Header;

