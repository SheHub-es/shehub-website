import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_mail.svg";

export type IconMailProps = Omit<IconProps, "icon">;

export const IconMail: React.FC<IconMailProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
