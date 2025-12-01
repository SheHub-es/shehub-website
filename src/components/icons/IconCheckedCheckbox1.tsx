import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_checkedCheckbox1.svg";

export type IconCheckedCheckbox1Props = Omit<IconProps, "icon">;

export const IconCheckedCheckbox1: React.FC<IconCheckedCheckbox1Props> = (props) => (
  <Icon icon={Svg} {...props} />
);
