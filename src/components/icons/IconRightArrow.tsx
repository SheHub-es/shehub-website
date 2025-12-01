import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_rightArrow.svg";

export type IconRightArrowProps = Omit<IconProps, "icon">;

export const IconRightArrow: React.FC<IconRightArrowProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
