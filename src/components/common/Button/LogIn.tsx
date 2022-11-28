import styled from "styled-components";

const Btn = styled.button`
    background-color : #1484D6;
    border : 1px solid #1484D6;
    border-radius : 30px;
    padding : 5px 30px;
`

const BtnText = styled.span`
    display : inline-block;
    text-align : center;
    color : #FFFFFF;
    font-weight : bold;
`


const SignIn = () => {
    return (
        <Btn>
            <BtnText>Sign In</BtnText>
        </Btn>
    )
}

export default SignIn;