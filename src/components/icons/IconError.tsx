import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_Error.svg";

export type IconErrorProps = Omit<IconProps, "icon">;

export const IconError: React.FC<IconErrorProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
