import { ReactElement } from "react";
import { ChampionLoadingImg } from "../../molecules";

export interface IconProps {}

const DataView = ({}: IconProps): ReactElement => {
  return (
    <section className="w-full h-full p-6">
      <ChampionLoadingImg />
    </section>
  );
};

export default DataView;

