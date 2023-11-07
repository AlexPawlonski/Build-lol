import { ReactElement, useContext } from "react";
import { Button } from "../../atoms";
import { GlobalContext } from "../../../globalContext";
import { useTranslation } from "react-i18next";

export interface Props {}

const Nav = ({}: Props): ReactElement => {
  const { router, setRouter, champSelected } = useContext(GlobalContext);
  const { t } = useTranslation();
  return (
    <nav className="w-full">
      <ul className="w-full gap-4 flex flex-col p-4">
        <li className="w-full">
          {router === "data" && <Button title={t("selectChampion")} onClick={() => setRouter("champSelect")} size="w-full" />}
          {router === "champSelect" && champSelected && (
            <Button title={t("back")}  onClick={() => setRouter("data")} size="w-full" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

