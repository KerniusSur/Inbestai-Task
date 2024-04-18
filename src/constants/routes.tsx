import PathItem from "../models/path/PathItem";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/Page404";

const routes: PathItem[] = [
  {
    path: "/",
    element: <HomePage />,
    tag: "home",
    showReactiveWidgets: true,
  },
  {
    path: "/404",
    element: <Page404 />,
    tag: "not-found",
  },
  {
    path: "*",
    element: <Page404 />,
    tag: "404",
  },
];

export default routes;
