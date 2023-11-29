import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import TaskContextProvider from "../context/taskContextProvider";

const Root = () =>{
    return(
        <TaskContextProvider>
        <Navigation/>
<Outlet/>
        </TaskContextProvider>
    )
}

export default Root;