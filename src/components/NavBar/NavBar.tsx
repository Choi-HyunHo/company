import styled from "styled-components";
import SignUp from "../common/Button/SignUp";
import Login from '../common/Button/LogIn';
import { Link } from 'react-router-dom';

const MainWrap = styled.div`
    width : 100%;
    height : 50px;
    border-bottom : 1px solid #EDEFF1;
    display : flex;
    justify-content : space-between;
    align-items : center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const LogoTitle = styled.span`
    font-family : ${(props) => props.theme.defaultFont.LogoFont};
    font-size : 24px;
`

const NavBar = () => {

    return (
        <MainWrap>
            <div style={{marginLeft : '30px'}}>
                <Link to='/'>
                    <LogoTitle>COMPANY</LogoTitle>
                </Link>
            </div>
            <div style={{display: 'flex'}}>
                <SignUp/>
                <div style={{marginRight :'20px'}}></div>
                <Login/>
                <div style={{marginRight :'100px'}}></div>
            </div>
        </MainWrap>
    )
}

export default NavBar;