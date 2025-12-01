import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_x.svg";

export type IconXProps = Omit<IconProps, "icon">;

export const IconX: React.FC<IconXProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
