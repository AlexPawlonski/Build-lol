import { ReactElement, useMemo } from "react";
import { ImputSearch, RoleButton } from "../../atoms";
import { AdcIcon, Jungle, Middle, Support, Top } from "../../../assets/iconRole";
import { Role } from "../../../interface";

export interface Props {
  roleSelect?: Role;
  setRoleSelected: (role: Role | undefined) => void;
  nameSearch: (name: string) => void;
}

const FilterArea = ({ roleSelect, setRoleSelected, nameSearch }: Props): ReactElement => {
  const isTop = useMemo(() => roleSelect === Role.Top, [roleSelect]);
  const isJungle = useMemo(() => roleSelect === Role.Jungle, [roleSelect]);
  const isMiddle = useMemo(() => roleSelect === Role.Middle, [roleSelect]);
  const isSupport = useMemo(() => roleSelect === Role.Support, [roleSelect]);
  const isAdc = useMemo(() => roleSelect === Role.Adc, [roleSelect]);

  return (
    <section className="w-full border-or-2 border-b-2 flex items-center justify-between py-2 h-16">
      <div className="flex gap-4">
        <RoleButton
          img={Top}
          size="w-10"
          isActive={isTop}
          onClick={() => setRoleSelected(!isTop ? Role.Top : undefined)}
        />
        <RoleButton
          img={Jungle}
          size="w-10"
          isActive={isJungle}
          onClick={() => setRoleSelected(!isJungle ? Role.Jungle : undefined)}
        />
        <RoleButton
          img={Middle}
          size="w-10"
          isActive={isMiddle}
          onClick={() => setRoleSelected(!isMiddle ? Role.Middle : undefined)}
        />
        <RoleButton
          img={AdcIcon}
          size="w-10"
          isActive={isAdc}
          onClick={() => setRoleSelected(!isAdc ? Role.Adc : undefined)}
        />
        <RoleButton
          img={Support}
          size="w-10"
          isActive={isSupport}
          onClick={() => setRoleSelected(!isSupport ? Role.Support : undefined)}
        />
      </div>
      <ImputSearch onChange={(search) => nameSearch(search)} />
    </section>
  );
};

export default FilterArea;

