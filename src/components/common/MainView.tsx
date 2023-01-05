import styled from "styled-components";
import { Outlet, useLocation } from 'react-router-dom';
import BoardList from './Board/BoardList';
import {useEffect, useRef } from "react";
import { useSelector } from "react-redux";

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
    const {userScroll} = useSelector((state:any) => state.auth) // 변하는 스크롤 값
    const {scrollBox} = useSelector((state:any) => state.auth) // 페이지 로딩 시 이동해야 하는 스크롤 값
    let container = document.querySelector('#main') as HTMLElement;


    useEffect(()=>{
        setTimeout(() => container && container.scrollTo(0, scrollBox),100)
    },[location])

    return (
        <MainWrap id="main" ref={mainRef}>
            <Outlet/>
            {location.pathname === '/' ? <BoardList/> : null}
        </MainWrap>
    )
}

export default MainView;