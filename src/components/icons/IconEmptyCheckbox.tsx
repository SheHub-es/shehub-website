import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_emptyCheckbox.svg";

export type IconEmptyCheckboxProps = Omit<IconProps, "icon">;

export const IconEmptyCheckbox: React.FC<IconEmptyCheckboxProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
