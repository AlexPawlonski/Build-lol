"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CaretUpSolid } from "@public/iconSvg";
import { classNames } from "../../../utils";

export interface Props {
  defaultValue: string;
  type?: "lang" | "region";
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const Select = ({
  onChange,
  type,
  options,
  defaultValue,
}: Props): ReactElement => {
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
    <div
      ref={ref}
      className="font-BeaufortforLOL uppercase relative bg-blue-7 text-center py-1 cursor-pointer min-w-max"
      onClick={() => setIsActive((oldState) => !oldState)}
    >
      <div className="flex items-center justify-center gap-2 px-6 py-2 text-or-3">
        <p>{type ? t(`${type}.${defaultValue}`) : defaultValue}</p>
        <CaretUpSolid
          className={classNames(
            "fill-or-3 h-4 mt-1 transform transition-all",
            !isActive && "rotate-[180deg]"
          )}
        />
      </div>
      {isActive && (
        <ul className="lg:absolute z-50 top-12 bg-blue-7 max-h-[20vh] overflow-scroll lg:border-2 border-or-3 w-full">
          {options.map((option, key) => (
            <li
              key={`option-${key}`}
              onClick={() => onChange(option.value)}
              className="border-[1px] border-or-3 border-opacity-5 cursor-pointer px-4 py-2"
            >
              {t(option.label)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
