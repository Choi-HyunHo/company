import React from "react";

// home - component
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import MainView from "../components/common/MainView";


const Home = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <SideBar/>
            <MainView/>
        </React.Fragment>
    )
}

export default Home;