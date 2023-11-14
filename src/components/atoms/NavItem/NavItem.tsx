import { ReactElement } from "react";
import { classNames } from "../../../utils";

export interface Props {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  canClick: boolean;
}

const NavItem = ({ title, icon, onClick, canClick }: Props): ReactElement => {
  return (
    <div
      className={classNames(
        canClick && "cursor-pointer group hover:text-or-1 hover:bg-gradient-to-t hover:from-or-5 hover:to-blue-7",
        !canClick ? "bg-gradient-to-t from-or-5 to-blue-7 text-or-1" : "text-or-3",
        "relative flex items-center justify-center h-full gap-3 font-BeaufortforLOL px-4",
      )}
      onClick={() => canClick && onClick()}
    >
      <div className={classNames(!canClick ? "first:fill-or-1" : "group-hover:first:fill-or-1 first:fill-or-3")}>{icon}</div>
      <p className="lg:block hidden">{title}</p>
    </div>
  );
};

export default NavItem;

