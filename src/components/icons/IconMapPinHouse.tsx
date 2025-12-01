import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_mapPinHouse.svg";

export type IconMapPinHouseProps = Omit<IconProps, "icon">;

export const IconMapPinHouse: React.FC<IconMapPinHouseProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
