import styled from "styled-components";
import { Outlet } from 'react-router-dom';

const MainWrap = styled.div`
    width : calc(100vw - 270px);
    height : calc(100vh - 50px);
    background-color : #DAE0E6;
    position : absolute;
    right : 0px;
    top : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const MainView = () => {

    return (
        <MainWrap>
            <Outlet/>
        </MainWrap>
    )
}

export default MainView;