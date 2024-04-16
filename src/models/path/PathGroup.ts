/* eslint-disable no-undef */
import PathItem from "models/path/PathItem";

interface PathGroup {
  layout: JSX.Element;
  path: string;
  paths: PathItem[];
}

export default PathGroup;
