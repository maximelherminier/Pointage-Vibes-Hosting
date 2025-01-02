import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './Components/login/login.jsx'
import Pointage from "./Components/Pointage/pointage.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
        <App/>
)
