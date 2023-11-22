import { ReactElement } from "react";
import { classNames } from "../../../utils";
import { useImgItem } from "@src/hook";
import { useGlobalContext } from "@src/context/globalContext";

export interface Props {
  image: HTMLImageElement;
  alt: string;
  className?: string;
}

const ImageComponent = ({ image, alt, className }: Props): ReactElement => {
   return <img src={image.src} alt={alt} className={className} />;
};

export default ImageComponent;
