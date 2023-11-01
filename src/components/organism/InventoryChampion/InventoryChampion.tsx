import { ReactElement, useContext } from "react";
import { GlobalContext } from "../../../globalContext";
import ItemZone from "../../molecules/ItemZone";

export interface Props {}

const InventoryChampion = ({}: Props): ReactElement => {
  const { champInventory } = useContext(GlobalContext);

  return (
    <section className="m-4  grid border-[1px] border-grey-2" style={{ gridTemplateColumns: "repeat(3, 1fr)"}}>
      {Object.entries(champInventory).map((item) => (
        <ItemZone item={item[1]} />
      ))}
    </section>
  );
};

export default InventoryChampion;

