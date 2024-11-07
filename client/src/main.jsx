import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CarContext from "./context/CarContext.jsx";

createRoot(document.getElementById("root")).render(
  <CarContext>
    <App />
  </CarContext>
);
