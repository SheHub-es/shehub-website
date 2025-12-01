import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_rocket.svg";

export type IconRocketProps = Omit<IconProps, "icon">;

export const IconRocket: React.FC<IconRocketProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
