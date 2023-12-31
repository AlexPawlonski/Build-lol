import { ReactElement, useContext } from "react";
import logo from "@public/Build-lol-logo.webp";
import { Setting, Nav } from "../../molecules";
import { classNames } from "../../../utils";
import { useGlobalContext } from "@src/context/globalContext";


export interface Props {}

const Header = ({}: Props): ReactElement => {
  const { settingOpen } = useGlobalContext();

  return (
    <header
      className={classNames(
        !settingOpen && "border-or-3 border-b-2",
        "w-full flex justify-between z-50 bg-blue-7 sticky top-0"
      )}
    >
      <div
        className={classNames(
          settingOpen && "h-14 border-b-or-3 border-b-2",
          "flex items-center justify-between gap-4 px-4 w-full"
        )}
      >
        <div className="flex items-center h-[53px] gap-2 lg:gap-4 xl:gap-6">
          <img className="h-[45px]" src={logo.src} alt={`${logo.src}-alt`} />
          <h1 className="font-BeaufortforLOL text-base lg:text-sm  xl:text-2xl uppercase text-or-3">
            <a
              href="https://www.linkedin.com/in/alex-pawlonski/"
              target="_blank"
            >
              Build-lol.com
            </a>
          </h1>
          <Nav />
        </div>
        <Setting />
      </div>
    </header>
  );
};

export default Header;
