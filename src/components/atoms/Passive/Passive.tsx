import { ReactElement, useContext } from "react";
import { Passive } from "../../../interface";
import { getChampionPassiveImg } from "../../../api";
import { GlobalContext } from "../../../globalContext";
import { useTranslation } from "react-i18next";

export interface Props {
  passive: Passive;
}

const PassiveComponent = ({ passive }: Props): ReactElement => {
  const { version } = useContext(GlobalContext);

  const { t } = useTranslation();
  return (
    <div className="lg:p-4 p-2 mx-3 lg:mx-0 border-2 border-or-3 bg-blue-7">
      <div className="flex items-center sm:flex-wrap gap-4 mb-2 lg:mb-4">
        <img
          src={getChampionPassiveImg(passive.image.full, version)}
          alt={`Passive-${passive.name}-img`}
          className="border-2 border-or-2"
        />
        <div className="text-or-3">
          <h3 className="text-lg">{passive.name}</h3>
          <h4>{t("passive")}</h4>
        </div>
      </div>
      <p className="text-sm">{passive.description}</p>
    </div>
  );
};

export default PassiveComponent;
