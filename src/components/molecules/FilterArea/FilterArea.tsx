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
    <section className="w-full p-2 pb-0 flex items-center h-16">
      <div className="flex lg:w-auto w-[75%] gap-2 mr-6">
        <RoleButton img={Top} isActive={isTop} onClick={() => setRoleSelected(!isTop ? Role.Top : undefined)} />
        <RoleButton
          img={Jungle}
          isActive={isJungle}
          onClick={() => setRoleSelected(!isJungle ? Role.Jungle : undefined)}
        />
        <RoleButton
          img={Middle}
          isActive={isMiddle}
          onClick={() => setRoleSelected(!isMiddle ? Role.Middle : undefined)}
        />
        <RoleButton img={AdcIcon} isActive={isAdc} onClick={() => setRoleSelected(!isAdc ? Role.Adc : undefined)} />
        <RoleButton
          img={Support}
          isActive={isSupport}
          onClick={() => setRoleSelected(!isSupport ? Role.Support : undefined)}
        />
      </div>
      <ImputSearch onChange={(search) => nameSearch(search)} />
    </section>
  );
};

export default FilterArea;
