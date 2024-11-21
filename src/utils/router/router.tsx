import { createBrowserRouter } from "react-router-dom";
import { APP_PATCH } from "../consts/AppComsts";
import Home from "../../pages/Home/Home";



const router = createBrowserRouter([

    {
        path: APP_PATCH.HOME,
        element: <Home />,
    }

])

export default router