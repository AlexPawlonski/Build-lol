import { ReactElement, useContext } from "react";
import { Button } from "../../atoms";
import { GlobalContext } from "../../../globalContext";

export interface Props {}

const Nav = ({}: Props): ReactElement => {
  const { router, setRouter, champSelected } = useContext(GlobalContext);
  return (
    <nav className="h-full w-[20%]">
      <ul className="w-full h-full gap-4 flex flex-col p-4">
        <li className="w-full">
          {router === "data" && <Button title="Champion" onClick={() => setRouter("champSelect")} size="w-full" />}
          {router === "champSelect" && champSelected && (
            <Button title="Back" onClick={() => setRouter("data")} size="w-full" />
          )}
        </li>
        <li className="w-full">
          <Button title="Boutique" onClick={() => console.log("clique")} size="w-full" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

