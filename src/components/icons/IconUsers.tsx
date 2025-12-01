import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_users.svg";

export type IconUsersProps = Omit<IconProps, "icon">;

export const IconUsers: React.FC<IconUsersProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
