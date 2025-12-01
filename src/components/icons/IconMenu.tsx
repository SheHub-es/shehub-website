import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_menu.svg";

export type IconMenuProps = Omit<IconProps, "icon">;

export const IconMenu: React.FC<IconMenuProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
