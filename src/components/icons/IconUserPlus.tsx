import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_userPlus.svg";

export type IconUserPlusProps = Omit<IconProps, "icon">;

export const IconUserPlus: React.FC<IconUserPlusProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
