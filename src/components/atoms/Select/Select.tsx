import { ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Props {
  defaultValue: string;
  type?: "lang" | "region";
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const ChampionButton = ({ onChange, type, options, defaultValue }: Props): ReactElement => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className=" min-w-max">
      <div
        className="px-4 bg-blue-6 border-or-3 border-2 text-or-3 text-center py-1 cursor-pointer min-w-max"
        onClick={() => setIsActive((oldState) => !oldState)}
      >
        <p>{type ? t(`${type}.${defaultValue}`) : defaultValue}</p>
      </div>
      {isActive && (
        <ul className="bg-blue-6 p-2 max-h-[20vh] overflow-scroll">
          {options.map((option, key) => (
            <li
              key={`option-${key}`}
              onClick={() => {
                console.log(option.value);
                onChange(option.value);
              }}
              className="hover:bg-or-2 cursor-pointer"
            >
              {t(option.label)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChampionButton;
