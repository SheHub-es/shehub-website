import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_closedEye.svg";

export type IconClosedEyeProps = Omit<IconProps, "icon">;

export const IconClosedEye: React.FC<IconClosedEyeProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
