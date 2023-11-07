import { ReactElement, useContext } from "react";
import { NavItem } from "../../atoms";
import { GlobalContext } from "../../../globalContext";
import { useTranslation } from "react-i18next";
import { BuilderIcon, ChampionIcon } from "../../../assets/iconSvg";

export interface Props {}

const Nav = ({}: Props): ReactElement => {
  const { router, setRouter, champSelected } = useContext(GlobalContext);
  const { t } = useTranslation();
  return (
    <nav className="h-full flex">
      {champSelected && (
        <>
          <NavItem
            title={t("selectChampion")}
            icon={<ChampionIcon className="w-7 p-1" />}
            onClick={() => setRouter("champSelect")}
            canClick={router === "data"}
          />
          <NavItem
            title={t("builderChampion")}
            icon={<BuilderIcon className="w-7" />}
            onClick={() => setRouter("data")}
            canClick={Boolean(router === "champSelect" && champSelected)}
          />
        </>
      )}
    </nav>
  );
};

export default Nav;
