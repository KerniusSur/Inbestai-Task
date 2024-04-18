import { ReactNode } from "react";
import PathItem from "./PathItem";

interface PathGroup {
  layout: ReactNode;
  path: string;
  paths: PathItem[];
}

export default PathGroup;
