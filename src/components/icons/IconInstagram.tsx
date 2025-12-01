import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_instagram.svg";

export type IconInstagramProps = Omit<IconProps, "icon">;

export const IconInstagram: React.FC<IconInstagramProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
