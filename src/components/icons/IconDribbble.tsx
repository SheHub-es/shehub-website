import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_dribbble.svg";

export type IconDribbbleProps = Omit<IconProps, "icon">;

export const IconDribbble: React.FC<IconDribbbleProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
