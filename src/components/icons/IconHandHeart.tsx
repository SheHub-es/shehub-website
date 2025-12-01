import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_handHeart.svg";

export type IconHandHeartProps = Omit<IconProps, "icon">;

export const IconHandHeart: React.FC<IconHandHeartProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
