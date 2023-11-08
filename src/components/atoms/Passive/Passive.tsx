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
    <div className="p-4 border-2 border-or-3 bg-blue-7">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={getChampionPassiveImg(passive.image.full, version)}
          alt={`Passive-${passive.name}-img`}
          className="border-2 border-or-2"
        />
        <div className="text-or-3">
          <h3 className="text-2xl">{passive.name}</h3>
          <h4 className="">{t("passive")}</h4>
        </div>
      </div>
      <div>
        <p className="">{passive.description}</p>
      </div>
    </div>
  );
};

export default PassiveComponent;
