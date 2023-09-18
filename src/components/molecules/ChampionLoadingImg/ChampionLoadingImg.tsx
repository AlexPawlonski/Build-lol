import { ReactElement, useContext, useMemo } from "react";

import { GlobalContext } from "../../../globalContext";
import { getChampionLoading } from "../../../api";

export interface Props {}

const ChampionLoadingImg = ({}: Props): ReactElement => {
  const { champSelected } = useContext(GlobalContext);

  const champLoadingImg = useMemo(() => {
    if (champSelected?.id) {
      return getChampionLoading(champSelected?.id);
    }
  }, [champSelected]);

  return (
    <div className="flex items-center justify-center border-2 border-or-2 w-52">
      {champLoadingImg ? (
        <img src={champLoadingImg} alt={`${champSelected?.id}-Loading-img`} />
      ) : (
        <p>No Champ Selected</p>
      )}
    </div>
  );
};

export default ChampionLoadingImg;

