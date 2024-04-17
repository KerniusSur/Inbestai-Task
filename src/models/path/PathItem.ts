import { ReactNode } from "react";

/* eslint-disable no-undef */
interface PathItem {
  path: string;
  element: ReactNode;
  tag?: string;
  menuLabel?: string;
  menuIcon?: ReactNode;
  activeMenuIcon?: ReactNode;
  showReactiveWidgets?: boolean;
}

export default PathItem;
