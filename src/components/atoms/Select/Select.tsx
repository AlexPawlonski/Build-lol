import { ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CaretUpSolid } from "../../../assets/iconSvg";
import { classNames } from "../../../utils";

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
    <div ref={ref} className="min-w-max font-BeaufortforLOL uppercase">
      <div
        className="px-4 bg-blue-6 text-or-3 text-center py-1 cursor-pointer min-w-max flex justify-center items-center gap-2 "
        onClick={() => setIsActive((oldState) => !oldState)}
      >
        <p>{type ? t(`${type}.${defaultValue}`) : defaultValue}</p>
        <CaretUpSolid className={classNames("fill-or-3 h-4 mt-1 transform transition-all", !isActive && "rotate-[180deg]")} />
      </div>
      {isActive && (
        <ul className="bg-blue-6 max-h-[20vh] overflow-scroll border-2 border-or-3 ">
          {options.map((option, key) => (
            <li
              key={`option-${key}`}
              onClick={() => {
                console.log(option.value);
                onChange(option.value);
              }}
              className="hover:bg-or-3 border-[1px] border-or-3 border-opacity-5 hover:bg-opacity-10 cursor-pointer px-4 py-2"
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
