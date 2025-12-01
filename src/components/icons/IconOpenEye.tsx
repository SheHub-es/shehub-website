import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_openEye.svg";

export type IconOpenEyeProps = Omit<IconProps, "icon">;

export const IconOpenEye: React.FC<IconOpenEyeProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
