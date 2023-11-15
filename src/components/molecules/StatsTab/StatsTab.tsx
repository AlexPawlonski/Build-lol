import { ReactElement } from "react";
import { StatItem } from "../../atoms";

export interface Props {
  stats: { [x: string]: number | [number, number] };
}

const StatsTab = ({ stats }: Props): ReactElement => {
  return (
    <div className="grid grid-cols-3 gap-4 lg:p-2 items-center w-full">
      {Object.entries(stats).map((item, key) => {
        return <StatItem key={key} label={item[0]} value={item[1]} />;
      })}
    </div>
  );
};

export default StatsTab;
