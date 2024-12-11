import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home/Home";



const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children: [{
        path: "Home",
        element:<Home/>
    }]


    
    }]
)


export default router;