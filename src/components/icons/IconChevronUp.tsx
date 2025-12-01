import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_chevronUp.svg";

export type IconChevronUpProps = Omit<IconProps, "icon">;

export const IconChevronUp: React.FC<IconChevronUpProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
