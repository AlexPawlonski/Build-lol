import { ReactElement } from "react";

export interface Props {
  defaultValue: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const ChampionButton = ({ onChange, options, defaultValue }: Props): ReactElement => {
  return (
    <select className="w-28 bg-blue-6 border-or-3 border-2 text-or-3 text-center py-1 uppercase" onChange={(value) => onChange(value.currentTarget.value)} value={defaultValue}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default ChampionButton;

