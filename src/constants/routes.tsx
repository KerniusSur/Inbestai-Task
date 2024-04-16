import HomePage from "../pages/HomePage";
import PathItem from "../models/path/PathItem";
import PostCodePage from "../pages/PostcodePage";
import Page404 from "../pages/Page404";

const routes: PathItem[] = [
  {
    path: "/",
    element: <HomePage />,
    tag: "home",
  },
  {
    path: "/postcodes",
    element: <PostCodePage />,
    tag: "postcodes",
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
