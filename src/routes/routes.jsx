import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import NotFound from "../pages/Not-Found/NotFound";
import Signin from "../pages/Auth/Sign-In/Signin";
import Signup from "../pages/Auth/Sign-Up/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path:"signin",
    element:<Signin/>
  },
  {
    path:"signup",
    element:<Signup/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

export default router;
