/* eslint-disable no-undef */
import PathItem from "models/path/PathItem";
import { ReactNode } from "react";

interface PathGroup {
  layout: ReactNode;
  path: string;
  paths: PathItem[];
}

export default PathGroup;
