import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_success.svg";

export type IconSuccessProps = Omit<IconProps, "icon">;

export const IconSuccess: React.FC<IconSuccessProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
