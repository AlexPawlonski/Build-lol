import { ReactElement } from "react";
import { Button } from "../../atoms";

export interface Props {}

const Nav = ({}: Props): ReactElement => {
  return (
    <nav className="h-full w-[20%]">
      <ul className="w-full h-full gap-4 flex flex-col p-4">
        <li className="w-full">
          <Button title="Champion" onClick={() => console.log("clique")} size="w-full" />
        </li>
        <li className="w-full">
          <Button title="Boutique" onClick={() => console.log("clique")} size="w-full" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

