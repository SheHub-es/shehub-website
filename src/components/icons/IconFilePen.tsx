import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_filePen.svg";

export type IconFilePenProps = Omit<IconProps, "icon">;

export const IconFilePen: React.FC<IconFilePenProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
