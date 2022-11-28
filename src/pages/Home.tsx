import React from "react";
import styled from "styled-components";

// home - component
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import MainView from "../components/common/MainView";


const Background = styled.div`
    background-color : #DAE0E6;
`

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