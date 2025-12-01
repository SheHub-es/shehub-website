import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_message.svg";

export type IconMessageProps = Omit<IconProps, "icon">;

export const IconMessage: React.FC<IconMessageProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
