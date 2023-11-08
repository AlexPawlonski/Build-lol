import { ReactElement } from "react";
import { LoupIcon } from "../../../assets/iconSvg";
import { useTranslation } from "react-i18next";

export interface Props {
  onChange: (text: string) => void;
}

const ImputSearch = ({ onChange }: Props): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="border border-or-3 flex items-center">
      <LoupIcon className="fill-or-3 w-5 mx-2" />
      <input
        className="border-none outline-none w-full py-2"
        style={{ background: "none" }}
        placeholder={t("search")}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ImputSearch;

