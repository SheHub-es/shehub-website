import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_user.svg";

export type IconUserProps = Omit<IconProps, "icon">;

export const IconUser: React.FC<IconUserProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
