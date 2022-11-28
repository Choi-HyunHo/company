import styled from "styled-components";
import LogIn from "../common/Button/LogIn";
import SignUp from "../common/Button/SignUp";

const MainWrap = styled.div`
    width : 100%;
    height : 50px;
    border-bottom : 1px solid #EDEFF1;
    display : flex;
    justify-content : flex-end;
    align-items : center;
`

const NavBar = () => {
    return (
        <MainWrap>
            <SignUp/>
            <div style={{marginRight :'20px'}}></div>
            <LogIn/>
            <div style={{marginRight :'100px'}}></div>
        </MainWrap>
    )
}

export default NavBar;