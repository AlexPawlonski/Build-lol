import { ReactElement } from "react";
import { LoupIcon } from "../../../assets/iconSvg";
import { useTranslation } from "react-i18next";

export interface Props {
  onChange: (text: string) => void;
}

const ImputSearch = ({ onChange }: Props): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center bg-or-2 bg-opacity-5 rounded-md">
      <LoupIcon className="fill-or-3 w-5 mx-2" />
      <input
        className="border-none outline-none py-2 w-full"
        style={{ background: "none" }}
        placeholder={t("search")}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ImputSearch;

