import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/icon_search.svg";

export type IconSearchProps = Omit<IconProps, "icon">;

export const IconSearch: React.FC<IconSearchProps> = (props) => (
  <Icon icon={Svg} {...props} />
);
