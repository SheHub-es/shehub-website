import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_circleArrowLeft.svg";

export type IconCircleArrowLeftProps = Omit<IconProps, "icon">;

export const IconCircleArrowLeft: React.FC<IconCircleArrowLeftProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
