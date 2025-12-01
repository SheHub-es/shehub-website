import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_gift.svg";

export type IconGiftProps = Omit<IconProps, "icon">;

export const IconGift: React.FC<IconGiftProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
