import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_leftArrow.svg";

export type IconLeftArrowProps = Omit<IconProps, "icon">;

export const IconLeftArrow: React.FC<IconLeftArrowProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
