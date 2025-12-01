import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_linkedIn.svg";

export type IconLinkedInProps = Omit<IconProps, "icon">;

export const IconLinkedIn: React.FC<IconLinkedInProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
