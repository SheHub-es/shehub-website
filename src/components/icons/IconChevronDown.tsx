import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_chevronDown.svg";

export type IconChevronDownProps = Omit<IconProps, "icon">;

export const IconChevronDown: React.FC<IconChevronDownProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
