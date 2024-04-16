/* eslint-disable no-undef */
interface PathItem {
  path: string;
  element: JSX.Element | any;
  tag?: string;
  menuLabel?: string;
  menuIcon?: JSX.Element;
  activeMenuIcon?: JSX.Element;
}

export default PathItem;
