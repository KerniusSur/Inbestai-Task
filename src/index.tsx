import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "typeface-roboto";
import "./styles/index.css";
import App from "./App";
import { store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.querySelector("#root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// TODO: Uncomment or delete
// reportWebVitals();
