import { ThemeProvider } from "@mui/material";
import { StrictMode, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InbestSnackbar from "./components/InbestSnackbar";
import routeGroups from "./constants/routeGroups";
import routes from "./constants/routes";
import useDebounce from "./hooks/useDebounce";
import { store } from "./store/configureStore";
import { useAppSelector } from "./store/hooks";
import AppTheme from "./theme/AppTheme";

import RouterRedirect from "./utils/RouterRedirect";
import { savePostCodes } from "./utils/localStorageUtil";
import Alert from "models/alert/Alert";

const App = () => {
  const alertState = useAppSelector((state) => state.alerts);
  const { postcodes } = useAppSelector((state) => state.postcodes);
  const [alertComponent, setAlertComponent] = useState<Alert | undefined>(
    alertState.alert
  );

  store.subscribe(
    useDebounce(() => {
      savePostCodes(postcodes);
    }, 500)
  );

  useEffect(() => {
    console.log("alert: ", alertState.alert);
    setAlertComponent(alertState.alert);
  }, [alertState.alert]);

  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={AppTheme}>
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
                {(alertState.alert || alertComponent) && (
                  <InbestSnackbar
                    open={true}
                    severity={
                      alertComponent?.severity ??
                      alertState.alert?.severity ??
                      "info"
                    }
                    message={
                      alertComponent?.message ?? alertState.alert?.message ?? ""
                    }
                  />
                )}
              </Route>
            ))}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
