import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routeGroups from "./constants/routeGroups";
import routes from "./constants/routes";
import AppTheme from "./theme/AppTheme";
import RouterRedirect from "./utils/RouterRedirect";

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          {routeGroups.map((group) => (
            <Route key={group.path} path={group.path} element={group.layout}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <RouterRedirect tag={route.tag}>
                      {route.element}
                    </RouterRedirect>
                  }
                />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
