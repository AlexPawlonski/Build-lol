import { ReactElement, useEffect, useState } from "react";

export interface Props {
  onChange: (level: number) => void;
}

const Level = ({ onChange }: Props): ReactElement => {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    onChange(level);
  }, [level]);

  return (
    <div className="flex items-center">
      <div
        className="triangle transform rotate-[-90deg]"
        onClick={() => level !== 1 && setLevel((oldState) => oldState - 1)}
      ></div>
      <p>{level} LV</p>
      <div
        className="triangle transform rotate-[90deg]"
        onClick={() => level !== 16 && setLevel((oldState) => oldState + 1)}
      ></div>
    </div>
  );
};

export default Level;

