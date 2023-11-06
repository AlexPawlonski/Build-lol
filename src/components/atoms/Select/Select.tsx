import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export interface Props {
  defaultValue: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const ChampionButton = ({ onChange, options, defaultValue }: Props): ReactElement => {
  const { t } = useTranslation();
  return (
    <select
      className="px-4 bg-blue-6 border-or-3 border-2 text-or-3 text-center py-1 cursor-pointer"
      onChange={(value) => onChange(value.currentTarget.value)}
      value={defaultValue}
      style={{ appearance: "none" }}
    >
      {options.map((option, key) => (
        <option key={`option-${key}`} value={option.value}>
          {t(option.label)}
        </option>
      ))}
    </select>
  );
};

export default ChampionButton;

