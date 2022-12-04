import styled from "styled-components";
import { Link } from 'react-router-dom';

const Btn = styled.button`
    background-color : inherit;
    border : 1px solid #1484D6;
    border-radius : 30px;
    padding : 5px 30px;
    cursor : pointer;

    &:hover{
        background-color : #F5FAFD;
    }
`

const BtnText = styled.span`
    color : #1484D6;
    font-weight : bold;
    font-family: ${(props) => props.theme.defaultFont.TextFont};
`


const SignUp = () => {
    return (
        <Link to='/signup'>
            <Btn>
                <BtnText>Sign Up</BtnText>
            </Btn>
        </Link>
    )
}

export default SignUp;