import { ReactElement } from "react";
import { classNames } from "../../../utils";
import { useImgItem } from "@src/hook";
import { useGlobalContext } from "@src/context/globalContext";

export interface Props {
  image: string;
  alt: string;
  className?: string;
}

const ImageComponent = ({ image, alt, className }: Props): ReactElement => {
  return <img src={image} alt={alt} className={className} />;
};

export default ImageComponent;
