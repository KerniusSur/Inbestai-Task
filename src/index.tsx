import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/configureStore";
import setupAxiosInterceptors from "./utils/axiosInterceptors";
import App from "./App";
import "./index.css";
import 'typeface-roboto';

const root = ReactDOM.createRoot(document.querySelector("#root")!);

setupAxiosInterceptors(store);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// TODO: Uncomment or delete
// reportWebVitals();
