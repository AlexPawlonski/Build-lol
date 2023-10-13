import { ReactElement } from "react";
import { LoupIcon } from "../../../assets/iconSvg";

export interface Props {
  onChange: (text: string) => void;
}

const ImputSearch = ({ onChange }: Props): ReactElement => {
  return (
    <div className="border border-or-2 flex items-center">
      <LoupIcon className="fill-or-2 w-5 mx-2" />
      <input
        className="text-grey-1 border-none outline-none w-full py-2"
        style={{ background: "none" }}
        placeholder="Rechercher"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ImputSearch;

