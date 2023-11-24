import { ReactElement } from "react";
import { classNames } from "../../../utils";
import border from "@public/borderChamp.webp";
import { ImageComponent } from "..";
import { useGlobalContext } from "@src/context/globalContext";
import { useImgChamp } from "@src/hook";
import { ChampionIcon } from "@public/iconSvg";

export interface Props {
  img: string;
  id: string;
  onClick?: (id: string) => void;
  disable: boolean;
}

const ChampionButton = ({ img, id, onClick, disable }: Props): ReactElement => {
  const { version } = useGlobalContext();
  const { data: image, isLoading } = useImgChamp(version, id);

  return (
    <button
      className={classNames(
        !disable && "group border-2 hover:border-or-2 relative w-full",
        isLoading ? "border-blue-6" : "border-grey-2"
      )}
      onClick={() => !disable && onClick && onClick(id)}
    >
      {!disable && (
        <img
          src={border.src}
          alt={`${border}-image`}
          className="absolute w-full h-full z-10 transform opacity-0 group-hover:opacity-100 transition-all scale-[1.10]"
          style={{ top: 0, position: "absolute" }}
        />
      )}

      {image && !isLoading ? (
        <ImageComponent
          image={image}
          alt={`champion-${img}-img`}
          className="w-full h-full"
        />
      ) : (
        <ChampionIcon className="w-full h-full p-10 fill-blue-6 opacity-50" />
      )}
    </button>
  );
};

export default ChampionButton;
