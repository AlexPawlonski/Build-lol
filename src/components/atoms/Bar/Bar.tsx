import { ReactElement } from "react";
import { classNames } from "../../../utils";

export interface Props {
  state: number;
  type: "hp" | "mp" | "energie";
}

const Bar = ({ state, type }: Props): ReactElement => {
  return (
    <div
      className={classNames(
        "w-full h-10 flex items-center justify-center rounded-md",
        type === "hp" && "bg-stats-hp",
        type === "mp" && "bg-stats-mp",
        type === "energie" && " bg-stats-energie",
      )}
    >
      <p className="font-bold">{state}</p>
    </div>
  );
};

export default Bar;

