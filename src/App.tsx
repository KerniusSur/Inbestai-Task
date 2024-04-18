import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InbestSnackbar from "./components/InbestSnackbar";
import routeGroups from "./constants/routeGroups";
import routes from "./constants/routes";
import useDebounce from "./hooks/useDebounce";
import { store } from "./store/configureStore";
import AppTheme from "./styles/AppTheme";
import LocalStorageUtils from "./utils/LocalStorageUtils";
import RouterRedirect from "./utils/RouterRedirect";

const App = () => {
  store.subscribe(
    useDebounce(() => {
      LocalStorageUtils.saveState(store.getState());
    }, 50)
  );

  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={AppTheme}>
          <InbestSnackbar />
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
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
