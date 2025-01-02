import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Components/login/login.jsx";
import Pointage from "./Components/Pointage/pointage.jsx";

function App() {

    <Login />

    const router = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/pointage', element: <Pointage />},
        {path: '/login', element: <Login />}
    ])
    return <RouterProvider router={router} />
}

export default App
