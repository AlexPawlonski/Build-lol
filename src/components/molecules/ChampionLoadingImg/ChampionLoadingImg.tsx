import { ReactElement } from "react";
import { getChampionLoading } from "../../../api";
import { useImgLoading } from "@src/hook";
import { ImageComponent } from "@src/components/atoms";

export interface Props {
  id: string;
}

const ChampionLoadingImg = ({ id }: Props): ReactElement => {
  const { data: image, isLoading } = useImgLoading(id);
  return (
    <div className="items-center justify-center border-2 border-or-2 w-full hidden lg:flex">
      {image && !isLoading ? (
        <ImageComponent
          image={image}
          alt={`${id}-Loading-img`}
          className="w-full"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ChampionLoadingImg;
