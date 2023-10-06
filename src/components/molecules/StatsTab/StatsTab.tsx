import { ReactElement } from "react";
import { StatItem } from "../../atoms";

export interface Props {
  stats: { [x: string]: number | [number, number] };
}

const StatsTab = ({ stats }: Props): ReactElement => {
  return (
    <div className="border-2 border-or-3 grid grid-cols-2 gap-y-2 gap-x-4 p-2">
      {Object.entries(stats).map((item, key) => {
        return <StatItem key={key} label={item[0]} value={item[1]} />;
      })}
    </div>
  );
};

export default StatsTab;

