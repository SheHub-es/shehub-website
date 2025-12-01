import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_checkedCheckbox2.svg";

export type IconCheckedCheckbox2Props = Omit<IconProps, "icon">;

export const IconCheckedCheckbox2: React.FC<IconCheckedCheckbox2Props> = (props) => (
  <Icon icon={Svg} {...props} />
);
