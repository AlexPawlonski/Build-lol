import { ReactElement } from "react";
import { classNames } from "../../../utils";

export interface Props {
  size?: string;
  title: string;
  onClick: () => void;
}

const Button = ({ size, title, onClick }: Props): ReactElement => {
  return (
    <button
      className={classNames(
        size,
        "py-2 px-4 bg-blue-7 border-4 border-or-3 hover:border-or-2 hover:text-or-2 text-or-3 transition-colors font-BeaufortforLOL uppercase",
      )}
      onClick={() => onClick()}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;

