import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./constants/routes";
import AppTheme from "./theme/AppTheme";

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
