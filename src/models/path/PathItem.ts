import { ReactNode } from "react";

interface PathItem {
  path: string;
  element: ReactNode;
  tag?: string;
}

export default PathItem;
