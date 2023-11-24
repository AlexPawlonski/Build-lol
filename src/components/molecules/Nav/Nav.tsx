import { ReactElement, useContext } from "react";
import { NavItem } from "../../atoms";
import { useTranslation } from "react-i18next";
import { BuilderIcon, ChampionIcon } from "@public/iconSvg";
import { useGlobalContext } from "@src/context/globalContext";

export interface Props {}

const Nav = ({}: Props): ReactElement => {
  const { champSelected } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <nav className="h-full flex gap-2 lg:gap-4 xl:gap-6">
      {champSelected && (
        <>
          <NavItem
            title={t("selectChampion")}
            icon={<ChampionIcon className="w-7 h-full p-1" />}
            href="/ChampSelect"
          />
          <NavItem
            title={t("builderChampion")}
            icon={<BuilderIcon className="w-7" />}
            href="/DataView"
          />
        </>
      )}
    </nav>
  );
};

export default Nav;
