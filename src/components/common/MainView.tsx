import styled from "styled-components";
import { Outlet, useLocation } from 'react-router-dom';
import BoardList from './Board/BoardList';
import {useEffect, useRef } from "react";

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
    overflow-y : scroll;
`

const MainView = () => {
    const location = useLocation();
    const mainRef = useRef<any>();
    let scrollPosition:any;
    let testValue = document.querySelector('#main') as HTMLElement;

    // const handleScrollPosition = () => {
    //     scrollPosition = sessionStorage.getItem("scrollPosition");

    //     if (scrollPosition) {
    //         window.scrollTo(0, parseInt(scrollPosition));
    //         sessionStorage.removeItem("scrollPosition");
    //     }
    // }

    useEffect(()=>{
        // handleScrollPosition();
        if(scrollPosition){
            scrollPosition = sessionStorage.getItem("scrollPosition");
            console.log('scrollPosition', typeof scrollPosition)
            testValue.scrollTo(0, parseInt(scrollPosition));
        }

    },[])


    return (
        <MainWrap id="main" ref={mainRef}>
            <Outlet/>
            {location.pathname === '/' ? <BoardList/> : null}
        </MainWrap>
    )
}

export default MainView;