import { ReactElement, useMemo } from "react";
import { classNames } from "../../../utils";
import Link from "next/link";

import { usePathname } from "next/navigation";

export interface Props {
  title: string;
  icon: ReactElement;
  href: string;
}

const NavItem = ({ title, icon, href }: Props): ReactElement => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);

  return (
    <Link
      className={classNames(
        !isActive &&
          "cursor-pointer group hover:text-or-1 hover:bg-gradient-to-t hover:from-or-5 hover:to-blue-7",
        isActive
          ? "bg-gradient-to-t from-or-5 to-blue-7 text-or-1"
          : "text-or-3",
        "relative flex items-center justify-center h-full gap-3 font-BeaufortforLOL px-4"
      )}
      href={href}
    >
      <div
        className={classNames(
          isActive
            ? "first:fill-or-1"
            : "group-hover:first:fill-or-1 first:fill-or-3"
        )}
      >
        {icon}
      </div>
      <p className="lg:block hidden">{title}</p>
    </Link>
  );
};

export default NavItem;
