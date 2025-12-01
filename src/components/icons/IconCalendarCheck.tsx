import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_calendarCheck.svg";

export type IconCalendarCheckProps = Omit<IconProps, "icon">;

export const IconCalendarCheck: React.FC<IconCalendarCheckProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
