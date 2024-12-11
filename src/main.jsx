import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import './index.css';
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>  
        <App />
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
