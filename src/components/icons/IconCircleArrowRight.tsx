import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_circleArrowRight.svg";

export type IconCircleArrowRightProps = Omit<IconProps, "icon">;

export const IconCircleArrowRight: React.FC<IconCircleArrowRightProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
