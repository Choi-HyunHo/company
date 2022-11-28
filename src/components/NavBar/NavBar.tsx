import styled from "styled-components";
import LogIn from "../common/Button/LogIn";
import SignUp from "../common/Button/SignUp";

const MainWrap = styled.div`
    width : 100%;
    height : 50px;
    border-bottom : 1px solid #EDEFF1;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const LogoTitle = styled.span`
    font-family : ${(props) => props.theme.defaultFont.LogoFont};
    font-size : 24px;
`

const NavBar = () => {
    return (
        <MainWrap>
            <div style={{marginLeft : '30px'}}>
                <LogoTitle>COMPANY</LogoTitle>
            </div>
            <div style={{display: 'flex'}}>
                <SignUp/>
                <div style={{marginRight :'20px'}}></div>
                <LogIn/>
                <div style={{marginRight :'100px'}}></div>
            </div>
        </MainWrap>
    )
}

export default NavBar;