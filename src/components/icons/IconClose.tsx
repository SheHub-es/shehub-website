import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_close.svg";

export type IconCloseProps = Omit<IconProps, "icon">;

export const IconClose: React.FC<IconCloseProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
