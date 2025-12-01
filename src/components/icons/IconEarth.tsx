import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_earth.svg";

export type IconEarthProps = Omit<IconProps, "icon">;

export const IconEarth: React.FC<IconEarthProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
