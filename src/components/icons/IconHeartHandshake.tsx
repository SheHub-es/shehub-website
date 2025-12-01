import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_heartHandshake.svg";

export type IconHeartHandshakeProps = Omit<IconProps, "icon">;

export const IconHeartHandshake: React.FC<IconHeartHandshakeProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
