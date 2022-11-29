import styled from "styled-components";
import { Link } from 'react-router-dom';

const Btn = styled.button`
    background-color : #1484D6;
    border : 1px solid #1484D6;
    border-radius : 30px;
    padding : 5px 30px;
    cursor : pointer;

    &:hover{
        background-color : #0079D3;
    }
`

const BtnText = styled.span`
    color : #FFFFFF;
    font-weight : bold;
    font-family: ${(props) => props.theme.defaultFont.TextFont};
`


const SignIn = () => {
    return (
        <Link to='/login'>
            <Btn>
                <BtnText>Log In</BtnText>
            </Btn>
        </Link>
    )
}

export default SignIn;