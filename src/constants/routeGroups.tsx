import routes from "../constants/routes";
import PublicLayout from "../layouts/PublicLayout";
import PathGroup from "../models/path/PathGroup";

// TODO: decide if the comment should be kept here or moved to README.md
/**
 * @description Public route groups
 * @note This is a sample route group for public routes, regarding this project it is not necessary
 *  to create multiple route groups, however, it would allow to easily add other layouts if we wanted to add multiple layouts, user roles, etc.
 */
const routeGroups: PathGroup[] = [
  {
    layout: <PublicLayout />,
    path: "/",
    paths: routes,
  },
];

export default routeGroups;
