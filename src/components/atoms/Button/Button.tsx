import { ReactElement } from "react";
import { classNames } from "../../../utils";

export interface Props {
  icon?: ReactElement;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

const Button = ({ icon, text, onClick, isActive }: Props): ReactElement => {
  return (
    <button
      className={classNames(
        isActive ? "bg-gradient-to-t from-blue-3 to-blue-7 border-blue-2" : "bg-grey-4 border-blue-3",
        " border-4 flex justify-center items-center gap-2 rounded mx-3 py-2",
      )}
      onClick={() => onClick()}
    >
      <div className="first:w-7 first:fill-stats-ms">{icon}</div>
      <h3 className="uppercase text-2xl font-bold text-stats-ms">{text}</h3>
    </button>
  );
};

export default Button;
